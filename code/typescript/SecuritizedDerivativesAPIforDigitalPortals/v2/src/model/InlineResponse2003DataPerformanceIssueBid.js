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
 * The InlineResponse2003DataPerformanceIssueBid model module.
 * @module model/InlineResponse2003DataPerformanceIssueBid
 * @version 0.9.1
 */
class InlineResponse2003DataPerformanceIssueBid {
    /**
     * Constructs a new <code>InlineResponse2003DataPerformanceIssueBid</code>.
     * Bid-based performance.
     * @alias module:model/InlineResponse2003DataPerformanceIssueBid
     */
    constructor() { 
        
        InlineResponse2003DataPerformanceIssueBid.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003DataPerformanceIssueBid</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003DataPerformanceIssueBid} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003DataPerformanceIssueBid} The populated <code>InlineResponse2003DataPerformanceIssueBid</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003DataPerformanceIssueBid();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Number');
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = ApiClient.convertToType(data['relative'], 'Number');
            }
            if (data.hasOwnProperty('annualized')) {
                obj['annualized'] = ApiClient.convertToType(data['annualized'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Performance in absolute terms.
 * @member {Number} absolute
 */
InlineResponse2003DataPerformanceIssueBid.prototype['absolute'] = undefined;

/**
 * Performance relative to the issue price.
 * @member {Number} relative
 */
InlineResponse2003DataPerformanceIssueBid.prototype['relative'] = undefined;

/**
 * Annualized performance relative to the issue price.
 * @member {Number} annualized
 */
InlineResponse2003DataPerformanceIssueBid.prototype['annualized'] = undefined;






export default InlineResponse2003DataPerformanceIssueBid;

