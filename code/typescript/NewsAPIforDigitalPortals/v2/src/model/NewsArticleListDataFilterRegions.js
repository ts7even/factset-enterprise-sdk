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

/**
 * The NewsArticleListDataFilterRegions model module.
 * @module model/NewsArticleListDataFilterRegions
 * @version 0.9.0
 */
class NewsArticleListDataFilterRegions {
    /**
     * Constructs a new <code>NewsArticleListDataFilterRegions</code>.
     * Filter for specific regions of the content of the news article. See endpoint &#x60;/basic/region/list&#x60; for valid values.
     * @alias module:model/NewsArticleListDataFilterRegions
     */
    constructor() { 
        
        NewsArticleListDataFilterRegions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewsArticleListDataFilterRegions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsArticleListDataFilterRegions} obj Optional instance to populate.
     * @return {module:model/NewsArticleListDataFilterRegions} The populated <code>NewsArticleListDataFilterRegions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsArticleListDataFilterRegions();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Identifiers of the regions.
 * @member {Array.<Number>} ids
 */
NewsArticleListDataFilterRegions.prototype['ids'] = undefined;






export default NewsArticleListDataFilterRegions;
