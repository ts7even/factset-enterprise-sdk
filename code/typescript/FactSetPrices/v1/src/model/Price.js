/**
 * FactSet Prices API
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Price model module.
 * @module model/Price
 * @version 0.9.0
 */
class Price {
    /**
     * Constructs a new <code>Price</code>.
     * @alias module:model/Price
     */
    constructor() { 
        
        Price.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Price} obj Optional instance to populate.
     * @return {module:model/Price} The populated <code>Price</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Price();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('adjDate')) {
                obj['adjDate'] = ApiClient.convertToType(data['adjDate'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('priceOpen')) {
                obj['priceOpen'] = ApiClient.convertToType(data['priceOpen'], 'Number');
            }
            if (data.hasOwnProperty('priceHigh')) {
                obj['priceHigh'] = ApiClient.convertToType(data['priceHigh'], 'Number');
            }
            if (data.hasOwnProperty('priceLow')) {
                obj['priceLow'] = ApiClient.convertToType(data['priceLow'], 'Number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.
 * @member {String} fsymId
 */
Price.prototype['fsymId'] = undefined;

/**
 * Ending date for the period expressed in YYYY-MM-DD format.
 * @member {Date} date
 */
Price.prototype['date'] = undefined;

/**
 * Date of last split for which prices and volume have been adjusted. Use /factset-prices/v#/splits endpoint for details regarding the split.
 * @member {Date} adjDate
 */
Price.prototype['adjDate'] = undefined;

/**
 * Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
 * @member {String} currency
 */
Price.prototype['currency'] = undefined;

/**
 * Closing Price as of the date(s) requested. By default the price is in local trading currency, split adjusted and not spinoff adjusted. Prices updated nightly at approximately at 9pm ET.
 * @member {Number} price
 */
Price.prototype['price'] = undefined;

/**
 * Open price as of the date(s) requested. By default the price is in local trading currency, split adjusted and not spinoff adjusted. Prices updated nightly at approximately at 9pm ET.
 * @member {Number} priceOpen
 */
Price.prototype['priceOpen'] = undefined;

/**
 * High closing price as of the date(s) requested. By default the price is in local trading currency, split adjusted and not spinoff adjusted.  Prices updated nightly at approximately at 9pm ET.
 * @member {Number} priceHigh
 */
Price.prototype['priceHigh'] = undefined;

/**
 * Low closing price as of the date(s) requested. By default the price is in local trading currency, split adjusted and not spinoff adjusted.  Prices updated nightly at approximately at 9pm ET.
 * @member {Number} priceLow
 */
Price.prototype['priceLow'] = undefined;

/**
 * Returns the cumulative volume over dates requested. Data is returned in thousands.
 * @member {Number} volume
 */
Price.prototype['volume'] = undefined;

/**
 * Identifier that was used for the request.
 * @member {String} requestId
 */
Price.prototype['requestId'] = undefined;






export default Price;
