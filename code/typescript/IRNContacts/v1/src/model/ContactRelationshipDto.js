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
import ContactIdNameDto from './ContactIdNameDto';
import RelationshipCategoryIdNameDto from './RelationshipCategoryIdNameDto';
import RelationshipIdNameDto from './RelationshipIdNameDto';
import RelationshipSymbolSummaryDto from './RelationshipSymbolSummaryDto';

/**
 * The ContactRelationshipDto model module.
 * @module model/ContactRelationshipDto
 * @version 0.9.0
 */
class ContactRelationshipDto {
    /**
     * Constructs a new <code>ContactRelationshipDto</code>.
     * @alias module:model/ContactRelationshipDto
     */
    constructor() { 
        
        ContactRelationshipDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactRelationshipDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactRelationshipDto} obj Optional instance to populate.
     * @return {module:model/ContactRelationshipDto} The populated <code>ContactRelationshipDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRelationshipDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('relationshipCategory')) {
                obj['relationshipCategory'] = RelationshipCategoryIdNameDto.constructFromObject(data['relationshipCategory']);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = RelationshipIdNameDto.constructFromObject(data['relationship']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ContactIdNameDto.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = RelationshipSymbolSummaryDto.constructFromObject(data['symbol']);
            }
            if (data.hasOwnProperty('isCurrent')) {
                obj['isCurrent'] = ApiClient.convertToType(data['isCurrent'], 'Boolean');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ContactRelationshipDto.prototype['id'] = undefined;

/**
 * @member {module:model/RelationshipCategoryIdNameDto} relationshipCategory
 */
ContactRelationshipDto.prototype['relationshipCategory'] = undefined;

/**
 * @member {module:model/RelationshipIdNameDto} relationship
 */
ContactRelationshipDto.prototype['relationship'] = undefined;

/**
 * @member {module:model/ContactIdNameDto} contact
 */
ContactRelationshipDto.prototype['contact'] = undefined;

/**
 * @member {module:model/RelationshipSymbolSummaryDto} symbol
 */
ContactRelationshipDto.prototype['symbol'] = undefined;

/**
 * @member {Boolean} isCurrent
 */
ContactRelationshipDto.prototype['isCurrent'] = undefined;

/**
 * @member {Date} start
 */
ContactRelationshipDto.prototype['start'] = undefined;

/**
 * @member {Date} end
 */
ContactRelationshipDto.prototype['end'] = undefined;

/**
 * @member {String} title
 */
ContactRelationshipDto.prototype['title'] = undefined;

/**
 * @member {String} comment
 */
ContactRelationshipDto.prototype['comment'] = undefined;






export default ContactRelationshipDto;
