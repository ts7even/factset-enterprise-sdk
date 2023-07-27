/**
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Instrument model module.
 * @module model/Instrument
 */
class Instrument {
    /**
     * Constructs a new <code>Instrument</code>.
     * @alias module:model/Instrument
     * @param symbol {String} Symbol
     */
    constructor(symbol) { 
        
        Instrument.initialize(this, symbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol) { 
        obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>Instrument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Instrument} obj Optional instance to populate.
     * @return {module:model/Instrument} The populated <code>Instrument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Instrument();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('securityType')) {
                obj['securityType'] = ApiClient.convertToType(data['securityType'], 'String');
            }
            if (data.hasOwnProperty('cfiCode')) {
                obj['cfiCode'] = ApiClient.convertToType(data['cfiCode'], 'String');
            }
            if (data.hasOwnProperty('securityExchange')) {
                obj['securityExchange'] = ApiClient.convertToType(data['securityExchange'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('securityDescription')) {
                obj['securityDescription'] = ApiClient.convertToType(data['securityDescription'], 'String');
            }
            if (data.hasOwnProperty('maturityMonthYear')) {
                obj['maturityMonthYear'] = ApiClient.convertToType(data['maturityMonthYear'], 'String');
            }
            if (data.hasOwnProperty('maturityDay')) {
                obj['maturityDay'] = ApiClient.convertToType(data['maturityDay'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
Instrument.prototype['symbol'] = undefined;

/**
 * Security Type
 * @member {String} securityType
 */
Instrument.prototype['securityType'] = undefined;

/**
 * Cfi Code
 * @member {String} cfiCode
 */
Instrument.prototype['cfiCode'] = undefined;

/**
 * Security exchange
 * @member {String} securityExchange
 */
Instrument.prototype['securityExchange'] = undefined;

/**
 * Issuer
 * @member {String} issuer
 */
Instrument.prototype['issuer'] = undefined;

/**
 * Security Description
 * @member {String} securityDescription
 */
Instrument.prototype['securityDescription'] = undefined;

/**
 * Maturity month year
 * @member {String} maturityMonthYear
 */
Instrument.prototype['maturityMonthYear'] = undefined;

/**
 * Maturity day
 * @member {String} maturityDay
 */
Instrument.prototype['maturityDay'] = undefined;






export default Instrument;

