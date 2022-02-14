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
import InlineResponse2004DataRegions from './InlineResponse2004DataRegions';

/**
 * The InlineResponse2004Data model module.
 * @module model/InlineResponse2004Data
 * @version 0.9.1
 */
class InlineResponse2004Data {
    /**
     * Constructs a new <code>InlineResponse2004Data</code>.
     * ETP region allocation data.
     * @alias module:model/InlineResponse2004Data
     */
    constructor() { 
        
        InlineResponse2004Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Data} The populated <code>InlineResponse2004Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004Data();

            if (data.hasOwnProperty('reportDate')) {
                obj['reportDate'] = ApiClient.convertToType(data['reportDate'], 'Date');
            }
            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], [InlineResponse2004DataRegions]);
            }
        }
        return obj;
    }


}

/**
 * Reporting date for the allocations.
 * @member {Date} reportDate
 */
InlineResponse2004Data.prototype['reportDate'] = undefined;

/**
 * List of allocations by region.
 * @member {Array.<module:model/InlineResponse2004DataRegions>} regions
 */
InlineResponse2004Data.prototype['regions'] = undefined;






export default InlineResponse2004Data;

