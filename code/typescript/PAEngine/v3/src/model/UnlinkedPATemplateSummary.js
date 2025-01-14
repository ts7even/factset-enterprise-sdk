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
 * The UnlinkedPATemplateSummary model module.
 * @module model/UnlinkedPATemplateSummary
 */
class UnlinkedPATemplateSummary {
    /**
     * Constructs a new <code>UnlinkedPATemplateSummary</code>.
     * @alias module:model/UnlinkedPATemplateSummary
     */
    constructor() { 
        
        UnlinkedPATemplateSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UnlinkedPATemplateSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnlinkedPATemplateSummary} obj Optional instance to populate.
     * @return {module:model/UnlinkedPATemplateSummary} The populated <code>UnlinkedPATemplateSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnlinkedPATemplateSummary();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Template description.
 * @member {String} description
 */
UnlinkedPATemplateSummary.prototype['description'] = undefined;

/**
 * Template name.
 * @member {String} name
 */
UnlinkedPATemplateSummary.prototype['name'] = undefined;

/**
 * Unlinked template category
 * @member {String} category
 */
UnlinkedPATemplateSummary.prototype['category'] = undefined;






export default UnlinkedPATemplateSummary;

