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
 * The InlineResponse200DataExercise model module.
 * @module model/InlineResponse200DataExercise
 * @version 0.9.1
 */
class InlineResponse200DataExercise {
    /**
     * Constructs a new <code>InlineResponse200DataExercise</code>.
     * Exercise data of the instrument.
     * @alias module:model/InlineResponse200DataExercise
     */
    constructor() { 
        
        InlineResponse200DataExercise.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataExercise</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataExercise} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataExercise} The populated <code>InlineResponse200DataExercise</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataExercise();

            if (data.hasOwnProperty('right')) {
                obj['right'] = ApiClient.convertToType(data['right'], 'String');
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Code of the exercise right.
 * @member {module:model/InlineResponse200DataExercise.RightEnum} right
 */
InlineResponse200DataExercise.prototype['right'] = undefined;

/**
 * Code of the exercise style.
 * @member {module:model/InlineResponse200DataExercise.StyleEnum} style
 */
InlineResponse200DataExercise.prototype['style'] = undefined;





/**
 * Allowed values for the <code>right</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse200DataExercise['RightEnum'] = {

    /**
     * value: "put"
     * @const
     */
    "put": "put",

    /**
     * value: "call"
     * @const
     */
    "call": "call"
};


/**
 * Allowed values for the <code>style</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse200DataExercise['StyleEnum'] = {

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



export default InlineResponse200DataExercise;

