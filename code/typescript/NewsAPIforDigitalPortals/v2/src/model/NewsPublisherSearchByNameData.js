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
import NewsPublisherSearchByNameDataFilter from './NewsPublisherSearchByNameDataFilter';

/**
 * The NewsPublisherSearchByNameData model module.
 * @module model/NewsPublisherSearchByNameData
 * @version 0.9.0
 */
class NewsPublisherSearchByNameData {
    /**
     * Constructs a new <code>NewsPublisherSearchByNameData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/NewsPublisherSearchByNameData
     * @param searchValue {String} Restricts the search to publishers, which match the search value. The comparison for a match is case sensitive.
     * @param matchType {module:model/NewsPublisherSearchByNameData.MatchTypeEnum} The match type that is applied to the search.
     */
    constructor(searchValue, matchType) { 
        
        NewsPublisherSearchByNameData.initialize(this, searchValue, matchType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, searchValue, matchType) { 
        obj['searchValue'] = searchValue;
        obj['matchType'] = matchType;
    }

    /**
     * Constructs a <code>NewsPublisherSearchByNameData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsPublisherSearchByNameData} obj Optional instance to populate.
     * @return {module:model/NewsPublisherSearchByNameData} The populated <code>NewsPublisherSearchByNameData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsPublisherSearchByNameData();

            if (data.hasOwnProperty('searchValue')) {
                obj['searchValue'] = ApiClient.convertToType(data['searchValue'], 'String');
            }
            if (data.hasOwnProperty('matchType')) {
                obj['matchType'] = ApiClient.convertToType(data['matchType'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = NewsPublisherSearchByNameDataFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * Restricts the search to publishers, which match the search value. The comparison for a match is case sensitive.
 * @member {String} searchValue
 */
NewsPublisherSearchByNameData.prototype['searchValue'] = undefined;

/**
 * The match type that is applied to the search.
 * @member {module:model/NewsPublisherSearchByNameData.MatchTypeEnum} matchType
 */
NewsPublisherSearchByNameData.prototype['matchType'] = undefined;

/**
 * @member {module:model/NewsPublisherSearchByNameDataFilter} filter
 */
NewsPublisherSearchByNameData.prototype['filter'] = undefined;





/**
 * Allowed values for the <code>matchType</code> property.
 * @enum {String}
 * @readonly
 */
NewsPublisherSearchByNameData['MatchTypeEnum'] = {

    /**
     * value: "begins"
     * @const
     */
    "begins": "begins",

    /**
     * value: "ends"
     * @const
     */
    "ends": "ends",

    /**
     * value: "contains"
     * @const
     */
    "contains": "contains"
};



export default NewsPublisherSearchByNameData;
