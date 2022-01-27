/**
 * IRN API v1
 * Allows users to create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RecommendationConfigDto model module.
 * @module model/RecommendationConfigDto
 * @version 0.9.0
 */
class RecommendationConfigDto {
    /**
     * Constructs a new <code>RecommendationConfigDto</code>.
     * @alias module:model/RecommendationConfigDto
     */
    constructor() { 
        
        RecommendationConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecommendationConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecommendationConfigDto} obj Optional instance to populate.
     * @return {module:model/RecommendationConfigDto} The populated <code>RecommendationConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecommendationConfigDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('isHidden')) {
                obj['isHidden'] = ApiClient.convertToType(data['isHidden'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
RecommendationConfigDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RecommendationConfigDto.prototype['name'] = undefined;

/**
 * @member {Number} code
 */
RecommendationConfigDto.prototype['code'] = undefined;

/**
 * @member {Boolean} isHidden
 */
RecommendationConfigDto.prototype['isHidden'] = undefined;






export default RecommendationConfigDto;
