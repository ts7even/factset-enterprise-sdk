/**
 * FactSet Concordance API
 *    The FactSet Concordance API enables Application Developers and Data Scientists to programmatically discover the FactSet Identifier for a specific Entity or Person based on attributes, such as name, URL, and location.FactSet Identifiers are mapped to industry-standard identifiers, as well as to a comprehensive set of reference data and unique content, to enhance the ability to quickly connect content sets.<p>     Using the submitted attributes, the FactSet Concordance API leverages FactSet’s extensive Entity Master, People, and Symbology databases to return potential candidate matches and a proposed match. The result is a concorded FactSet Identifier that can then be used as input throughout FactSet's expanding catalog of Content using our Content APIs or Standard DataFeeds.</p>    <b>There are two types of workflows supported in the API:</b>    <b>Entity & People Match:</b> The first workflow follows traditional API conventions in that a request is accepted and a response is returned synchronously enabling the concordance of up to 25 names in a single request. The response returns a list of 20 candidates as well as a proposed match.    <b>Entity & People Match - Bulk:</b> The second workflow allows you to input a large list of names within a .CSV file in a single request With this workflow, a task is created for uploading a set of queries. Once the task has completed, the client retrieves the concordance results through the /entity-decisions or /people-decisions endpoint. Note that in the Bulk workflow, only the matches for the records are returned. Candidates are not included.    Once the service has provided a list of concorded FactSet Identifiers, you can then use our Entity Mappings and People Mappings endpoints to further review the universe of mapped identifiers or modify existing records. </p> 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PeopleMappingRequest model module.
 * @module model/PeopleMappingRequest
 */
class PeopleMappingRequest {
    /**
     * Constructs a new <code>PeopleMappingRequest</code>.
     * @alias module:model/PeopleMappingRequest
     * @param clientId {String} A unique identifier supplied by the user. ClientId is saved to the user's Concordance universe and will be used as the identifier for that entity within the universe.
     * @param universeId {Number} A unique identifier supplied to a person to save the data into his/her universe.
     */
    constructor(clientId, universeId) { 
        
        PeopleMappingRequest.initialize(this, clientId, universeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId, universeId) { 
        obj['clientId'] = clientId;
        obj['universeId'] = universeId;
    }

    /**
     * Constructs a <code>PeopleMappingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeopleMappingRequest} obj Optional instance to populate.
     * @return {module:model/PeopleMappingRequest} The populated <code>PeopleMappingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeopleMappingRequest();

            if (data.hasOwnProperty('clientEntity')) {
                obj['clientEntity'] = ApiClient.convertToType(data['clientEntity'], 'String');
            }
            if (data.hasOwnProperty('clientFirstName')) {
                obj['clientFirstName'] = ApiClient.convertToType(data['clientFirstName'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('clientLastName')) {
                obj['clientLastName'] = ApiClient.convertToType(data['clientLastName'], 'String');
            }
            if (data.hasOwnProperty('clientMiddleName')) {
                obj['clientMiddleName'] = ApiClient.convertToType(data['clientMiddleName'], 'String');
            }
            if (data.hasOwnProperty('clientPersonName')) {
                obj['clientPersonName'] = ApiClient.convertToType(data['clientPersonName'], 'String');
            }
            if (data.hasOwnProperty('clientPriority')) {
                obj['clientPriority'] = ApiClient.convertToType(data['clientPriority'], 'String');
            }
            if (data.hasOwnProperty('clientSalutation')) {
                obj['clientSalutation'] = ApiClient.convertToType(data['clientSalutation'], 'String');
            }
            if (data.hasOwnProperty('clientSuffix')) {
                obj['clientSuffix'] = ApiClient.convertToType(data['clientSuffix'], 'String');
            }
            if (data.hasOwnProperty('personId')) {
                obj['personId'] = ApiClient.convertToType(data['personId'], 'String');
            }
            if (data.hasOwnProperty('universeId')) {
                obj['universeId'] = ApiClient.convertToType(data['universeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Used to describe the company of the person
 * @member {String} clientEntity
 */
PeopleMappingRequest.prototype['clientEntity'] = undefined;

/**
 * Used to describe the first name of the person
 * @member {String} clientFirstName
 */
PeopleMappingRequest.prototype['clientFirstName'] = undefined;

/**
 * A unique identifier supplied by the user. ClientId is saved to the user's Concordance universe and will be used as the identifier for that entity within the universe.
 * @member {String} clientId
 */
PeopleMappingRequest.prototype['clientId'] = undefined;

/**
 * Used to describe the last name of the person.
 * @member {String} clientLastName
 */
PeopleMappingRequest.prototype['clientLastName'] = undefined;

/**
 * Used to describe the middle name of the person.
 * @member {String} clientMiddleName
 */
PeopleMappingRequest.prototype['clientMiddleName'] = undefined;

/**
 * Used to describe the name of the person
 * @member {String} clientPersonName
 */
PeopleMappingRequest.prototype['clientPersonName'] = undefined;

/**
 * Used to indicate the priority of the person
 * @member {String} clientPriority
 */
PeopleMappingRequest.prototype['clientPriority'] = undefined;

/**
 * Used to indicate the salutation of the person
 * @member {String} clientSalutation
 */
PeopleMappingRequest.prototype['clientSalutation'] = undefined;

/**
 * Used to indicate the suffix for the person's name
 * @member {String} clientSuffix
 */
PeopleMappingRequest.prototype['clientSuffix'] = undefined;

/**
 * A unique identifier used to identify a person.
 * @member {String} personId
 */
PeopleMappingRequest.prototype['personId'] = undefined;

/**
 * A unique identifier supplied to a person to save the data into his/her universe.
 * @member {Number} universeId
 */
PeopleMappingRequest.prototype['universeId'] = undefined;






export default PeopleMappingRequest;

