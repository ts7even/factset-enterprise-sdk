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
 * The EmployerDto model module.
 * @module model/EmployerDto
 * @version 0.9.1
 */
class EmployerDto {
    /**
     * Constructs a new <code>EmployerDto</code>.
     * @alias module:model/EmployerDto
     * @param id {String} 
     */
    constructor(id) { 
        
        EmployerDto.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>EmployerDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployerDto} obj Optional instance to populate.
     * @return {module:model/EmployerDto} The populated <code>EmployerDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmployerDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('factsetIdentifier')) {
                obj['factsetIdentifier'] = ApiClient.convertToType(data['factsetIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
EmployerDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
EmployerDto.prototype['name'] = undefined;

/**
 * @member {String} factsetIdentifier
 */
EmployerDto.prototype['factsetIdentifier'] = undefined;






export default EmployerDto;

