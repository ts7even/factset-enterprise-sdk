/**
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
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
 * The SymbolRelationshipUpdateDto model module.
 * @module model/SymbolRelationshipUpdateDto
 * @version 0.20.0
 */
class SymbolRelationshipUpdateDto {
    /**
     * Constructs a new <code>SymbolRelationshipUpdateDto</code>.
     * @alias module:model/SymbolRelationshipUpdateDto
     */
    constructor() { 
        
        SymbolRelationshipUpdateDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SymbolRelationshipUpdateDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolRelationshipUpdateDto} obj Optional instance to populate.
     * @return {module:model/SymbolRelationshipUpdateDto} The populated <code>SymbolRelationshipUpdateDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SymbolRelationshipUpdateDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('symbolsRelationshipId')) {
                obj['symbolsRelationshipId'] = ApiClient.convertToType(data['symbolsRelationshipId'], 'String');
            }
            if (data.hasOwnProperty('parentSymbol')) {
                obj['parentSymbol'] = ApiClient.convertToType(data['parentSymbol'], 'String');
            }
            if (data.hasOwnProperty('childSymbol')) {
                obj['childSymbol'] = ApiClient.convertToType(data['childSymbol'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
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
SymbolRelationshipUpdateDto.prototype['id'] = undefined;

/**
 * @member {String} symbolsRelationshipId
 */
SymbolRelationshipUpdateDto.prototype['symbolsRelationshipId'] = undefined;

/**
 * @member {String} parentSymbol
 */
SymbolRelationshipUpdateDto.prototype['parentSymbol'] = undefined;

/**
 * @member {String} childSymbol
 */
SymbolRelationshipUpdateDto.prototype['childSymbol'] = undefined;

/**
 * @member {Date} startDate
 */
SymbolRelationshipUpdateDto.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
SymbolRelationshipUpdateDto.prototype['endDate'] = undefined;

/**
 * @member {String} comment
 */
SymbolRelationshipUpdateDto.prototype['comment'] = undefined;






export default SymbolRelationshipUpdateDto;

