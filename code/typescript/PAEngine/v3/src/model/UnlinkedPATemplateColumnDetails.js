/**
 * PA Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.14.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UnlinkedPATemplateColumnDetails model module.
 * @module model/UnlinkedPATemplateColumnDetails
 */
class UnlinkedPATemplateColumnDetails {
    /**
     * Constructs a new <code>UnlinkedPATemplateColumnDetails</code>.
     * @alias module:model/UnlinkedPATemplateColumnDetails
     */
    constructor() { 
        
        UnlinkedPATemplateColumnDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnlinkedPATemplateColumnDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnlinkedPATemplateColumnDetails} obj Optional instance to populate.
     * @return {module:model/UnlinkedPATemplateColumnDetails} The populated <code>UnlinkedPATemplateColumnDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnlinkedPATemplateColumnDetails();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = ApiClient.convertToType(data['statistics'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Unlinked template column name
 * @member {String} name
 */
UnlinkedPATemplateColumnDetails.prototype['name'] = undefined;

/**
 * FactSet-defined or User-defined Column identifier.
 * @member {String} id
 */
UnlinkedPATemplateColumnDetails.prototype['id'] = undefined;

/**
 * Column Statistic identifier
 * @member {Array.<String>} statistics
 */
UnlinkedPATemplateColumnDetails.prototype['statistics'] = undefined;






export default UnlinkedPATemplateColumnDetails;

