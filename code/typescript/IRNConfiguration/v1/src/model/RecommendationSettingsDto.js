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
 * The RecommendationSettingsDto model module.
 * @module model/RecommendationSettingsDto
 * @version 0.9.1
 */
class RecommendationSettingsDto {
    /**
     * Constructs a new <code>RecommendationSettingsDto</code>.
     * @alias module:model/RecommendationSettingsDto
     */
    constructor() { 
        
        RecommendationSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecommendationSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecommendationSettingsDto} obj Optional instance to populate.
     * @return {module:model/RecommendationSettingsDto} The populated <code>RecommendationSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecommendationSettingsDto();

            if (data.hasOwnProperty('defaultId')) {
                obj['defaultId'] = ApiClient.convertToType(data['defaultId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} defaultId
 */
RecommendationSettingsDto.prototype['defaultId'] = undefined;






export default RecommendationSettingsDto;

