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
 * The NewsArticleSearchByTextDataPublisher model module.
 * @module model/NewsArticleSearchByTextDataPublisher
 * @version 0.9.1
 */
class NewsArticleSearchByTextDataPublisher {
    /**
     * Constructs a new <code>NewsArticleSearchByTextDataPublisher</code>.
     * Publishers of the news article. A news article is found if one of the specified publishers matches. See endpoint &#x60;/news/publishers/list&#x60; for valid values.
     * @alias module:model/NewsArticleSearchByTextDataPublisher
     */
    constructor() { 
        
        NewsArticleSearchByTextDataPublisher.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewsArticleSearchByTextDataPublisher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsArticleSearchByTextDataPublisher} obj Optional instance to populate.
     * @return {module:model/NewsArticleSearchByTextDataPublisher} The populated <code>NewsArticleSearchByTextDataPublisher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsArticleSearchByTextDataPublisher();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Identifiers of the publishers.
 * @member {Array.<Number>} ids
 */
NewsArticleSearchByTextDataPublisher.prototype['ids'] = undefined;






export default NewsArticleSearchByTextDataPublisher;

