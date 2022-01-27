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
 * The InlineResponse2007DataCashFlowCurrency model module.
 * @module model/InlineResponse2007DataCashFlowCurrency
 * @version 0.9.0
 */
class InlineResponse2007DataCashFlowCurrency {
    /**
     * Constructs a new <code>InlineResponse2007DataCashFlowCurrency</code>.
     * Main currency in which the monetary amount of the cash flow is paid out. See endpoint &#x60;/basic/valueUnit/currency/main/list&#x60; for possible values.
     * @alias module:model/InlineResponse2007DataCashFlowCurrency
     */
    constructor() { 
        
        InlineResponse2007DataCashFlowCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007DataCashFlowCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007DataCashFlowCurrency} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007DataCashFlowCurrency} The populated <code>InlineResponse2007DataCashFlowCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007DataCashFlowCurrency();

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
 * Idenitifier of the currency.
 * @member {Number} id
 */
InlineResponse2007DataCashFlowCurrency.prototype['id'] = undefined;

/**
 * Currency code according to ISO 4217.
 * @member {String} isoCode
 */
InlineResponse2007DataCashFlowCurrency.prototype['isoCode'] = undefined;






export default InlineResponse2007DataCashFlowCurrency;
