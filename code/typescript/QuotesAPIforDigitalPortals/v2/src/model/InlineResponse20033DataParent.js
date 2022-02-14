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
 * The InlineResponse20033DataParent model module.
 * @module model/InlineResponse20033DataParent
 * @version 0.9.1
 */
class InlineResponse20033DataParent {
    /**
     * Constructs a new <code>InlineResponse20033DataParent</code>.
     * Parent level. The attributes of the parent level are &#x60;null&#x60; if this category level is the first level.
     * @alias module:model/InlineResponse20033DataParent
     */
    constructor() { 
        
        InlineResponse20033DataParent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20033DataParent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20033DataParent} obj Optional instance to populate.
     * @return {module:model/InlineResponse20033DataParent} The populated <code>InlineResponse20033DataParent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20033DataParent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the category level.
 * @member {Number} id
 */
InlineResponse20033DataParent.prototype['id'] = undefined;

/**
 * Name of the category level.
 * @member {String} name
 */
InlineResponse20033DataParent.prototype['name'] = undefined;






export default InlineResponse20033DataParent;

