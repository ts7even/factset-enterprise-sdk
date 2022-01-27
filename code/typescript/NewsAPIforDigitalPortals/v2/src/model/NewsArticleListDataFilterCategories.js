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
 * The NewsArticleListDataFilterCategories model module.
 * @module model/NewsArticleListDataFilterCategories
 * @version 0.9.0
 */
class NewsArticleListDataFilterCategories {
    /**
     * Constructs a new <code>NewsArticleListDataFilterCategories</code>.
     * Filter for specific categories of the news article. Use a category system of type news with endpoint &#x60;/category/listBySystem&#x60; for valid values.
     * @alias module:model/NewsArticleListDataFilterCategories
     */
    constructor() { 
        
        NewsArticleListDataFilterCategories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewsArticleListDataFilterCategories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsArticleListDataFilterCategories} obj Optional instance to populate.
     * @return {module:model/NewsArticleListDataFilterCategories} The populated <code>NewsArticleListDataFilterCategories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsArticleListDataFilterCategories();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Identifiers of the categories.
 * @member {Array.<Number>} ids
 */
NewsArticleListDataFilterCategories.prototype['ids'] = undefined;






export default NewsArticleListDataFilterCategories;
