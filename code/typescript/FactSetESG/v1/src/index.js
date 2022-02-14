/**
 * FactSet ESG API
 * FactSet ESG (powered by FactSet Truvalue Labs) applies machine learning to uncover risks and opportunities from companies' Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores. The service focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data.<p> FactSet ESG extracts, analyzes, and generates scores from millions of documents each month collected from more than 100,000 data sources in over 13 languages. Sources include news, trade journals, NGOs, watchdog groups, trade blogs, industry reports and social media. Products deliver investable insights by revealing value and risk factors from unstructured data at the speed of current events.</p> 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ErrorResponse from './model/ErrorResponse';
import ErrorResponseSubErrors from './model/ErrorResponseSubErrors';
import Frequency from './model/Frequency';
import SasbRanks from './model/SasbRanks';
import SasbRanksRequest from './model/SasbRanksRequest';
import SasbRanksResponse from './model/SasbRanksResponse';
import SasbScores from './model/SasbScores';
import SasbScoresAll from './model/SasbScoresAll';
import SasbScoresAllRequest from './model/SasbScoresAllRequest';
import SasbScoresAllResponse from './model/SasbScoresAllResponse';
import SasbScoresRequest from './model/SasbScoresRequest';
import SasbScoresResponse from './model/SasbScoresResponse';
import SdgFrequency from './model/SdgFrequency';
import SdgScores from './model/SdgScores';
import SdgScoresRequest from './model/SdgScoresRequest';
import SdgScoresResponse from './model/SdgScoresResponse';
import SASBApi from './api/SASBApi';
import SDGApi from './api/SDGApi';


/**
* FactSet ESG client library for JavaScript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var factsetesg = require('index'); // See note below*.
* var xxxSvc = new factsetesg.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new factsetesg.Yyy(); // Construct a model instance.
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
* var xxxSvc = new factsetesg.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new factsetesg.Yyy(); // Construct a model instance.
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
     * The Frequency model constructor.
     * @property {module:model/Frequency}
     */
    Frequency,

    /**
     * The SasbRanks model constructor.
     * @property {module:model/SasbRanks}
     */
    SasbRanks,

    /**
     * The SasbRanksRequest model constructor.
     * @property {module:model/SasbRanksRequest}
     */
    SasbRanksRequest,

    /**
     * The SasbRanksResponse model constructor.
     * @property {module:model/SasbRanksResponse}
     */
    SasbRanksResponse,

    /**
     * The SasbScores model constructor.
     * @property {module:model/SasbScores}
     */
    SasbScores,

    /**
     * The SasbScoresAll model constructor.
     * @property {module:model/SasbScoresAll}
     */
    SasbScoresAll,

    /**
     * The SasbScoresAllRequest model constructor.
     * @property {module:model/SasbScoresAllRequest}
     */
    SasbScoresAllRequest,

    /**
     * The SasbScoresAllResponse model constructor.
     * @property {module:model/SasbScoresAllResponse}
     */
    SasbScoresAllResponse,

    /**
     * The SasbScoresRequest model constructor.
     * @property {module:model/SasbScoresRequest}
     */
    SasbScoresRequest,

    /**
     * The SasbScoresResponse model constructor.
     * @property {module:model/SasbScoresResponse}
     */
    SasbScoresResponse,

    /**
     * The SdgFrequency model constructor.
     * @property {module:model/SdgFrequency}
     */
    SdgFrequency,

    /**
     * The SdgScores model constructor.
     * @property {module:model/SdgScores}
     */
    SdgScores,

    /**
     * The SdgScoresRequest model constructor.
     * @property {module:model/SdgScoresRequest}
     */
    SdgScoresRequest,

    /**
     * The SdgScoresResponse model constructor.
     * @property {module:model/SdgScoresResponse}
     */
    SdgScoresResponse,

    /**
    * The SASBApi service constructor.
    * @property {module:api/SASBApi}
    */
    SASBApi,

    /**
    * The SDGApi service constructor.
    * @property {module:api/SDGApi}
    */
    SDGApi
};
