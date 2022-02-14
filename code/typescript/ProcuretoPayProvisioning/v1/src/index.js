/**
 * FactSet Procure to Pay API
 * Allows for Provisioning and Entitlement of FactSet accounts.     Authentication is provided via FactSet's [API Key System](https://developer.factset.com/authentication)    Please note that the on-page \"Try it out\" features do not function. You must authorize against our API and make requests directly againt the endpoints.    
 *
 * The version of the OpenAPI document: 1S
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import CancelIndividual from './model/CancelIndividual';
import CreateIndividual from './model/CreateIndividual';
import GetIndividual from './model/GetIndividual';
import InlineResponse202 from './model/InlineResponse202';
import ManageProductIds from './model/ManageProductIds';
import ModifyIndividual from './model/ModifyIndividual';
import TransactionStatus from './model/TransactionStatus';
import EntitlementManagementApi from './api/EntitlementManagementApi';
import OrderStatusApi from './api/OrderStatusApi';
import UserManagementApi from './api/UserManagementApi';


/**
* Procure to Pay: Provisioning client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var procuretopayprovisioning = require('index'); // See note below*.
* var xxxSvc = new procuretopayprovisioning.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new procuretopayprovisioning.Yyy(); // Construct a model instance.
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
* var xxxSvc = new procuretopayprovisioning.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new procuretopayprovisioning.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.9.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CancelIndividual model constructor.
     * @property {module:model/CancelIndividual}
     */
    CancelIndividual,

    /**
     * The CreateIndividual model constructor.
     * @property {module:model/CreateIndividual}
     */
    CreateIndividual,

    /**
     * The GetIndividual model constructor.
     * @property {module:model/GetIndividual}
     */
    GetIndividual,

    /**
     * The InlineResponse202 model constructor.
     * @property {module:model/InlineResponse202}
     */
    InlineResponse202,

    /**
     * The ManageProductIds model constructor.
     * @property {module:model/ManageProductIds}
     */
    ManageProductIds,

    /**
     * The ModifyIndividual model constructor.
     * @property {module:model/ModifyIndividual}
     */
    ModifyIndividual,

    /**
     * The TransactionStatus model constructor.
     * @property {module:model/TransactionStatus}
     */
    TransactionStatus,

    /**
    * The EntitlementManagementApi service constructor.
    * @property {module:api/EntitlementManagementApi}
    */
    EntitlementManagementApi,

    /**
    * The OrderStatusApi service constructor.
    * @property {module:api/OrderStatusApi}
    */
    OrderStatusApi,

    /**
    * The UserManagementApi service constructor.
    * @property {module:api/UserManagementApi}
    */
    UserManagementApi
};
