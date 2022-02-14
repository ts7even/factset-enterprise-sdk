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
 * The RelationshipDto model module.
 * @module model/RelationshipDto
 * @version 0.9.1
 */
class RelationshipDto {
    /**
     * Constructs a new <code>RelationshipDto</code>.
     * @alias module:model/RelationshipDto
     */
    constructor() { 
        
        RelationshipDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipDto} obj Optional instance to populate.
     * @return {module:model/RelationshipDto} The populated <code>RelationshipDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('relationshipCategoryId')) {
                obj['relationshipCategoryId'] = ApiClient.convertToType(data['relationshipCategoryId'], 'String');
            }
            if (data.hasOwnProperty('relationshipCode')) {
                obj['relationshipCode'] = ApiClient.convertToType(data['relationshipCode'], 'String');
            }
            if (data.hasOwnProperty('bidirectionalName')) {
                obj['bidirectionalName'] = ApiClient.convertToType(data['bidirectionalName'], 'String');
            }
            if (data.hasOwnProperty('leftToRightName')) {
                obj['leftToRightName'] = ApiClient.convertToType(data['leftToRightName'], 'String');
            }
            if (data.hasOwnProperty('rightToLeftName')) {
                obj['rightToLeftName'] = ApiClient.convertToType(data['rightToLeftName'], 'String');
            }
            if (data.hasOwnProperty('hideDates')) {
                obj['hideDates'] = ApiClient.convertToType(data['hideDates'], 'Boolean');
            }
            if (data.hasOwnProperty('hideComment')) {
                obj['hideComment'] = ApiClient.convertToType(data['hideComment'], 'Boolean');
            }
            if (data.hasOwnProperty('hideCompany')) {
                obj['hideCompany'] = ApiClient.convertToType(data['hideCompany'], 'Boolean');
            }
            if (data.hasOwnProperty('isCustomisable')) {
                obj['isCustomisable'] = ApiClient.convertToType(data['isCustomisable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
RelationshipDto.prototype['id'] = undefined;

/**
 * @member {String} relationshipCategoryId
 */
RelationshipDto.prototype['relationshipCategoryId'] = undefined;

/**
 * @member {String} relationshipCode
 */
RelationshipDto.prototype['relationshipCode'] = undefined;

/**
 * @member {String} bidirectionalName
 */
RelationshipDto.prototype['bidirectionalName'] = undefined;

/**
 * @member {String} leftToRightName
 */
RelationshipDto.prototype['leftToRightName'] = undefined;

/**
 * @member {String} rightToLeftName
 */
RelationshipDto.prototype['rightToLeftName'] = undefined;

/**
 * @member {Boolean} hideDates
 */
RelationshipDto.prototype['hideDates'] = undefined;

/**
 * @member {Boolean} hideComment
 */
RelationshipDto.prototype['hideComment'] = undefined;

/**
 * @member {Boolean} hideCompany
 */
RelationshipDto.prototype['hideCompany'] = undefined;

/**
 * @member {Boolean} isCustomisable
 */
RelationshipDto.prototype['isCustomisable'] = undefined;






export default RelationshipDto;

