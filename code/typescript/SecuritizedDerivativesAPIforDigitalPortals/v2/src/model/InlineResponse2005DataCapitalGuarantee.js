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
import InlineResponse2005DataCapCashFlow from './InlineResponse2005DataCapCashFlow';
import InlineResponse2005DataCapitalGuaranteeDistance from './InlineResponse2005DataCapitalGuaranteeDistance';
import InlineResponse2005DataCapitalGuaranteeValue from './InlineResponse2005DataCapitalGuaranteeValue';

/**
 * The InlineResponse2005DataCapitalGuarantee model module.
 * @module model/InlineResponse2005DataCapitalGuarantee
 * @version 0.9.0
 */
class InlineResponse2005DataCapitalGuarantee {
    /**
     * Constructs a new <code>InlineResponse2005DataCapitalGuarantee</code>.
     * Value ranges related to the capital guarantee.
     * @alias module:model/InlineResponse2005DataCapitalGuarantee
     */
    constructor() { 
        
        InlineResponse2005DataCapitalGuarantee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataCapitalGuarantee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataCapitalGuarantee} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataCapitalGuarantee} The populated <code>InlineResponse2005DataCapitalGuarantee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataCapitalGuarantee();

            if (data.hasOwnProperty('value')) {
                obj['value'] = InlineResponse2005DataCapitalGuaranteeValue.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = InlineResponse2005DataCapitalGuaranteeDistance.constructFromObject(data['distance']);
            }
            if (data.hasOwnProperty('cashFlow')) {
                obj['cashFlow'] = InlineResponse2005DataCapCashFlow.constructFromObject(data['cashFlow']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataCapitalGuaranteeValue} value
 */
InlineResponse2005DataCapitalGuarantee.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCapitalGuaranteeDistance} distance
 */
InlineResponse2005DataCapitalGuarantee.prototype['distance'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCapCashFlow} cashFlow
 */
InlineResponse2005DataCapitalGuarantee.prototype['cashFlow'] = undefined;






export default InlineResponse2005DataCapitalGuarantee;
