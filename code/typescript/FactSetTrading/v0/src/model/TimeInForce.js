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
 * The TimeInForce model module.
 * @module model/TimeInForce
 */
class TimeInForce {
    /**
     * Constructs a new <code>TimeInForce</code>.
     * @alias module:model/TimeInForce
     */
    constructor() { 
        
        TimeInForce.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeInForce</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeInForce} obj Optional instance to populate.
     * @return {module:model/TimeInForce} The populated <code>TimeInForce</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeInForce();

            if (data.hasOwnProperty('tif')) {
                obj['tif'] = ApiClient.convertToType(data['tif'], 'String');
            }
            if (data.hasOwnProperty('expireDate')) {
                obj['expireDate'] = ApiClient.convertToType(data['expireDate'], 'String');
            }
            if (data.hasOwnProperty('expireTime')) {
                obj['expireTime'] = ApiClient.convertToType(data['expireTime'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Time in force: if GTD, then Expire Time or Expire Date is a required field
 * @member {module:model/TimeInForce.TifEnum} tif
 */
TimeInForce.prototype['tif'] = undefined;

/**
 * Expire date in YYYYMMDD format expressed in UTC
 * @member {String} expireDate
 */
TimeInForce.prototype['expireDate'] = undefined;

/**
 * Expire time in YYYYMMDD-HH:MM:SS format expressed in UTC
 * @member {String} expireTime
 */
TimeInForce.prototype['expireTime'] = undefined;





/**
 * Allowed values for the <code>tif</code> property.
 * @enum {String}
 * @readonly
 */
TimeInForce['TifEnum'] = {

    /**
     * value: "DAY"
     * @const
     */
    "DAY": "DAY",

    /**
     * value: "GTC"
     * @const
     */
    "GTC": "GTC",

    /**
     * value: "OPG"
     * @const
     */
    "OPG": "OPG",

    /**
     * value: "IOC"
     * @const
     */
    "IOC": "IOC",

    /**
     * value: "FOK"
     * @const
     */
    "FOK": "FOK",

    /**
     * value: "GTX"
     * @const
     */
    "GTX": "GTX",

    /**
     * value: "GTD"
     * @const
     */
    "GTD": "GTD",

    /**
     * value: "ATC"
     * @const
     */
    "ATC": "ATC"
};



export default TimeInForce;
