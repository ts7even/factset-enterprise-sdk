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
import InlineResponse2009DataInstrumentAssetClass from './InlineResponse2009DataInstrumentAssetClass';
import InlineResponse2009DataInstrumentType from './InlineResponse2009DataInstrumentType';

/**
 * The InlineResponse20010DataInstrument model module.
 * @module model/InlineResponse20010DataInstrument
 */
class InlineResponse20010DataInstrument {
    /**
     * Constructs a new <code>InlineResponse20010DataInstrument</code>.
     * Details of the instrument.
     * @alias module:model/InlineResponse20010DataInstrument
     */
    constructor() { 
        
        InlineResponse20010DataInstrument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20010DataInstrument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010DataInstrument} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010DataInstrument} The populated <code>InlineResponse20010DataInstrument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20010DataInstrument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('assetClass')) {
                obj['assetClass'] = InlineResponse2009DataInstrumentAssetClass.constructFromObject(data['assetClass']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], [InlineResponse2009DataInstrumentType]);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the instrument.
 * @member {String} id
 */
InlineResponse20010DataInstrument.prototype['id'] = undefined;

/**
 * Name of the instrument.
 * @member {String} name
 */
InlineResponse20010DataInstrument.prototype['name'] = undefined;

/**
 * Short name of the instrument.
 * @member {String} shortName
 */
InlineResponse20010DataInstrument.prototype['shortName'] = undefined;

/**
 * International Securities Identification Number
 * @member {String} isin
 */
InlineResponse20010DataInstrument.prototype['isin'] = undefined;

/**
 * @member {module:model/InlineResponse2009DataInstrumentAssetClass} assetClass
 */
InlineResponse20010DataInstrument.prototype['assetClass'] = undefined;

/**
 * Instrument type as defined by FactSet Digital Solutions. Instrument categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18).
 * @member {Array.<module:model/InlineResponse2009DataInstrumentType>} type
 */
InlineResponse20010DataInstrument.prototype['type'] = undefined;






export default InlineResponse20010DataInstrument;

