/**
 * FactSet Global Prices API
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import Adjust from './model/Adjust';
import Calendar from './model/Calendar';
import CancelledDividend from './model/CancelledDividend';
import CashDividendsResponse from './model/CashDividendsResponse';
import CorporateActionsRequest from './model/CorporateActionsRequest';
import CorporateActionsResponse from './model/CorporateActionsResponse';
import Distribution from './model/Distribution';
import Dividend from './model/Dividend';
import DividendAdjust from './model/DividendAdjust';
import ErrorResponse from './model/ErrorResponse';
import ErrorResponseSubErrors from './model/ErrorResponseSubErrors';
import EventCategory from './model/EventCategory';
import Frequency from './model/Frequency';
import GlobalPricesRequest from './model/GlobalPricesRequest';
import GlobalPricesResponse from './model/GlobalPricesResponse';
import Price from './model/Price';
import Returns from './model/Returns';
import ReturnsRequest from './model/ReturnsRequest';
import ReturnsResponse from './model/ReturnsResponse';
import RightsIssueResponse from './model/RightsIssueResponse';
import SpinoffsResponse from './model/SpinoffsResponse';
import Split from './model/Split';
import SplitsResponse from './model/SplitsResponse';
import StockDistributionsResponse from './model/StockDistributionsResponse';

import CorporateActionsApi from './api/CorporateActionsApi';
import PricesApi from './api/PricesApi';
import ReturnsApi from './api/ReturnsApi';


/**
* FactSet Global Prices client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var factsetglobalprices = require('index'); // See note below*.
* var xxxSvc = new factsetglobalprices.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new factsetglobalprices.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new factsetglobalprices.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new factsetglobalprices.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Adjust model constructor.
     * @property {module:model/Adjust}
     */
    Adjust,

    /**
     * The Calendar model constructor.
     * @property {module:model/Calendar}
     */
    Calendar,

    /**
     * The CancelledDividend model constructor.
     * @property {module:model/CancelledDividend}
     */
    CancelledDividend,

    /**
     * The CashDividendsResponse model constructor.
     * @property {module:model/CashDividendsResponse}
     */
    CashDividendsResponse,

    /**
     * The CorporateActionsRequest model constructor.
     * @property {module:model/CorporateActionsRequest}
     */
    CorporateActionsRequest,

    /**
     * The CorporateActionsResponse model constructor.
     * @property {module:model/CorporateActionsResponse}
     */
    CorporateActionsResponse,

    /**
     * The Distribution model constructor.
     * @property {module:model/Distribution}
     */
    Distribution,

    /**
     * The Dividend model constructor.
     * @property {module:model/Dividend}
     */
    Dividend,

    /**
     * The DividendAdjust model constructor.
     * @property {module:model/DividendAdjust}
     */
    DividendAdjust,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The ErrorResponseSubErrors model constructor.
     * @property {module:model/ErrorResponseSubErrors}
     */
    ErrorResponseSubErrors,

    /**
     * The EventCategory model constructor.
     * @property {module:model/EventCategory}
     */
    EventCategory,

    /**
     * The Frequency model constructor.
     * @property {module:model/Frequency}
     */
    Frequency,

    /**
     * The GlobalPricesRequest model constructor.
     * @property {module:model/GlobalPricesRequest}
     */
    GlobalPricesRequest,

    /**
     * The GlobalPricesResponse model constructor.
     * @property {module:model/GlobalPricesResponse}
     */
    GlobalPricesResponse,

    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price,

    /**
     * The Returns model constructor.
     * @property {module:model/Returns}
     */
    Returns,

    /**
     * The ReturnsRequest model constructor.
     * @property {module:model/ReturnsRequest}
     */
    ReturnsRequest,

    /**
     * The ReturnsResponse model constructor.
     * @property {module:model/ReturnsResponse}
     */
    ReturnsResponse,

    /**
     * The RightsIssueResponse model constructor.
     * @property {module:model/RightsIssueResponse}
     */
    RightsIssueResponse,

    /**
     * The SpinoffsResponse model constructor.
     * @property {module:model/SpinoffsResponse}
     */
    SpinoffsResponse,

    /**
     * The Split model constructor.
     * @property {module:model/Split}
     */
    Split,

    /**
     * The SplitsResponse model constructor.
     * @property {module:model/SplitsResponse}
     */
    SplitsResponse,

    /**
     * The StockDistributionsResponse model constructor.
     * @property {module:model/StockDistributionsResponse}
     */
    StockDistributionsResponse,

    /**
    * The CorporateActionsApi service constructor.
    * @property {module:api/CorporateActionsApi}
    */
    CorporateActionsApi,

    /**
    * The PricesApi service constructor.
    * @property {module:api/PricesApi}
    */
    PricesApi,

    /**
    * The ReturnsApi service constructor.
    * @property {module:api/ReturnsApi}
    */
    ReturnsApi,

};
