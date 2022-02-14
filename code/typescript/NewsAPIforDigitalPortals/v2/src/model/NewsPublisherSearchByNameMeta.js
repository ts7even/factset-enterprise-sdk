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
 * The NewsPublisherSearchByNameMeta model module.
 * @module model/NewsPublisherSearchByNameMeta
 * @version 0.9.1
 */
class NewsPublisherSearchByNameMeta {
    /**
     * Constructs a new <code>NewsPublisherSearchByNameMeta</code>.
     * The meta member contains the meta information of the request.
     * @alias module:model/NewsPublisherSearchByNameMeta
     */
    constructor() { 
        
        NewsPublisherSearchByNameMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewsPublisherSearchByNameMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewsPublisherSearchByNameMeta} obj Optional instance to populate.
     * @return {module:model/NewsPublisherSearchByNameMeta} The populated <code>NewsPublisherSearchByNameMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewsPublisherSearchByNameMeta();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Limit the attributes returned in the response to the specified set.
 * @member {Array.<String>} attributes
 */
NewsPublisherSearchByNameMeta.prototype['attributes'] = undefined;

/**
 * Sortable attributes. The sort order is ascending unless it is prefixed with a minus sign, in which case it is descending. A list of at most 1 (possibly prefixed) attribute name(s) is allowed.
 * @member {Array.<module:model/NewsPublisherSearchByNameMeta.SortEnum>} sort
 */
NewsPublisherSearchByNameMeta.prototype['sort'] = undefined;





/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
NewsPublisherSearchByNameMeta['SortEnum'] = {

    /**
     * value: "id"
     * @const
     */
    "id": "id",

    /**
     * value: "-id"
     * @const
     */
    "-id": "-id",

    /**
     * value: "name"
     * @const
     */
    "name": "name",

    /**
     * value: "-name"
     * @const
     */
    "-name": "-name"
};



export default NewsPublisherSearchByNameMeta;

