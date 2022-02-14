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
 * The InlineResponse2006InstrumentNominalCurrency model module.
 * @module model/InlineResponse2006InstrumentNominalCurrency
 * @version 0.9.1
 */
class InlineResponse2006InstrumentNominalCurrency {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentNominalCurrency</code>.
     * Main currency of the nominal and of the coupon payments.
     * @alias module:model/InlineResponse2006InstrumentNominalCurrency
     */
    constructor() { 
        
        InlineResponse2006InstrumentNominalCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentNominalCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentNominalCurrency} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentNominalCurrency} The populated <code>InlineResponse2006InstrumentNominalCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentNominalCurrency();

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
 * Identifier of the currency. See endpoint `/basic/valueUnit/currency/main/list` for possible values.
 * @member {Number} id
 */
InlineResponse2006InstrumentNominalCurrency.prototype['id'] = undefined;

/**
 * ISO 4217 code of the currency.
 * @member {String} isoCode
 */
InlineResponse2006InstrumentNominalCurrency.prototype['isoCode'] = undefined;






export default InlineResponse2006InstrumentNominalCurrency;

