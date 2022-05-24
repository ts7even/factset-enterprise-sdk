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
 * The SymbolRelationshipSaveDto model module.
 * @module model/SymbolRelationshipSaveDto
 * @version 0.20.0
 */
class SymbolRelationshipSaveDto {
    /**
     * Constructs a new <code>SymbolRelationshipSaveDto</code>.
     * @alias module:model/SymbolRelationshipSaveDto
     */
    constructor() { 
        
        SymbolRelationshipSaveDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SymbolRelationshipSaveDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolRelationshipSaveDto} obj Optional instance to populate.
     * @return {module:model/SymbolRelationshipSaveDto} The populated <code>SymbolRelationshipSaveDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SymbolRelationshipSaveDto();

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
 * @member {String} symbolsRelationshipId
 */
SymbolRelationshipSaveDto.prototype['symbolsRelationshipId'] = undefined;

/**
 * @member {String} parentSymbol
 */
SymbolRelationshipSaveDto.prototype['parentSymbol'] = undefined;

/**
 * @member {String} childSymbol
 */
SymbolRelationshipSaveDto.prototype['childSymbol'] = undefined;

/**
 * @member {Date} startDate
 */
SymbolRelationshipSaveDto.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
SymbolRelationshipSaveDto.prototype['endDate'] = undefined;

/**
 * @member {String} comment
 */
SymbolRelationshipSaveDto.prototype['comment'] = undefined;






export default SymbolRelationshipSaveDto;
