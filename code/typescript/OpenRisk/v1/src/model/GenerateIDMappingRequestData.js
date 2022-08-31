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
import Holdings from './Holdings';
import IDsAndMarketValues from './IDsAndMarketValues';
import LaggingDates from './LaggingDates';
import ModelDate from './ModelDate';
import RiskModelAppendData from './RiskModelAppendData';
import SecurityIndexMapping from './SecurityIndexMapping';

/**
 * The GenerateIDMappingRequestData model module.
 * @module model/GenerateIDMappingRequestData
 */
class GenerateIDMappingRequestData {
    /**
     * Constructs a new <code>GenerateIDMappingRequestData</code>.
     * @alias module:model/GenerateIDMappingRequestData
     * @param date {module:model/ModelDate} 
     * @param holdings {module:model/Holdings} 
     * @param riskModel {String} Model code
     */
    constructor(date, holdings, riskModel) { 
        
        GenerateIDMappingRequestData.initialize(this, date, holdings, riskModel);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, date, holdings, riskModel) { 
        obj['date'] = date;
        obj['holdings'] = holdings;
        obj['riskModel'] = riskModel;
    }

    /**
     * Constructs a <code>GenerateIDMappingRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateIDMappingRequestData} obj Optional instance to populate.
     * @return {module:model/GenerateIDMappingRequestData} The populated <code>GenerateIDMappingRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateIDMappingRequestData();

            if (data.hasOwnProperty('allowForcedRisklessAssets')) {
                obj['allowForcedRisklessAssets'] = ApiClient.convertToType(data['allowForcedRisklessAssets'], 'Boolean');
            }
            if (data.hasOwnProperty('assetTypes')) {
                obj['assetTypes'] = ApiClient.convertToType(data['assetTypes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('calendar')) {
                obj['calendar'] = ApiClient.convertToType(data['calendar'], 'String');
            }
            if (data.hasOwnProperty('compositeAssets')) {
                obj['compositeAssets'] = ApiClient.convertToType(data['compositeAssets'], {'String': IDsAndMarketValues});
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ModelDate.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('holdings')) {
                obj['holdings'] = Holdings.constructFromObject(data['holdings']);
            }
            if (data.hasOwnProperty('indexMapping')) {
                obj['indexMapping'] = SecurityIndexMapping.constructFromObject(data['indexMapping']);
            }
            if (data.hasOwnProperty('laggingDates')) {
                obj['laggingDates'] = LaggingDates.constructFromObject(data['laggingDates']);
            }
            if (data.hasOwnProperty('riskModel')) {
                obj['riskModel'] = ApiClient.convertToType(data['riskModel'], 'String');
            }
            if (data.hasOwnProperty('riskModelAppendData')) {
                obj['riskModelAppendData'] = RiskModelAppendData.constructFromObject(data['riskModelAppendData']);
            }
            if (data.hasOwnProperty('underlyingIds')) {
                obj['underlyingIds'] = ApiClient.convertToType(data['underlyingIds'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * Allow certain assets to be entirely riskless; certain models always override this to be true. Examples of asset types to which this applies includes offset cash.
 * @member {Boolean} allowForcedRisklessAssets
 * @default false
 */
GenerateIDMappingRequestData.prototype['allowForcedRisklessAssets'] = false;

/**
 * **(since 1.4.0)** A mapping of security ID to its asset type as the standard asset type keys. When this input is in a request, it is used to (1) identify assets that use Underlying IDs from 'underlyingIds' input, and (2) identify asset types compatible with automatic removal of their contribution of currency to risk unless any form of the 'removeCurrencyRisk' input is also provided. When this input is used in the request, underlying IDs (provided via 'underlyingIds' input) are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.
 * @member {Object.<String, String>} assetTypes
 */
GenerateIDMappingRequestData.prototype['assetTypes'] = undefined;

/**
 * Calendar code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via 'compositeAssets' field. See also [OA:2012](https://my.apps.factset.com/oa/pages/2012#calendar) for global codes, \"FIVEDAY\" or \"SEVENDAY\" calendars and see [OA:16610](https://my.apps.factset.com/oa/pages/16610#country) for country codes (cf. 'Calendar Code' column).
 * @member {String} calendar
 */
GenerateIDMappingRequestData.prototype['calendar'] = undefined;

/**
 * IDs to be defined as composite assets with their constituents' IDs and market values. The typical use case is for risk look-through of ETF or Funds' constituents. When defining composite assets and creating portfolios which hold them, the IDs provided must be an exact match.
 * @member {Object.<String, module:model/IDsAndMarketValues>} compositeAssets
 */
GenerateIDMappingRequestData.prototype['compositeAssets'] = undefined;

/**
 * ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via 'compositeAssets' field.
 * @member {String} currency
 */
GenerateIDMappingRequestData.prototype['currency'] = undefined;

/**
 * @member {module:model/ModelDate} date
 */
GenerateIDMappingRequestData.prototype['date'] = undefined;

/**
 * @member {module:model/Holdings} holdings
 */
GenerateIDMappingRequestData.prototype['holdings'] = undefined;

/**
 * @member {module:model/SecurityIndexMapping} indexMapping
 */
GenerateIDMappingRequestData.prototype['indexMapping'] = undefined;

/**
 * @member {module:model/LaggingDates} laggingDates
 */
GenerateIDMappingRequestData.prototype['laggingDates'] = undefined;

/**
 * Model code
 * @member {String} riskModel
 */
GenerateIDMappingRequestData.prototype['riskModel'] = undefined;

/**
 * @member {module:model/RiskModelAppendData} riskModelAppendData
 */
GenerateIDMappingRequestData.prototype['riskModelAppendData'] = undefined;

/**
 * A map of security IDs to their underlying IDs. When 'assetTypes' input is in a request, underlying IDs provided via this input are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.
 * @member {Object.<String, String>} underlyingIds
 */
GenerateIDMappingRequestData.prototype['underlyingIds'] = undefined;






export default GenerateIDMappingRequestData;

