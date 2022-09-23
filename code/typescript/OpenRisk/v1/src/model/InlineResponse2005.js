/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RiskMappingEntry from './RiskMappingEntry';
import SuccessResponseMeta from './SuccessResponseMeta';

/**
 * The InlineResponse2005 model module.
 * @module model/InlineResponse2005
 */
class InlineResponse2005 {
    /**
     * Constructs a new <code>InlineResponse2005</code>.
     * @alias module:model/InlineResponse2005
     * @param meta {module:model/SuccessResponseMeta} 
     * @param data {Array.<module:model/RiskMappingEntry>} 
     */
    constructor(meta, data) { 
        
        InlineResponse2005.initialize(this, meta, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, meta, data) { 
        obj['meta'] = meta;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = SuccessResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [RiskMappingEntry]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SuccessResponseMeta} meta
 */
InlineResponse2005.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/RiskMappingEntry>} data
 */
InlineResponse2005.prototype['data'] = undefined;






export default InlineResponse2005;
