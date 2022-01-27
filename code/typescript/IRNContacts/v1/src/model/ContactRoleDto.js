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
 * The ContactRoleDto model module.
 * @module model/ContactRoleDto
 * @version 0.9.0
 */
class ContactRoleDto {
    /**
     * Constructs a new <code>ContactRoleDto</code>.
     * @alias module:model/ContactRoleDto
     * @param id {String} 
     * @param name {String} 
     */
    constructor(id, name) { 
        
        ContactRoleDto.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ContactRoleDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactRoleDto} obj Optional instance to populate.
     * @return {module:model/ContactRoleDto} The populated <code>ContactRoleDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRoleDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ContactRoleDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ContactRoleDto.prototype['name'] = undefined;






export default ContactRoleDto;
