/**
 * Exchange DataFeed Data Model API
 * FactSet’s Exchange DataFeed products provide access to consolidated real-time and delayed global exchange data. Proprietary technology normalizes over 250 global venues, 18+ million instruments, and 150+ data fields. Asset types integrated include equities, futures, options, warrants, fixed income, mutual funds, ETFs, indices, commodities, and FX rates. Innovative technology ensures reliability and provides scalability that allows clients to make requests based on a symbol list or an exchange. Reduce development time by powering proprietary and third-party applications with exchange data from a unified data model. <p>The Exchange DataFeed Data Model API provides mappings for enumerations used in our Real-Time DataFeed products and should be used in conjunction with the DataFeed Data Model documentation available for each product. <p>The initial beta version of this API is limited to include mapping tables for the product codes only.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import ErrorResponse from './model/ErrorResponse';
import RTDataModelProducts from './model/RTDataModelProducts';

import FactSetProductCodesApi from './api/FactSetProductCodesApi';


/**
* Exchange DataFeed Data Model client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var exchangedatafeeddatamodel = require('index'); // See note below*.
* var xxxSvc = new exchangedatafeeddatamodel.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new exchangedatafeeddatamodel.Yyy(); // Construct a model instance.
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
* var xxxSvc = new exchangedatafeeddatamodel.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new exchangedatafeeddatamodel.Yyy(); // Construct a model instance.
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
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The RTDataModelProducts model constructor.
     * @property {module:model/RTDataModelProducts}
     */
    RTDataModelProducts,

    /**
    * The FactSetProductCodesApi service constructor.
    * @property {module:api/FactSetProductCodesApi}
    */
    FactSetProductCodesApi,

};