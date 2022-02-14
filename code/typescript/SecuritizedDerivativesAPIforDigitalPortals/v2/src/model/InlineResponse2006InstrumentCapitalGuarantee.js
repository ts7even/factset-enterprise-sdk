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
import InlineResponse2006InstrumentCapitalGuaranteeDistance from './InlineResponse2006InstrumentCapitalGuaranteeDistance';

/**
 * The InlineResponse2006InstrumentCapitalGuarantee model module.
 * @module model/InlineResponse2006InstrumentCapitalGuarantee
 * @version 0.9.1
 */
class InlineResponse2006InstrumentCapitalGuarantee {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentCapitalGuarantee</code>.
     * Capital guarantee of the securitized derivative.
     * @alias module:model/InlineResponse2006InstrumentCapitalGuarantee
     */
    constructor() { 
        
        InlineResponse2006InstrumentCapitalGuarantee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentCapitalGuarantee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentCapitalGuarantee} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentCapitalGuarantee} The populated <code>InlineResponse2006InstrumentCapitalGuarantee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentCapitalGuarantee();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = InlineResponse2006InstrumentCapitalGuaranteeDistance.constructFromObject(data['distance']);
            }
            if (data.hasOwnProperty('cashFlow')) {
                obj['cashFlow'] = ApiClient.convertToType(data['cashFlow'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Value of the capital guarantee.
 * @member {Number} value
 */
InlineResponse2006InstrumentCapitalGuarantee.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentCapitalGuaranteeDistance} distance
 */
InlineResponse2006InstrumentCapitalGuarantee.prototype['distance'] = undefined;

/**
 * Cash flow amount.
 * @member {Number} cashFlow
 */
InlineResponse2006InstrumentCapitalGuarantee.prototype['cashFlow'] = undefined;






export default InlineResponse2006InstrumentCapitalGuarantee;

