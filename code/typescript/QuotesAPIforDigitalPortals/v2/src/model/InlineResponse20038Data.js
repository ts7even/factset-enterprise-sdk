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
import InlineResponse20038DataCategories from './InlineResponse20038DataCategories';

/**
 * The InlineResponse20038Data model module.
 * @module model/InlineResponse20038Data
 * @version 0.9.1
 */
class InlineResponse20038Data {
    /**
     * Constructs a new <code>InlineResponse20038Data</code>.
     * Path to the category.
     * @alias module:model/InlineResponse20038Data
     */
    constructor() { 
        
        InlineResponse20038Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20038Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20038Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20038Data} The populated <code>InlineResponse20038Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20038Data();

            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [InlineResponse20038DataCategories]);
            }
        }
        return obj;
    }


}

/**
 * List of categories covering the full path (without gaps) from the most coarse granularity to the level of the specified category.
 * @member {Array.<module:model/InlineResponse20038DataCategories>} categories
 */
InlineResponse20038Data.prototype['categories'] = undefined;






export default InlineResponse20038Data;

