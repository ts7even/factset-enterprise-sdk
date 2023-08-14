/**
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import ClientErrorResponse from './model/ClientErrorResponse';
import EMSCancelOrder from './model/EMSCancelOrder';
import EMSCancelOrders from './model/EMSCancelOrders';
import EMSCancelOrdersRoot from './model/EMSCancelOrdersRoot';
import EMSOrder from './model/EMSOrder';
import EMSOrderMetadata from './model/EMSOrderMetadata';
import EMSOrders from './model/EMSOrders';
import EMSOrdersCreateResponse from './model/EMSOrdersCreateResponse';
import EMSOrdersCreateResponseRoot from './model/EMSOrdersCreateResponseRoot';
import EMSOrdersRoot from './model/EMSOrdersRoot';
import EMSReplaceOrder from './model/EMSReplaceOrder';
import EMSReplaceOrders from './model/EMSReplaceOrders';
import EMSReplaceOrdersRoot from './model/EMSReplaceOrdersRoot';
import Error from './model/Error';
import ErrorSource from './model/ErrorSource';
import Instrument from './model/Instrument';
import TimeInForce from './model/TimeInForce';

import OrdersApi from './api/OrdersApi';


/**
* FactSet Trading client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var factsettrading = require('index'); // See note below*.
* var xxxSvc = new factsettrading.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new factsettrading.Yyy(); // Construct a model instance.
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
* var xxxSvc = new factsettrading.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new factsettrading.Yyy(); // Construct a model instance.
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
     * The ClientErrorResponse model constructor.
     * @property {module:model/ClientErrorResponse}
     */
    ClientErrorResponse,

    /**
     * The EMSCancelOrder model constructor.
     * @property {module:model/EMSCancelOrder}
     */
    EMSCancelOrder,

    /**
     * The EMSCancelOrders model constructor.
     * @property {module:model/EMSCancelOrders}
     */
    EMSCancelOrders,

    /**
     * The EMSCancelOrdersRoot model constructor.
     * @property {module:model/EMSCancelOrdersRoot}
     */
    EMSCancelOrdersRoot,

    /**
     * The EMSOrder model constructor.
     * @property {module:model/EMSOrder}
     */
    EMSOrder,

    /**
     * The EMSOrderMetadata model constructor.
     * @property {module:model/EMSOrderMetadata}
     */
    EMSOrderMetadata,

    /**
     * The EMSOrders model constructor.
     * @property {module:model/EMSOrders}
     */
    EMSOrders,

    /**
     * The EMSOrdersCreateResponse model constructor.
     * @property {module:model/EMSOrdersCreateResponse}
     */
    EMSOrdersCreateResponse,

    /**
     * The EMSOrdersCreateResponseRoot model constructor.
     * @property {module:model/EMSOrdersCreateResponseRoot}
     */
    EMSOrdersCreateResponseRoot,

    /**
     * The EMSOrdersRoot model constructor.
     * @property {module:model/EMSOrdersRoot}
     */
    EMSOrdersRoot,

    /**
     * The EMSReplaceOrder model constructor.
     * @property {module:model/EMSReplaceOrder}
     */
    EMSReplaceOrder,

    /**
     * The EMSReplaceOrders model constructor.
     * @property {module:model/EMSReplaceOrders}
     */
    EMSReplaceOrders,

    /**
     * The EMSReplaceOrdersRoot model constructor.
     * @property {module:model/EMSReplaceOrdersRoot}
     */
    EMSReplaceOrdersRoot,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ErrorSource model constructor.
     * @property {module:model/ErrorSource}
     */
    ErrorSource,

    /**
     * The Instrument model constructor.
     * @property {module:model/Instrument}
     */
    Instrument,

    /**
     * The TimeInForce model constructor.
     * @property {module:model/TimeInForce}
     */
    TimeInForce,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi,

};