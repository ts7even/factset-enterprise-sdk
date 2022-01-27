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
import InlineResponse2005DataRecommendationCountsTotal from './InlineResponse2005DataRecommendationCountsTotal';

/**
 * The InlineResponse2005DataRecommendationCounts model module.
 * @module model/InlineResponse2005DataRecommendationCounts
 * @version 0.9.0
 */
class InlineResponse2005DataRecommendationCounts {
    /**
     * Constructs a new <code>InlineResponse2005DataRecommendationCounts</code>.
     * Value ranges related to recommendations counts.
     * @alias module:model/InlineResponse2005DataRecommendationCounts
     */
    constructor() { 
        
        InlineResponse2005DataRecommendationCounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataRecommendationCounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataRecommendationCounts} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataRecommendationCounts} The populated <code>InlineResponse2005DataRecommendationCounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataRecommendationCounts();

            if (data.hasOwnProperty('total')) {
                obj['total'] = InlineResponse2005DataRecommendationCountsTotal.constructFromObject(data['total']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataRecommendationCountsTotal} total
 */
InlineResponse2005DataRecommendationCounts.prototype['total'] = undefined;






export default InlineResponse2005DataRecommendationCounts;
