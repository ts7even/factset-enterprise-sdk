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
import CreateCustomSymbolCustomFieldValueDto from './CreateCustomSymbolCustomFieldValueDto';

/**
 * The CreateStandardSymbolMetadataDto model module.
 * @module model/CreateStandardSymbolMetadataDto
 * @version 0.20.0
 */
class CreateStandardSymbolMetadataDto {
    /**
     * Constructs a new <code>CreateStandardSymbolMetadataDto</code>.
     * @alias module:model/CreateStandardSymbolMetadataDto
     * @param standardSymbol {String} 
     */
    constructor(standardSymbol) { 
        
        CreateStandardSymbolMetadataDto.initialize(this, standardSymbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, standardSymbol) { 
        obj['standardSymbol'] = standardSymbol;
    }

    /**
     * Constructs a <code>CreateStandardSymbolMetadataDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateStandardSymbolMetadataDto} obj Optional instance to populate.
     * @return {module:model/CreateStandardSymbolMetadataDto} The populated <code>CreateStandardSymbolMetadataDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateStandardSymbolMetadataDto();

            if (data.hasOwnProperty('standardSymbol')) {
                obj['standardSymbol'] = ApiClient.convertToType(data['standardSymbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('typeId')) {
                obj['typeId'] = ApiClient.convertToType(data['typeId'], 'String');
            }
            if (data.hasOwnProperty('subTypeId')) {
                obj['subTypeId'] = ApiClient.convertToType(data['subTypeId'], 'String');
            }
            if (data.hasOwnProperty('googleMapsPlaceId')) {
                obj['googleMapsPlaceId'] = ApiClient.convertToType(data['googleMapsPlaceId'], 'String');
            }
            if (data.hasOwnProperty('formattedAddress')) {
                obj['formattedAddress'] = ApiClient.convertToType(data['formattedAddress'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('stateProvince')) {
                obj['stateProvince'] = ApiClient.convertToType(data['stateProvince'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('customFieldValues')) {
                obj['customFieldValues'] = ApiClient.convertToType(data['customFieldValues'], [CreateCustomSymbolCustomFieldValueDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} standardSymbol
 */
CreateStandardSymbolMetadataDto.prototype['standardSymbol'] = undefined;

/**
 * @member {String} description
 */
CreateStandardSymbolMetadataDto.prototype['description'] = undefined;

/**
 * @member {String} typeId
 */
CreateStandardSymbolMetadataDto.prototype['typeId'] = undefined;

/**
 * @member {String} subTypeId
 */
CreateStandardSymbolMetadataDto.prototype['subTypeId'] = undefined;

/**
 * @member {String} googleMapsPlaceId
 */
CreateStandardSymbolMetadataDto.prototype['googleMapsPlaceId'] = undefined;

/**
 * @member {String} formattedAddress
 */
CreateStandardSymbolMetadataDto.prototype['formattedAddress'] = undefined;

/**
 * @member {String} city
 */
CreateStandardSymbolMetadataDto.prototype['city'] = undefined;

/**
 * @member {String} stateProvince
 */
CreateStandardSymbolMetadataDto.prototype['stateProvince'] = undefined;

/**
 * @member {String} postalCode
 */
CreateStandardSymbolMetadataDto.prototype['postalCode'] = undefined;

/**
 * @member {String} country
 */
CreateStandardSymbolMetadataDto.prototype['country'] = undefined;

/**
 * @member {Array.<module:model/CreateCustomSymbolCustomFieldValueDto>} customFieldValues
 */
CreateStandardSymbolMetadataDto.prototype['customFieldValues'] = undefined;






export default CreateStandardSymbolMetadataDto;

