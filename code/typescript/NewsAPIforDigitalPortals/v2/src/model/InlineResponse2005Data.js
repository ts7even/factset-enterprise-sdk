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
import InlineResponse2005DataDelivery from './InlineResponse2005DataDelivery';

/**
 * The InlineResponse2005Data model module.
 * @module model/InlineResponse2005Data
 * @version 0.9.1
 */
class InlineResponse2005Data {
    /**
     * Constructs a new <code>InlineResponse2005Data</code>.
     * Details of the distributor.
     * @alias module:model/InlineResponse2005Data
     */
    constructor() { 
        
        InlineResponse2005Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005Data} The populated <code>InlineResponse2005Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005Data();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('delivery')) {
                obj['delivery'] = InlineResponse2005DataDelivery.constructFromObject(data['delivery']);
            }
        }
        return obj;
    }


}

/**
 * Name of the distributor.
 * @member {String} name
 */
InlineResponse2005Data.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataDelivery} delivery
 */
InlineResponse2005Data.prototype['delivery'] = undefined;






export default InlineResponse2005Data;

