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
import InlineResponse2004DataLifeCycleMaturityDate from './InlineResponse2004DataLifeCycleMaturityDate';
import InlineResponse2004DataLifeCycleMaturityPerpetual from './InlineResponse2004DataLifeCycleMaturityPerpetual';
import InlineResponse2004DataLifeCycleMaturityRemainingTermYears from './InlineResponse2004DataLifeCycleMaturityRemainingTermYears';

/**
 * The InlineResponse2004DataLifeCycleMaturity model module.
 * @module model/InlineResponse2004DataLifeCycleMaturity
 * @version 0.9.1
 */
class InlineResponse2004DataLifeCycleMaturity {
    /**
     * Constructs a new <code>InlineResponse2004DataLifeCycleMaturity</code>.
     * Ranges related to the maturity.
     * @alias module:model/InlineResponse2004DataLifeCycleMaturity
     */
    constructor() { 
        
        InlineResponse2004DataLifeCycleMaturity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataLifeCycleMaturity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataLifeCycleMaturity} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataLifeCycleMaturity} The populated <code>InlineResponse2004DataLifeCycleMaturity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataLifeCycleMaturity();

            if (data.hasOwnProperty('date')) {
                obj['date'] = InlineResponse2004DataLifeCycleMaturityDate.constructFromObject(data['date']);
            }
            if (data.hasOwnProperty('remainingTermYears')) {
                obj['remainingTermYears'] = InlineResponse2004DataLifeCycleMaturityRemainingTermYears.constructFromObject(data['remainingTermYears']);
            }
            if (data.hasOwnProperty('perpetual')) {
                obj['perpetual'] = ApiClient.convertToType(data['perpetual'], [InlineResponse2004DataLifeCycleMaturityPerpetual]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004DataLifeCycleMaturityDate} date
 */
InlineResponse2004DataLifeCycleMaturity.prototype['date'] = undefined;

/**
 * @member {module:model/InlineResponse2004DataLifeCycleMaturityRemainingTermYears} remainingTermYears
 */
InlineResponse2004DataLifeCycleMaturity.prototype['remainingTermYears'] = undefined;

/**
 * Indicates whether perpetual and non-perpetual debt instruments are among the results. A perpetual debt instrument is one that does not mature.
 * @member {Array.<module:model/InlineResponse2004DataLifeCycleMaturityPerpetual>} perpetual
 */
InlineResponse2004DataLifeCycleMaturity.prototype['perpetual'] = undefined;






export default InlineResponse2004DataLifeCycleMaturity;

