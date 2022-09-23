/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2002DataFactors from './InlineResponse2002DataFactors';
import InlineResponse2002DataRiskModelAppendFormat from './InlineResponse2002DataRiskModelAppendFormat';

/**
 * The InlineResponse2002Data model module.
 * @module model/InlineResponse2002Data
 */
class InlineResponse2002Data {
    /**
     * Constructs a new <code>InlineResponse2002Data</code>.
     * @alias module:model/InlineResponse2002Data
     * @param code {String} Model code
     * @param currencies {Array.<String>} Currencies that can be used with the model
     * @param currency {String} ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via 'compositeAssets' field.
     * @param factors {Array.<module:model/InlineResponse2002DataFactors>} Factors of the model
     * @param factorIdToIsoCurrency {Object.<String, String>} Map of currency factor IDs to ISO currency code.
     * @param firstDate {Date} **(since 1.12.0)**  Date format YYYY-MM-DD.
     * @param frequency {String} Frequency of the model
     * @param latestDate {Date} **(since 1.12.0)**  Date format YYYY-MM-DD.
     * @param name {String} Model name
     * @param universeCount {Number} Total universe count of the model
     * @param vendor {String} Model vendor
     */
    constructor(code, currencies, currency, factors, factorIdToIsoCurrency, firstDate, frequency, latestDate, name, universeCount, vendor) { 
        
        InlineResponse2002Data.initialize(this, code, currencies, currency, factors, factorIdToIsoCurrency, firstDate, frequency, latestDate, name, universeCount, vendor);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, currencies, currency, factors, factorIdToIsoCurrency, firstDate, frequency, latestDate, name, universeCount, vendor) { 
        obj['code'] = code;
        obj['currencies'] = currencies;
        obj['currency'] = currency;
        obj['factors'] = factors;
        obj['factorIdToIsoCurrency'] = factorIdToIsoCurrency;
        obj['firstDate'] = firstDate;
        obj['frequency'] = frequency;
        obj['latestDate'] = latestDate;
        obj['name'] = name;
        obj['universeCount'] = universeCount;
        obj['vendor'] = vendor;
    }

    /**
     * Constructs a <code>InlineResponse2002Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002Data} The populated <code>InlineResponse2002Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002Data();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], ['String']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('factors')) {
                obj['factors'] = ApiClient.convertToType(data['factors'], [InlineResponse2002DataFactors]);
            }
            if (data.hasOwnProperty('factorIdToIsoCurrency')) {
                obj['factorIdToIsoCurrency'] = ApiClient.convertToType(data['factorIdToIsoCurrency'], {'String': 'String'});
            }
            if (data.hasOwnProperty('firstDate')) {
                obj['firstDate'] = ApiClient.convertToType(data['firstDate'], 'Date');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
            }
            if (data.hasOwnProperty('latestDate')) {
                obj['latestDate'] = ApiClient.convertToType(data['latestDate'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('riskModelAppendFormat')) {
                obj['riskModelAppendFormat'] = ApiClient.convertToType(data['riskModelAppendFormat'], [InlineResponse2002DataRiskModelAppendFormat]);
            }
            if (data.hasOwnProperty('universeCount')) {
                obj['universeCount'] = ApiClient.convertToType(data['universeCount'], 'Number');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Model code
 * @member {String} code
 */
InlineResponse2002Data.prototype['code'] = undefined;

/**
 * Currencies that can be used with the model
 * @member {Array.<String>} currencies
 */
InlineResponse2002Data.prototype['currencies'] = undefined;

/**
 * ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via 'compositeAssets' field.
 * @member {String} currency
 */
InlineResponse2002Data.prototype['currency'] = undefined;

/**
 * Factors of the model
 * @member {Array.<module:model/InlineResponse2002DataFactors>} factors
 */
InlineResponse2002Data.prototype['factors'] = undefined;

/**
 * Map of currency factor IDs to ISO currency code.
 * @member {Object.<String, String>} factorIdToIsoCurrency
 */
InlineResponse2002Data.prototype['factorIdToIsoCurrency'] = undefined;

/**
 * **(since 1.12.0)**  Date format YYYY-MM-DD.
 * @member {Date} firstDate
 */
InlineResponse2002Data.prototype['firstDate'] = undefined;

/**
 * Frequency of the model
 * @member {String} frequency
 */
InlineResponse2002Data.prototype['frequency'] = undefined;

/**
 * **(since 1.12.0)**  Date format YYYY-MM-DD.
 * @member {Date} latestDate
 */
InlineResponse2002Data.prototype['latestDate'] = undefined;

/**
 * Model name
 * @member {String} name
 */
InlineResponse2002Data.prototype['name'] = undefined;

/**
 * List of fields which are supported by the risk model for appending additional asset data
 * @member {Array.<module:model/InlineResponse2002DataRiskModelAppendFormat>} riskModelAppendFormat
 */
InlineResponse2002Data.prototype['riskModelAppendFormat'] = undefined;

/**
 * Total universe count of the model
 * @member {Number} universeCount
 */
InlineResponse2002Data.prototype['universeCount'] = undefined;

/**
 * Model vendor
 * @member {String} vendor
 */
InlineResponse2002Data.prototype['vendor'] = undefined;






export default InlineResponse2002Data;
