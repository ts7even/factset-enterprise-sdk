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
 * The InlineResponse2006InstrumentExercise model module.
 * @module model/InlineResponse2006InstrumentExercise
 * @version 0.9.1
 */
class InlineResponse2006InstrumentExercise {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentExercise</code>.
     * Exercise data of the securitized derivative.
     * @alias module:model/InlineResponse2006InstrumentExercise
     */
    constructor() { 
        
        InlineResponse2006InstrumentExercise.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentExercise</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentExercise} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentExercise} The populated <code>InlineResponse2006InstrumentExercise</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentExercise();

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
 * Exercise right.
 * @member {module:model/InlineResponse2006InstrumentExercise.RightEnum} right
 */
InlineResponse2006InstrumentExercise.prototype['right'] = undefined;

/**
 * Exercise style.
 * @member {module:model/InlineResponse2006InstrumentExercise.StyleEnum} style
 */
InlineResponse2006InstrumentExercise.prototype['style'] = undefined;





/**
 * Allowed values for the <code>right</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2006InstrumentExercise['RightEnum'] = {

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
InlineResponse2006InstrumentExercise['StyleEnum'] = {

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



export default InlineResponse2006InstrumentExercise;

