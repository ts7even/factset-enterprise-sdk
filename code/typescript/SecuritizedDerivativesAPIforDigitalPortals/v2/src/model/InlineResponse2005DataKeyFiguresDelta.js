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
import InlineResponse2005DataKeyFiguresDeltaEffective from './InlineResponse2005DataKeyFiguresDeltaEffective';
import InlineResponse2005DataKeyFiguresDeltaUnadjusted from './InlineResponse2005DataKeyFiguresDeltaUnadjusted';

/**
 * The InlineResponse2005DataKeyFiguresDelta model module.
 * @module model/InlineResponse2005DataKeyFiguresDelta
 * @version 0.9.1
 */
class InlineResponse2005DataKeyFiguresDelta {
    /**
     * Constructs a new <code>InlineResponse2005DataKeyFiguresDelta</code>.
     * Value ranges related to the delta.
     * @alias module:model/InlineResponse2005DataKeyFiguresDelta
     */
    constructor() { 
        
        InlineResponse2005DataKeyFiguresDelta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataKeyFiguresDelta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataKeyFiguresDelta} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataKeyFiguresDelta} The populated <code>InlineResponse2005DataKeyFiguresDelta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataKeyFiguresDelta();

            if (data.hasOwnProperty('effective')) {
                obj['effective'] = InlineResponse2005DataKeyFiguresDeltaEffective.constructFromObject(data['effective']);
            }
            if (data.hasOwnProperty('unadjusted')) {
                obj['unadjusted'] = InlineResponse2005DataKeyFiguresDeltaUnadjusted.constructFromObject(data['unadjusted']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataKeyFiguresDeltaEffective} effective
 */
InlineResponse2005DataKeyFiguresDelta.prototype['effective'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataKeyFiguresDeltaUnadjusted} unadjusted
 */
InlineResponse2005DataKeyFiguresDelta.prototype['unadjusted'] = undefined;






export default InlineResponse2005DataKeyFiguresDelta;

