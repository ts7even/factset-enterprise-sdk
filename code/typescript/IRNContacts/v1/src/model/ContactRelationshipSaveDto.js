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
 * The ContactRelationshipSaveDto model module.
 * @module model/ContactRelationshipSaveDto
 * @version 0.9.1
 */
class ContactRelationshipSaveDto {
    /**
     * Constructs a new <code>ContactRelationshipSaveDto</code>.
     * @alias module:model/ContactRelationshipSaveDto
     */
    constructor() { 
        
        ContactRelationshipSaveDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactRelationshipSaveDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactRelationshipSaveDto} obj Optional instance to populate.
     * @return {module:model/ContactRelationshipSaveDto} The populated <code>ContactRelationshipSaveDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRelationshipSaveDto();

            if (data.hasOwnProperty('relationshipId')) {
                obj['relationshipId'] = ApiClient.convertToType(data['relationshipId'], 'String');
            }
            if (data.hasOwnProperty('contactId')) {
                obj['contactId'] = ApiClient.convertToType(data['contactId'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('isCurrent')) {
                obj['isCurrent'] = ApiClient.convertToType(data['isCurrent'], 'Boolean');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} relationshipId
 */
ContactRelationshipSaveDto.prototype['relationshipId'] = undefined;

/**
 * @member {String} contactId
 */
ContactRelationshipSaveDto.prototype['contactId'] = undefined;

/**
 * @member {Date} start
 */
ContactRelationshipSaveDto.prototype['start'] = undefined;

/**
 * @member {Date} end
 */
ContactRelationshipSaveDto.prototype['end'] = undefined;

/**
 * @member {String} comment
 */
ContactRelationshipSaveDto.prototype['comment'] = undefined;

/**
 * @member {Boolean} isCurrent
 */
ContactRelationshipSaveDto.prototype['isCurrent'] = undefined;

/**
 * @member {String} symbol
 */
ContactRelationshipSaveDto.prototype['symbol'] = undefined;

/**
 * @member {String} title
 */
ContactRelationshipSaveDto.prototype['title'] = undefined;






export default ContactRelationshipSaveDto;

