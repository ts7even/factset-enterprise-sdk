/**
 * FactSet SCIM API
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VermilionUserResourcePhoneNumbers model module.
 * @module model/VermilionUserResourcePhoneNumbers
 * @version 0.20.0
 */
class VermilionUserResourcePhoneNumbers {
    /**
     * Constructs a new <code>VermilionUserResourcePhoneNumbers</code>.
     * @alias module:model/VermilionUserResourcePhoneNumbers
     */
    constructor() { 
        
        VermilionUserResourcePhoneNumbers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VermilionUserResourcePhoneNumbers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VermilionUserResourcePhoneNumbers} obj Optional instance to populate.
     * @return {module:model/VermilionUserResourcePhoneNumbers} The populated <code>VermilionUserResourcePhoneNumbers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VermilionUserResourcePhoneNumbers();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('display')) {
                obj['display'] = ApiClient.convertToType(data['display'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Phone number of the User.
 * @member {String} value
 */
VermilionUserResourcePhoneNumbers.prototype['value'] = undefined;

/**
 * A human-readable name, primarily used for display purposes.  READ-ONLY.
 * @member {String} display
 */
VermilionUserResourcePhoneNumbers.prototype['display'] = undefined;

/**
 * A label indicating the attribute's function, e.g., 'work', 'home', 'mobile'.
 * @member {String} type
 */
VermilionUserResourcePhoneNumbers.prototype['type'] = undefined;

/**
 * A Boolean value indicating the 'primary' or preferred attribute value for this attribute, e.g., the preferred phone number or primary phone number. The primary attribute value 'true' MUST appear no more than once.
 * @member {Boolean} primary
 */
VermilionUserResourcePhoneNumbers.prototype['primary'] = undefined;






export default VermilionUserResourcePhoneNumbers;
