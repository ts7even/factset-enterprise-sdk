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
import InlineResponse200DataPrice from './InlineResponse200DataPrice';
import InlineResponse200DataTrigger from './InlineResponse200DataTrigger';

/**
 * The InlineResponse200Data model module.
 * @module model/InlineResponse200Data
 * @version 0.9.1
 */
class InlineResponse200Data {
    /**
     * Constructs a new <code>InlineResponse200Data</code>.
     * Details of the alert.
     * @alias module:model/InlineResponse200Data
     */
    constructor() { 
        
        InlineResponse200Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse200Data} The populated <code>InlineResponse200Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('creation')) {
                obj['creation'] = ApiClient.convertToType(data['creation'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = InlineResponse200DataPrice.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = InlineResponse200DataTrigger.constructFromObject(data['trigger']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the alert.
 * @member {String} id
 */
InlineResponse200Data.prototype['id'] = undefined;

/**
 * Date and time when the alert was created.
 * @member {String} creation
 */
InlineResponse200Data.prototype['creation'] = undefined;

/**
 * @member {module:model/InlineResponse200DataPrice} price
 */
InlineResponse200Data.prototype['price'] = undefined;

/**
 * @member {module:model/InlineResponse200DataTrigger} trigger
 */
InlineResponse200Data.prototype['trigger'] = undefined;






export default InlineResponse200Data;

