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
import NewsArticleListDataFilter from './NewsArticleListDataFilter';

/**
 * The NewsArticleListByMediaKindData model module.
 * @module model/NewsArticleListByMediaKindData
 * @version 0.9.0
 */
class NewsArticleListByMediaKindData {
    /**
     * Constructs a new <code>NewsArticleListByMediaKindData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/NewsArticleListByMediaKindData
     * @param ids {Array.<Number>} List of media kind identifiers. See endpoint `/basic/media/kind/list` for valid values.
     */
    constructor(ids) { 
        
        NewsArticleListByMediaKindData.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>NewsArticleListByMediaKindData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsArticleListByMediaKindData} obj Optional instance to populate.
     * @return {module:model/NewsArticleListByMediaKindData} The populated <code>NewsArticleListByMediaKindData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsArticleListByMediaKindData();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = NewsArticleListDataFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * List of media kind identifiers. See endpoint `/basic/media/kind/list` for valid values.
 * @member {Array.<Number>} ids
 */
NewsArticleListByMediaKindData.prototype['ids'] = undefined;

/**
 * @member {module:model/NewsArticleListDataFilter} filter
 */
NewsArticleListByMediaKindData.prototype['filter'] = undefined;






export default NewsArticleListByMediaKindData;
