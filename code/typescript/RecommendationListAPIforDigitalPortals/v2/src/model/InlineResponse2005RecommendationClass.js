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
 * The InlineResponse2005RecommendationClass model module.
 * @module model/InlineResponse2005RecommendationClass
 * @version 0.9.1
 */
class InlineResponse2005RecommendationClass {
    /**
     * Constructs a new <code>InlineResponse2005RecommendationClass</code>.
     * Customer-defined recommendation class of the element.
     * @alias module:model/InlineResponse2005RecommendationClass
     */
    constructor() { 
        
        InlineResponse2005RecommendationClass.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005RecommendationClass</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005RecommendationClass} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005RecommendationClass} The populated <code>InlineResponse2005RecommendationClass</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005RecommendationClass();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the recommendation class.
 * @member {Number} id
 */
InlineResponse2005RecommendationClass.prototype['id'] = undefined;

/**
 * Code of the recommendation class.
 * @member {String} code
 */
InlineResponse2005RecommendationClass.prototype['code'] = undefined;

/**
 * Description of the recommendation class.
 * @member {String} description
 */
InlineResponse2005RecommendationClass.prototype['description'] = undefined;






export default InlineResponse2005RecommendationClass;

