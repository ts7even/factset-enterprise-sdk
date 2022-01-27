/**
 * FactSet Terms & Conditions API
 * The FactSet Terms & Conditions API exposes Terms & Conditions data for Fixed Income Corporate, Governement & Agency securities. The FactSet Corporate Government & Agency Terms & Conditions library provides descriptive data on the issue level, such as offering details, redemption information, and coupon schedules. Issuer level data is also available. Coverage is global and includes corporate, sovereign, and agency issues. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Field model module.
 * @module model/Field
 * @version 0.9.0
 */
class Field {
    /**
     * Constructs a new <code>Field</code>.
     * @alias module:model/Field
     */
    constructor() { 
        
        Field.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Field</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Field} obj Optional instance to populate.
     * @return {module:model/Field} The populated <code>Field</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Field();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('dataType')) {
                obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Field identifier to be used as `fields` input in _Terms-and-Conditions_ endpoints. 
 * @member {String} field
 */
Field.prototype['field'] = undefined;

/**
 * Plain text name of the field.
 * @member {String} name
 */
Field.prototype['name'] = undefined;

/**
 * Primary Category of field item, such as COUPON_DETAILS or SECURITY_DETAILS.
 * @member {module:model/Field.CategoryEnum} category
 */
Field.prototype['category'] = undefined;

/**
 * The Data Type of the respective field, including - * date * string * integer * double 
 * @member {String} dataType
 */
Field.prototype['dataType'] = undefined;





/**
 * Allowed values for the <code>category</code> property.
 * @enum {String}
 * @readonly
 */
Field['CategoryEnum'] = {

    /**
     * value: "CONVERTIBLE_FEATURES"
     * @const
     */
    "CONVERTIBLE_FEATURES": "CONVERTIBLE_FEATURES",

    /**
     * value: "COUPON_DETAILS"
     * @const
     */
    "COUPON_DETAILS": "COUPON_DETAILS",

    /**
     * value: "REDEMPTION_OPTIONS"
     * @const
     */
    "REDEMPTION_OPTIONS": "REDEMPTION_OPTIONS",

    /**
     * value: "SECURITY_DETAILS"
     * @const
     */
    "SECURITY_DETAILS": "SECURITY_DETAILS"
};



export default Field;
