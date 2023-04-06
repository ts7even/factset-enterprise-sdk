/**
 * FactSet SCIM API
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LocationResourceReference model module.
 * @module model/LocationResourceReference
 */
class LocationResourceReference {
    /**
     * Constructs a new <code>LocationResourceReference</code>.
     * @alias module:model/LocationResourceReference
     * @param value {String} Identifier of the Location.
     */
    constructor(value) { 
        
        LocationResourceReference.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>LocationResourceReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocationResourceReference} obj Optional instance to populate.
     * @return {module:model/LocationResourceReference} The populated <code>LocationResourceReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocationResourceReference();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('$ref')) {
                obj['$ref'] = ApiClient.convertToType(data['$ref'], 'String');
            }
            if (data.hasOwnProperty('display')) {
                obj['display'] = ApiClient.convertToType(data['display'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the Location.
 * @member {String} value
 */
LocationResourceReference.prototype['value'] = undefined;

/**
 * The URI corresponding to a SCIM resource that is this Location.
 * @member {String} $ref
 */
LocationResourceReference.prototype['$ref'] = undefined;

/**
 * A human-readable name, primarily used for display purposes.
 * @member {String} display
 */
LocationResourceReference.prototype['display'] = undefined;






export default LocationResourceReference;
