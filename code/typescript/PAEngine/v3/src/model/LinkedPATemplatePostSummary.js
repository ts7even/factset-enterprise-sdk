/**
 * PA Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LinkedPATemplatePostSummary model module.
 * @module model/LinkedPATemplatePostSummary
 * @version 0.9.0
 */
class LinkedPATemplatePostSummary {
    /**
     * Constructs a new <code>LinkedPATemplatePostSummary</code>.
     * @alias module:model/LinkedPATemplatePostSummary
     */
    constructor() { 
        
        LinkedPATemplatePostSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedPATemplatePostSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedPATemplatePostSummary} obj Optional instance to populate.
     * @return {module:model/LinkedPATemplatePostSummary} The populated <code>LinkedPATemplatePostSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedPATemplatePostSummary();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parentComponentId')) {
                obj['parentComponentId'] = ApiClient.convertToType(data['parentComponentId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Template id.
 * @member {String} id
 */
LinkedPATemplatePostSummary.prototype['id'] = undefined;

/**
 * Template description.
 * @member {String} description
 */
LinkedPATemplatePostSummary.prototype['description'] = undefined;

/**
 * Template name.
 * @member {String} name
 */
LinkedPATemplatePostSummary.prototype['name'] = undefined;

/**
 * Template parent tile.
 * @member {String} parentComponentId
 */
LinkedPATemplatePostSummary.prototype['parentComponentId'] = undefined;






export default LinkedPATemplatePostSummary;
