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
import InlineResponse2004DataParent from './InlineResponse2004DataParent';

/**
 * The InlineResponse2004DataCategories model module.
 * @module model/InlineResponse2004DataCategories
 * @version 0.9.0
 */
class InlineResponse2004DataCategories {
    /**
     * Constructs a new <code>InlineResponse2004DataCategories</code>.
     * @alias module:model/InlineResponse2004DataCategories
     */
    constructor() { 
        
        InlineResponse2004DataCategories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataCategories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataCategories} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataCategories} The populated <code>InlineResponse2004DataCategories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataCategories();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = InlineResponse2004DataParent.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of a category.
 * @member {Number} id
 */
InlineResponse2004DataCategories.prototype['id'] = undefined;

/**
 * Name of the category.
 * @member {String} name
 */
InlineResponse2004DataCategories.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse2004DataParent} parent
 */
InlineResponse2004DataCategories.prototype['parent'] = undefined;

/**
 * Number of notations.
 * @member {Number} count
 */
InlineResponse2004DataCategories.prototype['count'] = undefined;






export default InlineResponse2004DataCategories;
