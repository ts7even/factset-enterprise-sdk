/**
 * Event Calendar API
 * Retrieves events for companies
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import CompanyEventRequest from './model/CompanyEventRequest';
import CompanyEventRequestData from './model/CompanyEventRequestData';
import CompanyEventRequestDataDate from './model/CompanyEventRequestDataDate';
import CompanyEventRequestDataUniverse from './model/CompanyEventRequestDataUniverse';
import CompanyEventResponse from './model/CompanyEventResponse';
import CompanyEventResponseData from './model/CompanyEventResponseData';
import Error from './model/Error';
import ErrorResponse from './model/ErrorResponse';

import CompanyApi from './api/CompanyApi';


/**
* Event Calendar client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var eventcalendar = require('index'); // See note below*.
* var xxxSvc = new eventcalendar.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new eventcalendar.Yyy(); // Construct a model instance.
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
* var xxxSvc = new eventcalendar.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new eventcalendar.Yyy(); // Construct a model instance.
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
     * The CompanyEventRequest model constructor.
     * @property {module:model/CompanyEventRequest}
     */
    CompanyEventRequest,

    /**
     * The CompanyEventRequestData model constructor.
     * @property {module:model/CompanyEventRequestData}
     */
    CompanyEventRequestData,

    /**
     * The CompanyEventRequestDataDate model constructor.
     * @property {module:model/CompanyEventRequestDataDate}
     */
    CompanyEventRequestDataDate,

    /**
     * The CompanyEventRequestDataUniverse model constructor.
     * @property {module:model/CompanyEventRequestDataUniverse}
     */
    CompanyEventRequestDataUniverse,

    /**
     * The CompanyEventResponse model constructor.
     * @property {module:model/CompanyEventResponse}
     */
    CompanyEventResponse,

    /**
     * The CompanyEventResponseData model constructor.
     * @property {module:model/CompanyEventResponseData}
     */
    CompanyEventResponseData,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
    * The CompanyApi service constructor.
    * @property {module:api/CompanyApi}
    */
    CompanyApi,

};