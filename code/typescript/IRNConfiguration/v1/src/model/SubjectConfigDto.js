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
import ApprovalProcessConfigDto from './ApprovalProcessConfigDto';
import CommentaryConfigDto from './CommentaryConfigDto';
import HeadlineFormatConfigDto from './HeadlineFormatConfigDto';
import RatingConfigDto from './RatingConfigDto';

/**
 * The SubjectConfigDto model module.
 * @module model/SubjectConfigDto
 * @version 0.9.0
 */
class SubjectConfigDto {
    /**
     * Constructs a new <code>SubjectConfigDto</code>.
     * @alias module:model/SubjectConfigDto
     */
    constructor() { 
        
        SubjectConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectConfigDto} obj Optional instance to populate.
     * @return {module:model/SubjectConfigDto} The populated <code>SubjectConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectConfigDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('isHidden')) {
                obj['isHidden'] = ApiClient.convertToType(data['isHidden'], 'Boolean');
            }
            if (data.hasOwnProperty('identifierType')) {
                obj['identifierType'] = ApiClient.convertToType(data['identifierType'], 'String');
            }
            if (data.hasOwnProperty('customFieldIds')) {
                obj['customFieldIds'] = ApiClient.convertToType(data['customFieldIds'], ['String']);
            }
            if (data.hasOwnProperty('approvalProcessConfig')) {
                obj['approvalProcessConfig'] = ApprovalProcessConfigDto.constructFromObject(data['approvalProcessConfig']);
            }
            if (data.hasOwnProperty('commentaryConfig')) {
                obj['commentaryConfig'] = CommentaryConfigDto.constructFromObject(data['commentaryConfig']);
            }
            if (data.hasOwnProperty('newsHeadlineFormat')) {
                obj['newsHeadlineFormat'] = ApiClient.convertToType(data['newsHeadlineFormat'], [HeadlineFormatConfigDto]);
            }
            if (data.hasOwnProperty('emailHeadlineFormat')) {
                obj['emailHeadlineFormat'] = ApiClient.convertToType(data['emailHeadlineFormat'], [HeadlineFormatConfigDto]);
            }
            if (data.hasOwnProperty('ratingConfig')) {
                obj['ratingConfig'] = RatingConfigDto.constructFromObject(data['ratingConfig']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
SubjectConfigDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
SubjectConfigDto.prototype['name'] = undefined;

/**
 * @member {String} code
 */
SubjectConfigDto.prototype['code'] = undefined;

/**
 * @member {Boolean} isHidden
 */
SubjectConfigDto.prototype['isHidden'] = undefined;

/**
 * @member {String} identifierType
 */
SubjectConfigDto.prototype['identifierType'] = undefined;

/**
 * @member {Array.<String>} customFieldIds
 */
SubjectConfigDto.prototype['customFieldIds'] = undefined;

/**
 * @member {module:model/ApprovalProcessConfigDto} approvalProcessConfig
 */
SubjectConfigDto.prototype['approvalProcessConfig'] = undefined;

/**
 * @member {module:model/CommentaryConfigDto} commentaryConfig
 */
SubjectConfigDto.prototype['commentaryConfig'] = undefined;

/**
 * @member {Array.<module:model/HeadlineFormatConfigDto>} newsHeadlineFormat
 */
SubjectConfigDto.prototype['newsHeadlineFormat'] = undefined;

/**
 * @member {Array.<module:model/HeadlineFormatConfigDto>} emailHeadlineFormat
 */
SubjectConfigDto.prototype['emailHeadlineFormat'] = undefined;

/**
 * @member {module:model/RatingConfigDto} ratingConfig
 */
SubjectConfigDto.prototype['ratingConfig'] = undefined;






export default SubjectConfigDto;
