/*
 * Virtual Portfolio API For Digital Portals
 *
 * The virtual portfolio enables the analysis of the current allocation, broken down by asset classes, currencies,  regions, sectors, style, capitalization, style, maturity, risk, and more.  Relative performance and monthly returns can be measured against benchmarks, using portfolio position transaction (buy/sell) data. Both the realized profit/loss (resulting from closed transactions) and the potential profit/loss (resulting from positions that have not been sold yet) can be queried.  Portfolio endpoints allow creation and managing a transaction-based portfolio. A transaction-based portfolio contains a gapless history of all transactions to be able to accurately reproduce the investment record of the portfolio.  An instrument added to a portfolio is called a position. Each position consists of multiple buy and sell events called transactions. Portfolios are limited to 100 positions and 1000 transactions; adding more will result in an error.  A transaction-based portfolio can consist of the following transactions:  * A buy transaction opens or adds to a position in the portfolio, decreasing the cash value by the purchase price at the same time. If there is not enough cash in the portfolio to cover the transaction, the cash value becomes negative. * A sell transaction decreases or closes a position in the portfolio, increasing the cash value by the sale price at the same time. A sell transaction can only be created if the number of shares of a given position exceeds the number being sold. * A cash transaction increases or decreases the cash position of the portfolio. A portfolio can have only one cash position. The cash position is tracked automatically as each buy or sell transaction implicitly affects it. The cash position can be negative as a buy transaction does not check whether enough cash is available. The cash position does not generate interest; its performance is always 0%.  The chosen prices and key figures in the endpoints are using the same quality, which is configurable per application. Possible values are delayed (DLY), best (BST), end-of-day (EOD) or realtime (RLT). The default value for the price quality is BST.  The portfolio endpoints use different methods to calculate key figures. All key figures except the risk in /portfolio/detail/list, /portfolio/get, and /portfolio/position/list are calculated on-the-fly with current prices. The risk key figures are calculated on-the-fly with current prices, but the result is cached for 24 hours. The key figures in /portfolio/evaluation/list are calculated on end-of-day basis.  The Virtual Portfolio API for Digital Portals is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments in a watchlist. This also supports basic security identifier cross-reference. To complement the Watchlist API and Virtual Portfolio API with direct access to price histories, please refer to the Time Series API for Digital Portals.
 *
 * The version of the OpenAPI document: 2
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace FactSet.SDK.VirtualPortfolioAPIforDigitalPortals.Client
{
    /// <summary>
    /// A container for generalized request inputs. This type allows consumers to extend the request functionality
    /// by abstracting away from the default (built-in) request framework (e.g. RestSharp).
    /// </summary>
    public class RequestOptions
    {
        /// <summary>
        /// Parameters to be bound to path parts of the Request's URL
        /// </summary>
        public Dictionary<string, string> PathParameters { get; set; }

        /// <summary>
        /// Query parameters to be applied to the request.
        /// Keys may have 1 or more values associated.
        /// </summary>
        public Multimap<string, string> QueryParameters { get; set; }

        /// <summary>
        /// Header parameters to be applied to to the request.
        /// Keys may have 1 or more values associated.
        /// </summary>
        public Multimap<string, string> HeaderParameters { get; set; }

        /// <summary>
        /// Form parameters to be sent along with the request.
        /// </summary>
        public Dictionary<string, string> FormParameters { get; set; }

        /// <summary>
        /// File parameters to be sent along with the request.
        /// </summary>
        public Dictionary<string, Stream> FileParameters { get; set; }

        /// <summary>
        /// Cookies to be sent along with the request.
        /// </summary>
        public List<Cookie> Cookies { get; set; }

        /// <summary>
        /// Response type dictionary for each status code.
        /// </summary>
        public Dictionary<HttpStatusCode, Type> ResponseTypeDictionary { get; set; }

        /// <summary>
        /// Any data associated with a request body.
        /// </summary>
        public Object Data { get; set; }

        /// <summary>
        /// Constructs a new instance of <see cref="RequestOptions"/>
        /// </summary>
        public RequestOptions()
        {
            PathParameters = new Dictionary<string, string>();
            QueryParameters = new Multimap<string, string>();
            HeaderParameters = new Multimap<string, string>();
            FormParameters = new Dictionary<string, string>();
            FileParameters = new Dictionary<string, Stream>();
            Cookies = new List<Cookie>();
        }
    }
}
