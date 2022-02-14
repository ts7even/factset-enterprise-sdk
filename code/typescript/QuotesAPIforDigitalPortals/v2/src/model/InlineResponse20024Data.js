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
 * The InlineResponse20024Data model module.
 * @module model/InlineResponse20024Data
 * @version 0.9.1
 */
class InlineResponse20024Data {
    /**
     * Constructs a new <code>InlineResponse20024Data</code>.
     * Details of a value unit.
     * @alias module:model/InlineResponse20024Data
     */
    constructor() { 
        
        InlineResponse20024Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20024Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20024Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20024Data} The populated <code>InlineResponse20024Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20024Data();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Code of the value unit: If assigned, a code according to ISO 4217, otherwise a local code, for a main currency; a code such as GBp (for British pence) for a fractional currency; or a code such as PT (points) for non-currency value units.
 * @member {String} code
 */
InlineResponse20024Data.prototype['code'] = undefined;

/**
 * ISO 4217 code of the value unit. Empty if the ISO 4217 standard does not define a code for the currency.
 * @member {String} isoCode
 */
InlineResponse20024Data.prototype['isoCode'] = undefined;

/**
 * Name of the value unit.
 * @member {String} name
 */
InlineResponse20024Data.prototype['name'] = undefined;

/**
 * Type of the value unit.
 * @member {module:model/InlineResponse20024Data.TypeEnum} type
 */
InlineResponse20024Data.prototype['type'] = undefined;

/**
 * Indicates whether the value unit is active.
 * @member {Boolean} active
 */
InlineResponse20024Data.prototype['active'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20024Data['TypeEnum'] = {

    /**
     * value: "main"
     * @const
     */
    "main": "main",

    /**
     * value: "fractional"
     * @const
     */
    "fractional": "fractional",

    /**
     * value: "alternative"
     * @const
     */
    "alternative": "alternative"
};



export default InlineResponse20024Data;

