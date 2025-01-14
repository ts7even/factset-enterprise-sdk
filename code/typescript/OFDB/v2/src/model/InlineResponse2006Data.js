/**
 * OFDB API
 * OFDB API
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2006Data model module.
 * @module model/InlineResponse2006Data
 */
class InlineResponse2006Data {
    /**
     * Constructs a new <code>InlineResponse2006Data</code>.
     * @alias module:model/InlineResponse2006Data
     */
    constructor() { 
        
        InlineResponse2006Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006Data} The populated <code>InlineResponse2006Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006Data();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('field_1')) {
                obj['field_1'] = ApiClient.convertToType(data['field_1'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} symbol
 */
InlineResponse2006Data.prototype['symbol'] = undefined;

/**
 * @member {Number} field_1
 */
InlineResponse2006Data.prototype['field_1'] = undefined;






export default InlineResponse2006Data;

