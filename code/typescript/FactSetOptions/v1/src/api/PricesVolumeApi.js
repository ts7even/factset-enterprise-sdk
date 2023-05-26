/**
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import OptionsPricesRequest from '../model/OptionsPricesRequest';
import OptionsPricesResponse from '../model/OptionsPricesResponse';
import OptionsVolumeRequest from '../model/OptionsVolumeRequest';
import OptionsVolumeResponse from '../model/OptionsVolumeResponse';
import UnderlyingVolumeRequest from '../model/UnderlyingVolumeRequest';
import UnderlyingVolumeResponse from '../model/UnderlyingVolumeResponse';

/**
* PricesVolume service.
* @module api/PricesVolumeApi
*/
export default class PricesVolumeApi {

    /**
    * Constructs a new PricesVolumeApi. 
    * @alias module:api/PricesVolumeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the pricing related information for the specified option identifier
     * Returns the pricing related information for the specified option identifier. Items include -  * Ask * Bid * Mid * Mid Bid Ask * Settlement * Last Price Type (Settlement or MidBidAsk) * Last Price * Strike Price * Underlying Security Price * 52 Week High/Low * Open, High, Low for day. Note securities must be trading for day requested.    *Currently only OPRA Exchange is supported with exchange ISO \"USA\"* 
     * @param {module:model/OptionsPricesRequest} optionsPricesRequest Options Prices Request Body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptionsPricesResponse} and HTTP response
     */
    getOptionsPricesForListWithHttpInfo(optionsPricesRequest) {
      let postBody = optionsPricesRequest;
      // verify the required parameter 'optionsPricesRequest' is set
      if (optionsPricesRequest === undefined || optionsPricesRequest === null) {
        throw new Error("Missing the required parameter 'optionsPricesRequest' when calling getOptionsPricesForList");
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


      let returnType = OptionsPricesResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/prices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the pricing related information for the specified option identifier
     * Returns the pricing related information for the specified option identifier. Items include -  * Ask * Bid * Mid * Mid Bid Ask * Settlement * Last Price Type (Settlement or MidBidAsk) * Last Price * Strike Price * Underlying Security Price * 52 Week High/Low * Open, High, Low for day. Note securities must be trading for day requested.    *Currently only OPRA Exchange is supported with exchange ISO \"USA\"* 
     * @param {module:model/OptionsPricesRequest} optionsPricesRequest Options Prices Request Body
     * @return { Promise.< module:model/OptionsPricesResponse > } a Promise, with data of type {@link module:model/OptionsPricesResponse }
     */
    getOptionsPricesForList(optionsPricesRequest) {
      return this.getOptionsPricesForListWithHttpInfo(optionsPricesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the volume details for the specified option identifier
     * Returns the volume details for the specified option identifier for a specified exchange. Data items include -  * Open Interest * Volume    *Currently only OPRA Exchange is supported with exchange ISO \"USA\"* 
     * @param {module:model/OptionsVolumeRequest} optionsVolumeRequest Volume Request Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptionsVolumeResponse} and HTTP response
     */
    getOptionsVolumeForListWithHttpInfo(optionsVolumeRequest) {
      let postBody = optionsVolumeRequest;
      // verify the required parameter 'optionsVolumeRequest' is set
      if (optionsVolumeRequest === undefined || optionsVolumeRequest === null) {
        throw new Error("Missing the required parameter 'optionsVolumeRequest' when calling getOptionsVolumeForList");
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


      let returnType = OptionsVolumeResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/volume', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the volume details for the specified option identifier
     * Returns the volume details for the specified option identifier for a specified exchange. Data items include -  * Open Interest * Volume    *Currently only OPRA Exchange is supported with exchange ISO \"USA\"* 
     * @param {module:model/OptionsVolumeRequest} optionsVolumeRequest Volume Request Object
     * @return { Promise.< module:model/OptionsVolumeResponse > } a Promise, with data of type {@link module:model/OptionsVolumeResponse }
     */
    getOptionsVolumeForList(optionsVolumeRequest) {
      return this.getOptionsVolumeForListWithHttpInfo(optionsVolumeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the aggregate volume and open interest for the list of the options under the specified security identifier
     * Return the Volume and Open Interest details for list of the options for the specified underlying security identifier. The data is aggregated for all options contracts associated to the underlying id, or specified in the request only the contracts listed on a specific exchange. Data Includes -  * Put Call Ratio  * Total Put Volume & Open Interest * Total Call Volume & Open Interest * Total Put & Call Volume & Open Interest    *Currently only OPRA Exchange is supported with exchange ISO \"USA\"* 
     * @param {module:model/UnderlyingVolumeRequest} underlyingVolumeRequest Underlying Volume Request Body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnderlyingVolumeResponse} and HTTP response
     */
    getUnderlyingVolumeForListWithHttpInfo(underlyingVolumeRequest) {
      let postBody = underlyingVolumeRequest;
      // verify the required parameter 'underlyingVolumeRequest' is set
      if (underlyingVolumeRequest === undefined || underlyingVolumeRequest === null) {
        throw new Error("Missing the required parameter 'underlyingVolumeRequest' when calling getUnderlyingVolumeForList");
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


      let returnType = UnderlyingVolumeResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/underlying-volume', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the aggregate volume and open interest for the list of the options under the specified security identifier
     * Return the Volume and Open Interest details for list of the options for the specified underlying security identifier. The data is aggregated for all options contracts associated to the underlying id, or specified in the request only the contracts listed on a specific exchange. Data Includes -  * Put Call Ratio  * Total Put Volume & Open Interest * Total Call Volume & Open Interest * Total Put & Call Volume & Open Interest    *Currently only OPRA Exchange is supported with exchange ISO \"USA\"* 
     * @param {module:model/UnderlyingVolumeRequest} underlyingVolumeRequest Underlying Volume Request Body
     * @return { Promise.< module:model/UnderlyingVolumeResponse > } a Promise, with data of type {@link module:model/UnderlyingVolumeResponse }
     */
    getUnderlyingVolumeForList(underlyingVolumeRequest) {
      return this.getUnderlyingVolumeForListWithHttpInfo(underlyingVolumeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





