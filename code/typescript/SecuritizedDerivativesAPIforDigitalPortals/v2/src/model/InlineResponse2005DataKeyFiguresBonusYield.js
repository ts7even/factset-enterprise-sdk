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
import InlineResponse2005DataKeyFiguresBonusYieldAbsolute from './InlineResponse2005DataKeyFiguresBonusYieldAbsolute';
import InlineResponse2005DataKeyFiguresBonusYieldAnnualized from './InlineResponse2005DataKeyFiguresBonusYieldAnnualized';
import InlineResponse2005DataKeyFiguresBonusYieldRelative from './InlineResponse2005DataKeyFiguresBonusYieldRelative';

/**
 * The InlineResponse2005DataKeyFiguresBonusYield model module.
 * @module model/InlineResponse2005DataKeyFiguresBonusYield
 * @version 0.9.0
 */
class InlineResponse2005DataKeyFiguresBonusYield {
    /**
     * Constructs a new <code>InlineResponse2005DataKeyFiguresBonusYield</code>.
     * Value ranges related to the bonus yield.
     * @alias module:model/InlineResponse2005DataKeyFiguresBonusYield
     */
    constructor() { 
        
        InlineResponse2005DataKeyFiguresBonusYield.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataKeyFiguresBonusYield</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataKeyFiguresBonusYield} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataKeyFiguresBonusYield} The populated <code>InlineResponse2005DataKeyFiguresBonusYield</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataKeyFiguresBonusYield();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = InlineResponse2005DataKeyFiguresBonusYieldAbsolute.constructFromObject(data['absolute']);
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = InlineResponse2005DataKeyFiguresBonusYieldRelative.constructFromObject(data['relative']);
            }
            if (data.hasOwnProperty('annualized')) {
                obj['annualized'] = InlineResponse2005DataKeyFiguresBonusYieldAnnualized.constructFromObject(data['annualized']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataKeyFiguresBonusYieldAbsolute} absolute
 */
InlineResponse2005DataKeyFiguresBonusYield.prototype['absolute'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataKeyFiguresBonusYieldRelative} relative
 */
InlineResponse2005DataKeyFiguresBonusYield.prototype['relative'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataKeyFiguresBonusYieldAnnualized} annualized
 */
InlineResponse2005DataKeyFiguresBonusYield.prototype['annualized'] = undefined;






export default InlineResponse2005DataKeyFiguresBonusYield;
