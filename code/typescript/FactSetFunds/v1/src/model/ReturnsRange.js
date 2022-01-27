/**
 * FactSet Funds API
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ReturnsRange model module.
 * @module model/ReturnsRange
 * @version 0.9.0
 */
class ReturnsRange {
    /**
     * Constructs a new <code>ReturnsRange</code>.
     * @alias module:model/ReturnsRange
     */
    constructor() { 
        
        ReturnsRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsRange} obj Optional instance to populate.
     * @return {module:model/ReturnsRange} The populated <code>ReturnsRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsRange();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('return')) {
                obj['return'] = ApiClient.convertToType(data['return'], 'Number');
            }
            if (data.hasOwnProperty('returnStartDate')) {
                obj['returnStartDate'] = ApiClient.convertToType(data['returnStartDate'], 'String');
            }
            if (data.hasOwnProperty('returnEndDate')) {
                obj['returnEndDate'] = ApiClient.convertToType(data['returnEndDate'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested.
 * @member {String} fsymId
 */
ReturnsRange.prototype['fsymId'] = undefined;

/**
 * The Return calculated between two dates. The return type is determined by including or excluding dividends through the dividendAdjust parameter.
 * @member {Number} return
 */
ReturnsRange.prototype['return'] = undefined;

/**
 * The start date of the return in YYYY-MM-DD format. *NOTE - the startDate cannot be less than the `priceFirstDate` which can be accessed in the /summary endpoint.
 * @member {String} returnStartDate
 */
ReturnsRange.prototype['returnStartDate'] = undefined;

/**
 * The end date of the return in YYYY-MM-DD format. The start date of the return in YYYY-MM-DD format. *NOTE - the startDate cannot be less than the `priceFirstDate` which can be accessed in the /summary endpoint.
 * @member {String} returnEndDate
 */
ReturnsRange.prototype['returnEndDate'] = undefined;

/**
 * The requested Id sent as input.
 * @member {String} requestId
 */
ReturnsRange.prototype['requestId'] = undefined;






export default ReturnsRange;
