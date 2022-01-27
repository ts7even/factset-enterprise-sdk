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
 * The InlineResponse2007DataCashFlowAbsolute model module.
 * @module model/InlineResponse2007DataCashFlowAbsolute
 * @version 0.9.0
 */
class InlineResponse2007DataCashFlowAbsolute {
    /**
     * Constructs a new <code>InlineResponse2007DataCashFlowAbsolute</code>.
     * Cash flow in absolute terms.
     * @alias module:model/InlineResponse2007DataCashFlowAbsolute
     */
    constructor() { 
        
        InlineResponse2007DataCashFlowAbsolute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007DataCashFlowAbsolute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007DataCashFlowAbsolute} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007DataCashFlowAbsolute} The populated <code>InlineResponse2007DataCashFlowAbsolute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007DataCashFlowAbsolute();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
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
 * Well-defined amount of the cash flow.
 * @member {Number} value
 */
InlineResponse2007DataCashFlowAbsolute.prototype['value'] = undefined;

/**
 * Minimum amount of the cash flow.
 * @member {Number} minimum
 */
InlineResponse2007DataCashFlowAbsolute.prototype['minimum'] = undefined;

/**
 * Maximum amount of the cash flow.
 * @member {Number} maximum
 */
InlineResponse2007DataCashFlowAbsolute.prototype['maximum'] = undefined;






export default InlineResponse2007DataCashFlowAbsolute;
