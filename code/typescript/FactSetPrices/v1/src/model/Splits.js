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
 * The Splits model module.
 * @module model/Splits
 * @version 0.9.0
 */
class Splits {
    /**
     * Constructs a new <code>Splits</code>.
     * @alias module:model/Splits
     */
    constructor() { 
        
        Splits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Splits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Splits} obj Optional instance to populate.
     * @return {module:model/Splits} The populated <code>Splits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Splits();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('splitFactor')) {
                obj['splitFactor'] = ApiClient.convertToType(data['splitFactor'], 'Number');
            }
            if (data.hasOwnProperty('splitComment')) {
                obj['splitComment'] = ApiClient.convertToType(data['splitComment'], 'String');
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
Splits.prototype['fsymId'] = undefined;

/**
 * Ex-Date of the split expressed in YYYY-MM-DD format.
 * @member {Date} date
 */
Splits.prototype['date'] = undefined;

/**
 * Split adjustment factor for n splits ago. A 2-for-1 split returns .50, the number you would multiply the stock price by to adjust for the split.
 * @member {Number} splitFactor
 */
Splits.prototype['splitFactor'] = undefined;

/**
 * Description for the type of split or spin off.
 * @member {String} splitComment
 */
Splits.prototype['splitComment'] = undefined;

/**
 * Identifier that was used for the request.
 * @member {String} requestId
 */
Splits.prototype['requestId'] = undefined;






export default Splits;
