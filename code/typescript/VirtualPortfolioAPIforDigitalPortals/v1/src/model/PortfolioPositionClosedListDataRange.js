/**
 * Virtual Portfolio API For Digital Portals
 * The virtual portfolio enables the analysis of the current allocation, broken down by asset classes, currencies,  regions, sectors, style, capitalization, style, maturity, risk, and more.  Relative performance and monthly returns can be measured against benchmarks, using portfolio position transaction (buy/sell) data. Both the realized profit/loss (resulting from closed transactions) and the potential profit/loss (resulting from positions that have not been sold yet) can be queried.  Portfolio endpoints allow creation and managing a transaction-based portfolio. A transaction-based portfolio contains a gapless history of all transactions to be able to accurately reproduce the investment record of the portfolio.  An instrument added to a portfolio is called a position. Each position consists of multiple buy and sell events called transactions. Portfolios are limited to 100 positions and 1000 transactions; adding more will result in an error.  A transaction-based portfolio can consist of the following transactions:  * A buy transaction opens or adds to a position in the portfolio, decreasing the cash value by the purchase price at the same time. If there is not enough cash in the portfolio to cover the transaction, the cash value becomes negative. * A sell transaction decreases or closes a position in the portfolio, increasing the cash value by the sale price at the same time. A sell transaction can only be created if the number of shares of a given position exceeds the number being sold. * A cash transaction increases or decreases the cash position of the portfolio. A portfolio can have only one cash position. The cash position is tracked automatically as each buy or sell transaction implicitly affects it. The cash position can be negative as a buy transaction does not check whether enough cash is available. The cash position does not generate interest; its performance is always 0%.  The chosen prices and key figures in the endpoints are using the same quality, which is configurable per application. Possible values are delayed (DLY), best (BST), end-of-day (EOD) or realtime (RLT). The default value for the price quality is BST.  The portfolio endpoints use different methods to calculate key figures. All key figures except the risk in /portfolio/detail/list, /portfolio/get, and /portfolio/position/list are calculated on-the-fly with current prices. The risk key figures are calculated on-the-fly with current prices, but the result is cached for 24 hours. The key figures in /portfolio/evaluation/list are calculated on end-of-day basis.  The Virtual Portfolio API for Digital Portals is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments in a watchlist. This also supports basic security identifier cross-reference. To complement the Watchlist API and Virtual Portfolio API with direct access to price histories, please refer to the Time Series API for Digital Portals.
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
 * The PortfolioPositionClosedListDataRange model module.
 * @module model/PortfolioPositionClosedListDataRange
 */
class PortfolioPositionClosedListDataRange {
    /**
     * Constructs a new <code>PortfolioPositionClosedListDataRange</code>.
     * Date range for the closed positions. A valid date range is between 1900-01-01 and the day after the current day. A date before the date of the first transaction is implicitly adjusted to the date of the portfolio&#39;s first transaction.
     * @alias module:model/PortfolioPositionClosedListDataRange
     * @param start {Date} The starting point of the date range (inclusive).
     * @param end {Date} The ending point of the date range (inclusive).
     */
    constructor(start, end) { 
        
        PortfolioPositionClosedListDataRange.initialize(this, start, end);
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
     * Constructs a <code>PortfolioPositionClosedListDataRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioPositionClosedListDataRange} obj Optional instance to populate.
     * @return {module:model/PortfolioPositionClosedListDataRange} The populated <code>PortfolioPositionClosedListDataRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioPositionClosedListDataRange();

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
 * The starting point of the date range (inclusive).
 * @member {Date} start
 */
PortfolioPositionClosedListDataRange.prototype['start'] = undefined;

/**
 * The ending point of the date range (inclusive).
 * @member {Date} end
 */
PortfolioPositionClosedListDataRange.prototype['end'] = undefined;






export default PortfolioPositionClosedListDataRange;

