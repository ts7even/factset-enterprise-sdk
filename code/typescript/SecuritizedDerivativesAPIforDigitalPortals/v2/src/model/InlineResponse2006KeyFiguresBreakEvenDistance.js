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
 * The InlineResponse2006KeyFiguresBreakEvenDistance model module.
 * @module model/InlineResponse2006KeyFiguresBreakEvenDistance
 * @version 0.9.1
 */
class InlineResponse2006KeyFiguresBreakEvenDistance {
    /**
     * Constructs a new <code>InlineResponse2006KeyFiguresBreakEvenDistance</code>.
     * Distance from the underlying level to the break even point.
     * @alias module:model/InlineResponse2006KeyFiguresBreakEvenDistance
     */
    constructor() { 
        
        InlineResponse2006KeyFiguresBreakEvenDistance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006KeyFiguresBreakEvenDistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006KeyFiguresBreakEvenDistance} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006KeyFiguresBreakEvenDistance} The populated <code>InlineResponse2006KeyFiguresBreakEvenDistance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006KeyFiguresBreakEvenDistance();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Number');
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = ApiClient.convertToType(data['relative'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Distance in absolute terms. For the value unit, see attribute `instrument.underlying.valueUnit`.
 * @member {Number} absolute
 */
InlineResponse2006KeyFiguresBreakEvenDistance.prototype['absolute'] = undefined;

/**
 * Distance relative to the underlying level.
 * @member {Number} relative
 */
InlineResponse2006KeyFiguresBreakEvenDistance.prototype['relative'] = undefined;






export default InlineResponse2006KeyFiguresBreakEvenDistance;

