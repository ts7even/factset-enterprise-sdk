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
import InlineResponse200DataDebtRanking from './InlineResponse200DataDebtRanking';
import InlineResponse200DataGermany from './InlineResponse200DataGermany';
import InlineResponse200DataIssue from './InlineResponse200DataIssue';
import InlineResponse200DataIssuer from './InlineResponse200DataIssuer';
import InlineResponse200DataLifeCycle from './InlineResponse200DataLifeCycle';
import InlineResponse200DataNsin from './InlineResponse200DataNsin';
import InlineResponse200DataRedemption from './InlineResponse200DataRedemption';
import InlineResponse200DataTradingVolume from './InlineResponse200DataTradingVolume';
import InlineResponse200DataType from './InlineResponse200DataType';

/**
 * The InlineResponse200Data model module.
 * @module model/InlineResponse200Data
 * @version 0.9.0
 */
class InlineResponse200Data {
    /**
     * Constructs a new <code>InlineResponse200Data</code>.
     * Fundamental data for a debt instrument.
     * @alias module:model/InlineResponse200Data
     */
    constructor() { 
        
        InlineResponse200Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse200Data} The populated <code>InlineResponse200Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200Data();

            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('nsin')) {
                obj['nsin'] = InlineResponse200DataNsin.constructFromObject(data['nsin']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], [InlineResponse200DataType]);
            }
            if (data.hasOwnProperty('lifeCycle')) {
                obj['lifeCycle'] = InlineResponse200DataLifeCycle.constructFromObject(data['lifeCycle']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = InlineResponse200DataIssuer.constructFromObject(data['issuer']);
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = InlineResponse200DataIssue.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = InlineResponse200DataTradingVolume.constructFromObject(data['tradingVolume']);
            }
            if (data.hasOwnProperty('redemption')) {
                obj['redemption'] = InlineResponse200DataRedemption.constructFromObject(data['redemption']);
            }
            if (data.hasOwnProperty('nominalValue')) {
                obj['nominalValue'] = ApiClient.convertToType(data['nominalValue'], 'Number');
            }
            if (data.hasOwnProperty('debtRanking')) {
                obj['debtRanking'] = InlineResponse200DataDebtRanking.constructFromObject(data['debtRanking']);
            }
            if (data.hasOwnProperty('germany')) {
                obj['germany'] = InlineResponse200DataGermany.constructFromObject(data['germany']);
            }
        }
        return obj;
    }


}

/**
 * The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument.
 * @member {String} isin
 */
InlineResponse200Data.prototype['isin'] = undefined;

/**
 * @member {module:model/InlineResponse200DataNsin} nsin
 */
InlineResponse200Data.prototype['nsin'] = undefined;

/**
 * Name of the instrument.
 * @member {String} name
 */
InlineResponse200Data.prototype['name'] = undefined;

/**
 * Short name of the instrument.
 * @member {String} shortName
 */
InlineResponse200Data.prototype['shortName'] = undefined;

/**
 * Instrument type as defined by FactSet Digital Solutions. Instrument types are arranged in a hierarchy, with the first level representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18). See endpoint `/category/get` for possible values.
 * @member {Array.<module:model/InlineResponse200DataType>} type
 */
InlineResponse200Data.prototype['type'] = undefined;

/**
 * @member {module:model/InlineResponse200DataLifeCycle} lifeCycle
 */
InlineResponse200Data.prototype['lifeCycle'] = undefined;

/**
 * @member {module:model/InlineResponse200DataIssuer} issuer
 */
InlineResponse200Data.prototype['issuer'] = undefined;

/**
 * @member {module:model/InlineResponse200DataIssue} issue
 */
InlineResponse200Data.prototype['issue'] = undefined;

/**
 * @member {module:model/InlineResponse200DataTradingVolume} tradingVolume
 */
InlineResponse200Data.prototype['tradingVolume'] = undefined;

/**
 * @member {module:model/InlineResponse200DataRedemption} redemption
 */
InlineResponse200Data.prototype['redemption'] = undefined;

/**
 * Nominal value for per-unit quoted debt instruments. Debt instruments quoted in percent do not have a nominal value per se.
 * @member {Number} nominalValue
 */
InlineResponse200Data.prototype['nominalValue'] = undefined;

/**
 * @member {module:model/InlineResponse200DataDebtRanking} debtRanking
 */
InlineResponse200Data.prototype['debtRanking'] = undefined;

/**
 * @member {module:model/InlineResponse200DataGermany} germany
 */
InlineResponse200Data.prototype['germany'] = undefined;






export default InlineResponse200Data;
