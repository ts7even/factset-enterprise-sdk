/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2005DataExerciseStyle model module.
 * @module model/InlineResponse2005DataExerciseStyle
 * @version 0.9.1
 */
class InlineResponse2005DataExerciseStyle {
    /**
     * Constructs a new <code>InlineResponse2005DataExerciseStyle</code>.
     * @alias module:model/InlineResponse2005DataExerciseStyle
     */
    constructor() { 
        
        InlineResponse2005DataExerciseStyle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataExerciseStyle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataExerciseStyle} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataExerciseStyle} The populated <code>InlineResponse2005DataExerciseStyle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataExerciseStyle();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Attribute value.
 * @member {module:model/InlineResponse2005DataExerciseStyle.ValueEnum} value
 */
InlineResponse2005DataExerciseStyle.prototype['value'] = undefined;

/**
 * Number of notations.
 * @member {Number} count
 */
InlineResponse2005DataExerciseStyle.prototype['count'] = undefined;





/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2005DataExerciseStyle['ValueEnum'] = {

    /**
     * value: "american"
     * @const
     */
    "american": "american",

    /**
     * value: "european"
     * @const
     */
    "european": "european",

    /**
     * value: "bermudan"
     * @const
     */
    "bermudan": "bermudan"
};



export default InlineResponse2005DataExerciseStyle;

