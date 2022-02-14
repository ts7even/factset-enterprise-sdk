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
 * The InlineResponse2009Data model module.
 * @module model/InlineResponse2009Data
 * @version 0.9.1
 */
class InlineResponse2009Data {
    /**
     * Constructs a new <code>InlineResponse2009Data</code>.
     * @alias module:model/InlineResponse2009Data
     */
    constructor() { 
        
        InlineResponse2009Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2009Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Data} The populated <code>InlineResponse2009Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009Data();

            if (data.hasOwnProperty('focusCategory')) {
                obj['focusCategory'] = ApiClient.convertToType(data['focusCategory'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ETP class focus category.
 * @member {String} focusCategory
 */
InlineResponse2009Data.prototype['focusCategory'] = undefined;






export default InlineResponse2009Data;

