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
 * The InlineResponse20062DataGeneralCurrency model module.
 * @module model/InlineResponse20062DataGeneralCurrency
 * @version 0.9.0
 */
class InlineResponse20062DataGeneralCurrency {
    /**
     * Constructs a new <code>InlineResponse20062DataGeneralCurrency</code>.
     * Denomination currency of the investment product. This attribute is also decisive for the main currency many of the cost attributes are originally provided in, assumed the quotation type (see attribute &#x60;quotation&#x60;) has the value 1 (currency amount per unit). See endpoint &#x60;/basic/valueUnit/currency/main/list&#x60; for valid values.
     * @alias module:model/InlineResponse20062DataGeneralCurrency
     */
    constructor() { 
        
        InlineResponse20062DataGeneralCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataGeneralCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataGeneralCurrency} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataGeneralCurrency} The populated <code>InlineResponse20062DataGeneralCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataGeneralCurrency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the currency.
 * @member {Number} id
 */
InlineResponse20062DataGeneralCurrency.prototype['id'] = undefined;

/**
 * ISO 4217 code of the currency.
 * @member {String} isoCode
 */
InlineResponse20062DataGeneralCurrency.prototype['isoCode'] = undefined;






export default InlineResponse20062DataGeneralCurrency;
