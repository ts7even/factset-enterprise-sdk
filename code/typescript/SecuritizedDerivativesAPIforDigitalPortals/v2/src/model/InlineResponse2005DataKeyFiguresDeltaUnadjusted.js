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
 * The InlineResponse2005DataKeyFiguresDeltaUnadjusted model module.
 * @module model/InlineResponse2005DataKeyFiguresDeltaUnadjusted
 * @version 0.9.1
 */
class InlineResponse2005DataKeyFiguresDeltaUnadjusted {
    /**
     * Constructs a new <code>InlineResponse2005DataKeyFiguresDeltaUnadjusted</code>.
     * Value range of the delta calculated using a (hypothetical) cover ratio of 1:1.
     * @alias module:model/InlineResponse2005DataKeyFiguresDeltaUnadjusted
     */
    constructor() { 
        
        InlineResponse2005DataKeyFiguresDeltaUnadjusted.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataKeyFiguresDeltaUnadjusted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataKeyFiguresDeltaUnadjusted} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataKeyFiguresDeltaUnadjusted} The populated <code>InlineResponse2005DataKeyFiguresDeltaUnadjusted</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataKeyFiguresDeltaUnadjusted();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = ApiClient.convertToType(data['minimum'], 'Number');
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = ApiClient.convertToType(data['maximum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Minimum value.
 * @member {Number} minimum
 */
InlineResponse2005DataKeyFiguresDeltaUnadjusted.prototype['minimum'] = undefined;

/**
 * Maximum value.
 * @member {Number} maximum
 */
InlineResponse2005DataKeyFiguresDeltaUnadjusted.prototype['maximum'] = undefined;






export default InlineResponse2005DataKeyFiguresDeltaUnadjusted;

