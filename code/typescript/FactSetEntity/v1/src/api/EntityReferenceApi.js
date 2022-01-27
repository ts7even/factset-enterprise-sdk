/**
 * FactSet Entity API
 * Using an entity centric data model, FactSet's Entity API provides access to FactSet's complete security and entity level symbology, comprehensive entity reference data, and all of the necessary relationships and connections to create a foundation that tightly correlates disparate sources of information to a master entity identifier. Use this API to quickly understand the full entity structure and related securities. 
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import EntityReferenceRequest from '../model/EntityReferenceRequest';
import EntityReferenceResponse from '../model/EntityReferenceResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* EntityReference service.
* @module api/EntityReferenceApi
* @version 0.9.0
*/
export default class EntityReferenceApi {

    /**
    * Constructs a new EntityReferenceApi. 
    * @alias module:api/EntityReferenceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns an entity reference profiles for an individual entity
     * Returns an Entity reference profile for the requested Entity Id(s). Data points include - Ultimate Parent Id, Credit Parent Id, Headquarters location details, Website URL, and Business Description. 
     * @param {Array.<String>} ids The requested Market Identifier. Accepted input identifiers include Ticker-Exchange, Ticker-Regions, CUSIPs, ISINs, SEDOLs, or FactSet Permanent Ids, such as -R, -L, or -E.<p>**Max Ids Limit set to 3000 in a single request**</p>   *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids,       which may lead to exceeding this request line limit of 8KB, its       advised for any requests with large request lines to be requested through       the respective \\\"POST\\\" method.</p>* 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityReferenceResponse} and HTTP response
     */
    getEntityReferencesWithHttpInfo(ids) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getEntityReferences");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntityReferenceResponse;
      return this.apiClient.callApi(
        '/factset-entity/v1/entity-references', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns an entity reference profiles for an individual entity
     * Returns an Entity reference profile for the requested Entity Id(s). Data points include - Ultimate Parent Id, Credit Parent Id, Headquarters location details, Website URL, and Business Description. 
     * @param {Array.<String>} ids The requested Market Identifier. Accepted input identifiers include Ticker-Exchange, Ticker-Regions, CUSIPs, ISINs, SEDOLs, or FactSet Permanent Ids, such as -R, -L, or -E.<p>**Max Ids Limit set to 3000 in a single request**</p>   *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids,       which may lead to exceeding this request line limit of 8KB, its       advised for any requests with large request lines to be requested through       the respective \\\"POST\\\" method.</p>* 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityReferenceResponse}
     */
    getEntityReferences(ids) {
      return this.getEntityReferencesWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns an entity reference data for a list of ids.
     * Returns an entity reference object for the requested entity ids. Data points include - ultimate parent id, headquarters location details, credit parent id, website, and business description. 
     * @param {module:model/EntityReferenceRequest} entityReferenceRequest Request Body to request a list of Entity Reference objects.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EntityReferenceResponse} and HTTP response
     */
    postEntityReferencesWithHttpInfo(entityReferenceRequest) {
      let postBody = entityReferenceRequest;
      // verify the required parameter 'entityReferenceRequest' is set
      if (entityReferenceRequest === undefined || entityReferenceRequest === null) {
        throw new Error("Missing the required parameter 'entityReferenceRequest' when calling postEntityReferences");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EntityReferenceResponse;
      return this.apiClient.callApi(
        '/factset-entity/v1/entity-references', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns an entity reference data for a list of ids.
     * Returns an entity reference object for the requested entity ids. Data points include - ultimate parent id, headquarters location details, credit parent id, website, and business description. 
     * @param {module:model/EntityReferenceRequest} entityReferenceRequest Request Body to request a list of Entity Reference objects.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EntityReferenceResponse}
     */
    postEntityReferences(entityReferenceRequest) {
      return this.postEntityReferencesWithHttpInfo(entityReferenceRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}