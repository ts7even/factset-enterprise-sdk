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
import StockNotationRankingIntradayListMetaPagination from './StockNotationRankingIntradayListMetaPagination';

/**
 * The StockNotationRankingIntradayListMeta model module.
 * @module model/StockNotationRankingIntradayListMeta
 * @version 0.9.1
 */
class StockNotationRankingIntradayListMeta {
    /**
     * Constructs a new <code>StockNotationRankingIntradayListMeta</code>.
     * The meta member contains the meta information of the request.
     * @alias module:model/StockNotationRankingIntradayListMeta
     */
    constructor() { 
        
        StockNotationRankingIntradayListMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationRankingIntradayListMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationRankingIntradayListMeta} obj Optional instance to populate.
     * @return {module:model/StockNotationRankingIntradayListMeta} The populated <code>StockNotationRankingIntradayListMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationRankingIntradayListMeta();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = StockNotationRankingIntradayListMetaPagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * Limit the attributes returned in the response to the specified set.
 * @member {Array.<String>} attributes
 */
StockNotationRankingIntradayListMeta.prototype['attributes'] = undefined;

/**
 * ISO 639-1 code of the language.
 * @member {String} language
 */
StockNotationRankingIntradayListMeta.prototype['language'] = undefined;

/**
 * Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 5 (possibly prefixed) attribute name(s) is allowed.
 * @member {Array.<module:model/StockNotationRankingIntradayListMeta.SortEnum>} sort
 */
StockNotationRankingIntradayListMeta.prototype['sort'] = undefined;

/**
 * @member {module:model/StockNotationRankingIntradayListMetaPagination} pagination
 */
StockNotationRankingIntradayListMeta.prototype['pagination'] = undefined;





/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
StockNotationRankingIntradayListMeta['SortEnum'] = {

    /**
     * value: "trade.performance.absolute"
     * @const
     */
    "trade.performance.absolute": "trade.performance.absolute",

    /**
     * value: "-trade.performance.absolute"
     * @const
     */
    "-trade.performance.absolute": "-trade.performance.absolute",

    /**
     * value: "trade.performance.relative"
     * @const
     */
    "trade.performance.relative": "trade.performance.relative",

    /**
     * value: "-trade.performance.relative"
     * @const
     */
    "-trade.performance.relative": "-trade.performance.relative",

    /**
     * value: "accumulated.numberTrades"
     * @const
     */
    "accumulated.numberTrades": "accumulated.numberTrades",

    /**
     * value: "-accumulated.numberTrades"
     * @const
     */
    "-accumulated.numberTrades": "-accumulated.numberTrades",

    /**
     * value: "accumulated.tradingVolume"
     * @const
     */
    "accumulated.tradingVolume": "accumulated.tradingVolume",

    /**
     * value: "-accumulated.tradingVolume"
     * @const
     */
    "-accumulated.tradingVolume": "-accumulated.tradingVolume",

    /**
     * value: "accumulated.tradingValue"
     * @const
     */
    "accumulated.tradingValue": "accumulated.tradingValue",

    /**
     * value: "-accumulated.tradingValue"
     * @const
     */
    "-accumulated.tradingValue": "-accumulated.tradingValue"
};



export default StockNotationRankingIntradayListMeta;

