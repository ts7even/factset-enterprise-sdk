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
 * The CommentaryConfigDto model module.
 * @module model/CommentaryConfigDto
 * @version 0.9.1
 */
class CommentaryConfigDto {
    /**
     * Constructs a new <code>CommentaryConfigDto</code>.
     * @alias module:model/CommentaryConfigDto
     */
    constructor() { 
        
        CommentaryConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentaryConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentaryConfigDto} obj Optional instance to populate.
     * @return {module:model/CommentaryConfigDto} The populated <code>CommentaryConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentaryConfigDto();

            if (data.hasOwnProperty('shouldSendEmailAlertsToAuthor')) {
                obj['shouldSendEmailAlertsToAuthor'] = ApiClient.convertToType(data['shouldSendEmailAlertsToAuthor'], 'Boolean');
            }
            if (data.hasOwnProperty('shouldSendEmailAlertsToCommenters')) {
                obj['shouldSendEmailAlertsToCommenters'] = ApiClient.convertToType(data['shouldSendEmailAlertsToCommenters'], 'Boolean');
            }
            if (data.hasOwnProperty('shouldSendEmailAlertsToAll')) {
                obj['shouldSendEmailAlertsToAll'] = ApiClient.convertToType(data['shouldSendEmailAlertsToAll'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} shouldSendEmailAlertsToAuthor
 */
CommentaryConfigDto.prototype['shouldSendEmailAlertsToAuthor'] = undefined;

/**
 * @member {Boolean} shouldSendEmailAlertsToCommenters
 */
CommentaryConfigDto.prototype['shouldSendEmailAlertsToCommenters'] = undefined;

/**
 * @member {Boolean} shouldSendEmailAlertsToAll
 */
CommentaryConfigDto.prototype['shouldSendEmailAlertsToAll'] = undefined;






export default CommentaryConfigDto;

