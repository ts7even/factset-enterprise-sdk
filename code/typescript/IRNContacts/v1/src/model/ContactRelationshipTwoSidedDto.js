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
 * The ContactRelationshipTwoSidedDto model module.
 * @module model/ContactRelationshipTwoSidedDto
 * @version 0.9.1
 */
class ContactRelationshipTwoSidedDto {
    /**
     * Constructs a new <code>ContactRelationshipTwoSidedDto</code>.
     * @alias module:model/ContactRelationshipTwoSidedDto
     */
    constructor() { 
        
        ContactRelationshipTwoSidedDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactRelationshipTwoSidedDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactRelationshipTwoSidedDto} obj Optional instance to populate.
     * @return {module:model/ContactRelationshipTwoSidedDto} The populated <code>ContactRelationshipTwoSidedDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRelationshipTwoSidedDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('relationshipCategory')) {
                obj['relationshipCategory'] = RelationshipCategoryIdNameDto.constructFromObject(data['relationshipCategory']);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = RelationshipIdNameDto.constructFromObject(data['relationship']);
            }
            if (data.hasOwnProperty('leftContact')) {
                obj['leftContact'] = ContactIdNameDto.constructFromObject(data['leftContact']);
            }
            if (data.hasOwnProperty('rightContact')) {
                obj['rightContact'] = ContactIdNameDto.constructFromObject(data['rightContact']);
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
ContactRelationshipTwoSidedDto.prototype['id'] = undefined;

/**
 * @member {module:model/RelationshipCategoryIdNameDto} relationshipCategory
 */
ContactRelationshipTwoSidedDto.prototype['relationshipCategory'] = undefined;

/**
 * @member {module:model/RelationshipIdNameDto} relationship
 */
ContactRelationshipTwoSidedDto.prototype['relationship'] = undefined;

/**
 * @member {module:model/ContactIdNameDto} leftContact
 */
ContactRelationshipTwoSidedDto.prototype['leftContact'] = undefined;

/**
 * @member {module:model/ContactIdNameDto} rightContact
 */
ContactRelationshipTwoSidedDto.prototype['rightContact'] = undefined;

/**
 * @member {module:model/RelationshipSymbolSummaryDto} symbol
 */
ContactRelationshipTwoSidedDto.prototype['symbol'] = undefined;

/**
 * @member {Boolean} isCurrent
 */
ContactRelationshipTwoSidedDto.prototype['isCurrent'] = undefined;

/**
 * @member {Date} start
 */
ContactRelationshipTwoSidedDto.prototype['start'] = undefined;

/**
 * @member {Date} end
 */
ContactRelationshipTwoSidedDto.prototype['end'] = undefined;

/**
 * @member {String} title
 */
ContactRelationshipTwoSidedDto.prototype['title'] = undefined;

/**
 * @member {String} comment
 */
ContactRelationshipTwoSidedDto.prototype['comment'] = undefined;






export default ContactRelationshipTwoSidedDto;

