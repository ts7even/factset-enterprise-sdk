/**
 * Funds API For Digital Portals
 * Search for mutual funds and ETFs using one single consolidated API, including a criteria-based screener. The API provides also base data, key figures, and holdings.  A separate endpoint returns the possible values and value range for the parameters that the endpoint /fund/notation/screener/search accepts: Application developers can request the values and value range only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /fund/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FundNotationScreenerSearchDataShareClassLifeCycleIssue model module.
 * @module model/FundNotationScreenerSearchDataShareClassLifeCycleIssue
 * @version 0.10.0
 */
class FundNotationScreenerSearchDataShareClassLifeCycleIssue {
    /**
     * Constructs a new <code>FundNotationScreenerSearchDataShareClassLifeCycleIssue</code>.
     * Date range of the issue date.
     * @alias module:model/FundNotationScreenerSearchDataShareClassLifeCycleIssue
     * @param start {Date} The starting point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the past.
     * @param end {Date} The ending point of the date range (exclusive), or `null` to indicate that the date range extends indefinitely into the future.
     */
    constructor(start, end) { 
        
        FundNotationScreenerSearchDataShareClassLifeCycleIssue.initialize(this, start, end);
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
     * Constructs a <code>FundNotationScreenerSearchDataShareClassLifeCycleIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundNotationScreenerSearchDataShareClassLifeCycleIssue} obj Optional instance to populate.
     * @return {module:model/FundNotationScreenerSearchDataShareClassLifeCycleIssue} The populated <code>FundNotationScreenerSearchDataShareClassLifeCycleIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundNotationScreenerSearchDataShareClassLifeCycleIssue();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The starting point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the past.
 * @member {Date} start
 */
FundNotationScreenerSearchDataShareClassLifeCycleIssue.prototype['start'] = undefined;

/**
 * The ending point of the date range (exclusive), or `null` to indicate that the date range extends indefinitely into the future.
 * @member {Date} end
 */
FundNotationScreenerSearchDataShareClassLifeCycleIssue.prototype['end'] = undefined;






export default FundNotationScreenerSearchDataShareClassLifeCycleIssue;
