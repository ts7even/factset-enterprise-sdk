/**
 * FactSet People API
 * The FactSet People API exposes FactSet data for individuals and their jobs. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CompanyPositions model module.
 * @module model/CompanyPositions
 * @version 0.9.0
 */
class CompanyPositions {
    /**
     * Constructs a new <code>CompanyPositions</code>.
     * List of executives for the specified company identifier.
     * @alias module:model/CompanyPositions
     */
    constructor() { 
        
        CompanyPositions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyPositions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyPositions} obj Optional instance to populate.
     * @return {module:model/CompanyPositions} The populated <code>CompanyPositions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyPositions();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('personId')) {
                obj['personId'] = ApiClient.convertToType(data['personId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('yearsAtFirm')) {
                obj['yearsAtFirm'] = ApiClient.convertToType(data['yearsAtFirm'], 'Number');
            }
            if (data.hasOwnProperty('age')) {
                obj['age'] = ApiClient.convertToType(data['age'], 'Number');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('requestPosition')) {
                obj['requestPosition'] = ApiClient.convertToType(data['requestPosition'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Identifier for the company.
 * @member {String} fsymId
 */
CompanyPositions.prototype['fsymId'] = undefined;

/**
 * Factset Entity Identifier for the Person
 * @member {String} personId
 */
CompanyPositions.prototype['personId'] = undefined;

/**
 * FactSet Name of the person
 * @member {String} name
 */
CompanyPositions.prototype['name'] = undefined;

/**
 * The requested Position Title
 * @member {String} title
 */
CompanyPositions.prototype['title'] = undefined;

/**
 * The number of years individual is at firm. For founders, this is since inception.
 * @member {Number} yearsAtFirm
 */
CompanyPositions.prototype['yearsAtFirm'] = undefined;

/**
 * The age of the person requested.
 * @member {Number} age
 */
CompanyPositions.prototype['age'] = undefined;

/**
 * The Gender of the person requested.
 * @member {String} gender
 */
CompanyPositions.prototype['gender'] = undefined;

/**
 * The requested position code.
 * @member {String} requestPosition
 */
CompanyPositions.prototype['requestPosition'] = undefined;

/**
 * Original identifier used for the request.
 * @member {String} requestId
 */
CompanyPositions.prototype['requestId'] = undefined;






export default CompanyPositions;
