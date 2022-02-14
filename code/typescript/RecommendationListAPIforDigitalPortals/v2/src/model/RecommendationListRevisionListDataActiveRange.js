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
 * The RecommendationListRevisionListDataActiveRange model module.
 * @module model/RecommendationListRevisionListDataActiveRange
 * @version 0.9.1
 */
class RecommendationListRevisionListDataActiveRange {
    /**
     * Constructs a new <code>RecommendationListRevisionListDataActiveRange</code>.
     * Restrict the result list to revisions which have been active during the specified time range.
     * @alias module:model/RecommendationListRevisionListDataActiveRange
     * @param start {String} The starting point of the time range (inclusive), or `null` to indicate that the time range extends indefinitely into the past.
     * @param end {String} The ending point of the time range (exclusive), or `null` to indicate that the time range extends indefinitely into the future.
     */
    constructor(start, end) { 
        
        RecommendationListRevisionListDataActiveRange.initialize(this, start, end);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, start, end) { 
        obj['start'] = start;
        obj['end'] = end;
    }

    /**
     * Constructs a <code>RecommendationListRevisionListDataActiveRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecommendationListRevisionListDataActiveRange} obj Optional instance to populate.
     * @return {module:model/RecommendationListRevisionListDataActiveRange} The populated <code>RecommendationListRevisionListDataActiveRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecommendationListRevisionListDataActiveRange();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The starting point of the time range (inclusive), or `null` to indicate that the time range extends indefinitely into the past.
 * @member {String} start
 */
RecommendationListRevisionListDataActiveRange.prototype['start'] = undefined;

/**
 * The ending point of the time range (exclusive), or `null` to indicate that the time range extends indefinitely into the future.
 * @member {String} end
 */
RecommendationListRevisionListDataActiveRange.prototype['end'] = undefined;






export default RecommendationListRevisionListDataActiveRange;

