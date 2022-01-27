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
 * The InlineResponse20064DataValueUnit model module.
 * @module model/InlineResponse20064DataValueUnit
 * @version 0.9.0
 */
class InlineResponse20064DataValueUnit {
    /**
     * Constructs a new <code>InlineResponse20064DataValueUnit</code>.
     * The identifier of the unit in which prices of the notation are expressed.
     * @alias module:model/InlineResponse20064DataValueUnit
     */
    constructor() { 
        
        InlineResponse20064DataValueUnit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20064DataValueUnit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20064DataValueUnit} obj Optional instance to populate.
     * @return {module:model/InlineResponse20064DataValueUnit} The populated <code>InlineResponse20064DataValueUnit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20064DataValueUnit();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the value unit.
 * @member {Number} id
 */
InlineResponse20064DataValueUnit.prototype['id'] = undefined;

/**
 * Currency code according to ISO 4217, a code such as GBp (for British pence), USc (for U.S. cents), EUc for (Euro cent), or a code for an alternative unit such as PT (points), % (percent).
 * @member {String} code
 */
InlineResponse20064DataValueUnit.prototype['code'] = undefined;

/**
 * Currency code according to ISO 4217.
 * @member {String} isoCode
 */
InlineResponse20064DataValueUnit.prototype['isoCode'] = undefined;

/**
 * Name of the value unit.
 * @member {String} name
 */
InlineResponse20064DataValueUnit.prototype['name'] = undefined;






export default InlineResponse20064DataValueUnit;
