/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse20047Dataset model module.
 * @module model/InlineResponse20047Dataset
 * @version 0.9.0
 */
class InlineResponse20047Dataset {
    /**
     * Constructs a new <code>InlineResponse20047Dataset</code>.
     * Category dataset of the assigned categories. For a list of possible values see endpoint &#x60;/category/dataset/list&#x60;.
     * @alias module:model/InlineResponse20047Dataset
     */
    constructor() { 
        
        InlineResponse20047Dataset.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20047Dataset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20047Dataset} obj Optional instance to populate.
     * @return {module:model/InlineResponse20047Dataset} The populated <code>InlineResponse20047Dataset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20047Dataset();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the category dataset.
 * @member {Number} id
 */
InlineResponse20047Dataset.prototype['id'] = undefined;

/**
 * Name of the category dateset in English.
 * @member {String} name
 */
InlineResponse20047Dataset.prototype['name'] = undefined;






export default InlineResponse20047Dataset;
