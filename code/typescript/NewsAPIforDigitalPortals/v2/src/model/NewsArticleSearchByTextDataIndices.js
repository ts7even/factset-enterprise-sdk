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
 * The NewsArticleSearchByTextDataIndices model module.
 * @module model/NewsArticleSearchByTextDataIndices
 * @version 0.9.0
 */
class NewsArticleSearchByTextDataIndices {
    /**
     * Constructs a new <code>NewsArticleSearchByTextDataIndices</code>.
     * Set of index notations that each represent an index. Articles that cover at least one instrument contained in one of the specified indices are found.
     * @alias module:model/NewsArticleSearchByTextDataIndices
     */
    constructor() { 
        
        NewsArticleSearchByTextDataIndices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewsArticleSearchByTextDataIndices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsArticleSearchByTextDataIndices} obj Optional instance to populate.
     * @return {module:model/NewsArticleSearchByTextDataIndices} The populated <code>NewsArticleSearchByTextDataIndices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsArticleSearchByTextDataIndices();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Identifiers of the index notations.
 * @member {Array.<String>} ids
 */
NewsArticleSearchByTextDataIndices.prototype['ids'] = undefined;






export default NewsArticleSearchByTextDataIndices;
