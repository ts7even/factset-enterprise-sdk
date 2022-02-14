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
import InlineResponse20016DataNav from './InlineResponse20016DataNav';
import InlineResponse20016DataSharesOutstanding from './InlineResponse20016DataSharesOutstanding';

/**
 * The InlineResponse20016Data model module.
 * @module model/InlineResponse20016Data
 * @version 0.9.1
 */
class InlineResponse20016Data {
    /**
     * Constructs a new <code>InlineResponse20016Data</code>.
     * Price.
     * @alias module:model/InlineResponse20016Data
     */
    constructor() { 
        
        InlineResponse20016Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20016Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016Data} The populated <code>InlineResponse20016Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20016Data();

            if (data.hasOwnProperty('nav')) {
                obj['nav'] = InlineResponse20016DataNav.constructFromObject(data['nav']);
            }
            if (data.hasOwnProperty('sharesOutstanding')) {
                obj['sharesOutstanding'] = InlineResponse20016DataSharesOutstanding.constructFromObject(data['sharesOutstanding']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20016DataNav} nav
 */
InlineResponse20016Data.prototype['nav'] = undefined;

/**
 * @member {module:model/InlineResponse20016DataSharesOutstanding} sharesOutstanding
 */
InlineResponse20016Data.prototype['sharesOutstanding'] = undefined;






export default InlineResponse20016Data;

