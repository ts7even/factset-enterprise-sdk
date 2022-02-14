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
import InlineResponse20062DataTargetMarketRiskToleranceSri from './InlineResponse20062DataTargetMarketRiskToleranceSri';

/**
 * The InlineResponse20062DataTargetMarketRiskToleranceSpain model module.
 * @module model/InlineResponse20062DataTargetMarketRiskToleranceSpain
 * @version 0.9.1
 */
class InlineResponse20062DataTargetMarketRiskToleranceSpain {
    /**
     * Constructs a new <code>InlineResponse20062DataTargetMarketRiskToleranceSpain</code>.
     * Specific indicators for Spain.
     * @alias module:model/InlineResponse20062DataTargetMarketRiskToleranceSpain
     */
    constructor() { 
        
        InlineResponse20062DataTargetMarketRiskToleranceSpain.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataTargetMarketRiskToleranceSpain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataTargetMarketRiskToleranceSpain} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataTargetMarketRiskToleranceSpain} The populated <code>InlineResponse20062DataTargetMarketRiskToleranceSpain</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataTargetMarketRiskToleranceSpain();

            if (data.hasOwnProperty('sri')) {
                obj['sri'] = InlineResponse20062DataTargetMarketRiskToleranceSri.constructFromObject(data['sri']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20062DataTargetMarketRiskToleranceSri} sri
 */
InlineResponse20062DataTargetMarketRiskToleranceSpain.prototype['sri'] = undefined;






export default InlineResponse20062DataTargetMarketRiskToleranceSpain;

