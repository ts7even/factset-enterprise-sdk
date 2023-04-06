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
 * The PeopleMatchRequestInput model module.
 * @module model/PeopleMatchRequestInput
 */
class PeopleMatchRequestInput {
    /**
     * Constructs a new <code>PeopleMatchRequestInput</code>.
     * @alias module:model/PeopleMatchRequestInput
     */
    constructor() { 
        
        PeopleMatchRequestInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PeopleMatchRequestInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeopleMatchRequestInput} obj Optional instance to populate.
     * @return {module:model/PeopleMatchRequestInput} The populated <code>PeopleMatchRequestInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeopleMatchRequestInput();

            if (data.hasOwnProperty('personName')) {
                obj['personName'] = ApiClient.convertToType(data['personName'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('salutation')) {
                obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('suffix')) {
                obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The People name to match.
 * @member {String} personName
 */
PeopleMatchRequestInput.prototype['personName'] = undefined;

/**
 * A unique identifier supplied by the user. ClientId is saved to the user's Concordance universe and will be used as the identifier for that entity within the universe. 
 * @member {String} clientId
 */
PeopleMatchRequestInput.prototype['clientId'] = undefined;

/**
 * The salutation is same as the normal salutation we use .The salutation can be Mr, Mrs.The salutation should not be given along with personName. 
 * @member {String} salutation
 */
PeopleMatchRequestInput.prototype['salutation'] = undefined;

/**
 * The first name of the person. This field should not be given along with personName. 
 * @member {String} firstName
 */
PeopleMatchRequestInput.prototype['firstName'] = undefined;

/**
 * The middle name of the person. This field should not be given along with personName. 
 * @member {String} middleName
 */
PeopleMatchRequestInput.prototype['middleName'] = undefined;

/**
 * The last name of the person. This field should not be given along with personName. 
 * @member {String} lastName
 */
PeopleMatchRequestInput.prototype['lastName'] = undefined;

/**
 * The suffix of person's name. This field should not be given along with personName. 
 * @member {String} suffix
 */
PeopleMatchRequestInput.prototype['suffix'] = undefined;

/**
 * The enity of the Person. 
 * @member {String} entity
 */
PeopleMatchRequestInput.prototype['entity'] = undefined;






export default PeopleMatchRequestInput;

