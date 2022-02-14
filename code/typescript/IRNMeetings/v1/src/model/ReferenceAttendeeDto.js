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
 * The ReferenceAttendeeDto model module.
 * @module model/ReferenceAttendeeDto
 * @version 0.9.1
 */
class ReferenceAttendeeDto {
    /**
     * Constructs a new <code>ReferenceAttendeeDto</code>.
     * @alias module:model/ReferenceAttendeeDto
     */
    constructor() { 
        
        ReferenceAttendeeDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReferenceAttendeeDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferenceAttendeeDto} obj Optional instance to populate.
     * @return {module:model/ReferenceAttendeeDto} The populated <code>ReferenceAttendeeDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferenceAttendeeDto();

            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} emailAddress
 */
ReferenceAttendeeDto.prototype['emailAddress'] = undefined;






export default ReferenceAttendeeDto;

