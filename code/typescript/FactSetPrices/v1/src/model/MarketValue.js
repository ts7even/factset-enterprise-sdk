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
 * The MarketValue model module.
 * @module model/MarketValue
 * @version 0.9.0
 */
class MarketValue {
    /**
     * Constructs a new <code>MarketValue</code>.
     * @alias module:model/MarketValue
     */
    constructor() { 
        
        MarketValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MarketValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketValue} obj Optional instance to populate.
     * @return {module:model/MarketValue} The populated <code>MarketValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketValue();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('entityMarketValue')) {
                obj['entityMarketValue'] = ApiClient.convertToType(data['entityMarketValue'], 'Number');
            }
            if (data.hasOwnProperty('entityMarketValueExNonTraded')) {
                obj['entityMarketValueExNonTraded'] = ApiClient.convertToType(data['entityMarketValueExNonTraded'], 'Number');
            }
            if (data.hasOwnProperty('securityMarketValue')) {
                obj['securityMarketValue'] = ApiClient.convertToType(data['securityMarketValue'], 'Number');
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
MarketValue.prototype['fsymId'] = undefined;

/**
 * Ending date for the period expressed in YYYY-MM-DD format.
 * @member {Date} date
 */
MarketValue.prototype['date'] = undefined;

/**
 * Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
 * @member {String} currency
 */
MarketValue.prototype['currency'] = undefined;

/**
 * Aggregate market value across all share classes and includes non-traded shares which are added to the calculation basis by the proportion of their nominal or par value. Values are in base units. To value non-traded shares, the price of the parent equity provides the most appropriate approximation of what the non-traded shares would be worth in the open market. For unique companies with an ADR as the parent equity, since it is the only traded security associated with that company, when calculating company-level market value, the price of the ADR is used, but is scaled by the ADR ratio since there's not always a one-to-one relationship between ADR shares and the non-traded shares which they represent. For more details visit [Online Assistant Page #16867](https://my.apps.factset.com/oa/pages/16867). 
 * @member {Number} entityMarketValue
 */
MarketValue.prototype['entityMarketValue'] = undefined;

/**
 * Aggregate across all share classes and excludes non-traded shares. Values are in base units. For more details visit [Online Assistant Page #16867](https://my.apps.factset.com/oa/pages/16867).
 * @member {Number} entityMarketValueExNonTraded
 */
MarketValue.prototype['entityMarketValueExNonTraded'] = undefined;

/**
 * Returns the security level market value calculated as the share price multiplied by the number of shares at the security level. **Note:** History is available back to Oct-1999 for North American securities, and 1-Jan-2001 for non-North American securities.
 * @member {Number} securityMarketValue
 */
MarketValue.prototype['securityMarketValue'] = undefined;

/**
 * Identifier that was used for the request.
 * @member {String} requestId
 */
MarketValue.prototype['requestId'] = undefined;






export default MarketValue;
