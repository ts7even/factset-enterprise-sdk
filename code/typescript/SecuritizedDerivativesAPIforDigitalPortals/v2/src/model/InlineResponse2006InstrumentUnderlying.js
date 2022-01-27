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
import InlineResponse2004UnderlyingEffectiveUnderlying from './InlineResponse2004UnderlyingEffectiveUnderlying';
import InlineResponse2006InstrumentUnderlyingNotation from './InlineResponse2006InstrumentUnderlyingNotation';
import InlineResponse2006InstrumentUnderlyingValueUnit from './InlineResponse2006InstrumentUnderlyingValueUnit';

/**
 * The InlineResponse2006InstrumentUnderlying model module.
 * @module model/InlineResponse2006InstrumentUnderlying
 * @version 0.9.0
 */
class InlineResponse2006InstrumentUnderlying {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentUnderlying</code>.
     * Underlying data of the securitized derivative.
     * @alias module:model/InlineResponse2006InstrumentUnderlying
     */
    constructor() { 
        
        InlineResponse2006InstrumentUnderlying.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentUnderlying</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentUnderlying} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentUnderlying} The populated <code>InlineResponse2006InstrumentUnderlying</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentUnderlying();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('valueUnit')) {
                obj['valueUnit'] = InlineResponse2006InstrumentUnderlyingValueUnit.constructFromObject(data['valueUnit']);
            }
            if (data.hasOwnProperty('coverRatio')) {
                obj['coverRatio'] = ApiClient.convertToType(data['coverRatio'], 'Number');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = InlineResponse2006InstrumentUnderlyingNotation.constructFromObject(data['notation']);
            }
            if (data.hasOwnProperty('effectiveUnderlying')) {
                obj['effectiveUnderlying'] = InlineResponse2004UnderlyingEffectiveUnderlying.constructFromObject(data['effectiveUnderlying']);
            }
        }
        return obj;
    }


}

/**
 * Name of the underlying, provided also if there is no notation for the underlying.
 * @member {String} name
 */
InlineResponse2006InstrumentUnderlying.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentUnderlyingValueUnit} valueUnit
 */
InlineResponse2006InstrumentUnderlying.prototype['valueUnit'] = undefined;

/**
 * Cover ratio. It indicates the number of units of the underlying to which the securitized derivative refers. If the underlying is a bond the cover ratio represents the value of one percentage point. 
 * @member {Number} coverRatio
 */
InlineResponse2006InstrumentUnderlying.prototype['coverRatio'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentUnderlyingNotation} notation
 */
InlineResponse2006InstrumentUnderlying.prototype['notation'] = undefined;

/**
 * @member {module:model/InlineResponse2004UnderlyingEffectiveUnderlying} effectiveUnderlying
 */
InlineResponse2006InstrumentUnderlying.prototype['effectiveUnderlying'] = undefined;






export default InlineResponse2006InstrumentUnderlying;
