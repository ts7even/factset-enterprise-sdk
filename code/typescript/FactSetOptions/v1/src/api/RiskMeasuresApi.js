/**
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AtmImpliedVolatilityRequest from '../model/AtmImpliedVolatilityRequest';
import AtmImpliedVolatilityResponse from '../model/AtmImpliedVolatilityResponse';
import ErrorResponse from '../model/ErrorResponse';
import GreeksRequest from '../model/GreeksRequest';
import GreeksResponse from '../model/GreeksResponse';
import ImpliedVolatilityRequest from '../model/ImpliedVolatilityRequest';
import ImpliedVolatilityResponse from '../model/ImpliedVolatilityResponse';

/**
* RiskMeasures service.
* @module api/RiskMeasuresApi
*/
export default class RiskMeasuresApi {

    /**
    * Constructs a new RiskMeasuresApi. 
    * @alias module:api/RiskMeasuresApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the at-the-money (ATM) implied volatility details for the specified underlying security identifier
     * Returns weighted average of the implied volatilities from the options listed for a specified security identifier.   There are three different methods available for calculating at-the-money implied volatility (ATM IV), which gives a weighted average of the implied volatilities from the options listed on a given stock. They are ATM IV (Filtered), ATM IV (Filtered with Smoothing), and ATM IV (Market). Each of these ATM IV calculations is available for just the calls on a given stock, just the puts, or the composite of both the calls and puts. This at-the-money implied volatility market can calculated for different periods - * One Month * Two Months * Three Months * Four Months * Five Months * Six Months  *For more details regarding ATM Volatility calculations, visit [OA 16276](https://my.apps.factset.com/oa/pages/16276)*    *Currently only OPRA Exchange traded options are supproted* 
     * @param {module:model/AtmImpliedVolatilityRequest} atmImpliedVolatilityRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AtmImpliedVolatilityResponse} and HTTP response
     */
    getOptionsATMImpliedVolatilityForListWithHttpInfo(atmImpliedVolatilityRequest) {
      let postBody = atmImpliedVolatilityRequest;
      // verify the required parameter 'atmImpliedVolatilityRequest' is set
      if (atmImpliedVolatilityRequest === undefined || atmImpliedVolatilityRequest === null) {
        throw new Error("Missing the required parameter 'atmImpliedVolatilityRequest' when calling getOptionsATMImpliedVolatilityForList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = AtmImpliedVolatilityResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/atm-implied-volatility', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the at-the-money (ATM) implied volatility details for the specified underlying security identifier
     * Returns weighted average of the implied volatilities from the options listed for a specified security identifier.   There are three different methods available for calculating at-the-money implied volatility (ATM IV), which gives a weighted average of the implied volatilities from the options listed on a given stock. They are ATM IV (Filtered), ATM IV (Filtered with Smoothing), and ATM IV (Market). Each of these ATM IV calculations is available for just the calls on a given stock, just the puts, or the composite of both the calls and puts. This at-the-money implied volatility market can calculated for different periods - * One Month * Two Months * Three Months * Four Months * Five Months * Six Months  *For more details regarding ATM Volatility calculations, visit [OA 16276](https://my.apps.factset.com/oa/pages/16276)*    *Currently only OPRA Exchange traded options are supproted* 
     * @param {module:model/AtmImpliedVolatilityRequest} atmImpliedVolatilityRequest 
     * @return { Promise.< module:model/AtmImpliedVolatilityResponse > } a Promise, with data of type {@link module:model/AtmImpliedVolatilityResponse }
     */
    getOptionsATMImpliedVolatilityForList(atmImpliedVolatilityRequest) {
      return this.getOptionsATMImpliedVolatilityForListWithHttpInfo(atmImpliedVolatilityRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns all the Greeks details for the specified option identifier
     * Returns all the greeks details for the specified option identifier. Greeks provide quantifiable factors for measuring the option's price sensativity. Greeks include -  |Greek|Description| |---|---| |Delta| The ratio comparing the change in the price of the underlying asset to the corresponding change in the price of a derivative. Sometimes referred to as the \"hedge ratio\". For example, with respect to call options, a delta of 0.7 means that for every $1 the underlying stock increases, the call option will increase by $0.70. Put option deltas, on the other hand, will be negative, because as the underlying security increases, the value of the option will decrease. So a put option with a delta of -0.7 will decrease by $0.70 for every $1 the underlying increases in price. As an in-the-money call option nears expiration, it will approach a delta of 1.00, and as an in-the-money put option nears expiration, it will approach a delta of -1.00.| |Gamma| The rate of change for delta with respect to the underlying asset's price. Mathematically, gamma is the first derivative of delta and is used when trying to gauge the price of an option relative to the amount it is in or out of the money. When the option being measured is deep in or out of the money, gamma is small. When the option is near the money, gamma is largest.| |Rho|The rate at which the price of a derivative changes relative to a change in the risk-free rate of interest. Rho measures the sensitivity of an option or options portfolio to a change in interest rate.| |Theta|A measure of the rate of decline in the value of an option due to the passage of time. Theta can also be referred to as the time decay on the value of an option. If everything is held constant, then the option will lose value as time moves closer to the maturity of the option. For example, if the strike price of an option is $1,150 and theta is 53.80, then in theory the value of the option will drop $53.80 per day. The measure of theta quantifies the risk that time imposes on options as options are only exercisable for a certain period of time.| |Vega|The amount that the price of an option changes compared to a 1% change in volatility. Vega changes when there are large price movements in the underlying asset and vega falls as the option gets closer to maturity. Vega can change even if there is no change in the price of the underlying asset, this would happen if there is a change in expected volatility. For example, if the vega of an option is -96.94 and if implied volatility were to rise by 1% then the option value would fall by $96.94.|  Note   * Each step in the binomial model represents a change in time, therefore, point estimates of the Greeks can be calculated for American options. The following can be used to calculate the Greeks for the Binomial Option Pricing Model (BOPM) pricing model, using the notation fstep,node so f1,1 represents the option price at the first step, top node (nodes are counted at each step starting with 0 at the bottom. See [Constructing the Tree](https://my.apps.factset.com/oa/pages/17735#tree) for more information).    For more detials on calculation methodologies, visit [OA 14933](https://my.apps.factset.com/oa/pages/14933).     *Currently only OPRA Exchange is supproted with exchange ISO \"USA\"* 
     * @param {module:model/GreeksRequest} greeksRequest Greeks Request Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GreeksResponse} and HTTP response
     */
    getOptionsGreeksForListWithHttpInfo(greeksRequest) {
      let postBody = greeksRequest;
      // verify the required parameter 'greeksRequest' is set
      if (greeksRequest === undefined || greeksRequest === null) {
        throw new Error("Missing the required parameter 'greeksRequest' when calling getOptionsGreeksForList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = GreeksResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/greeks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns all the Greeks details for the specified option identifier
     * Returns all the greeks details for the specified option identifier. Greeks provide quantifiable factors for measuring the option's price sensativity. Greeks include -  |Greek|Description| |---|---| |Delta| The ratio comparing the change in the price of the underlying asset to the corresponding change in the price of a derivative. Sometimes referred to as the \"hedge ratio\". For example, with respect to call options, a delta of 0.7 means that for every $1 the underlying stock increases, the call option will increase by $0.70. Put option deltas, on the other hand, will be negative, because as the underlying security increases, the value of the option will decrease. So a put option with a delta of -0.7 will decrease by $0.70 for every $1 the underlying increases in price. As an in-the-money call option nears expiration, it will approach a delta of 1.00, and as an in-the-money put option nears expiration, it will approach a delta of -1.00.| |Gamma| The rate of change for delta with respect to the underlying asset's price. Mathematically, gamma is the first derivative of delta and is used when trying to gauge the price of an option relative to the amount it is in or out of the money. When the option being measured is deep in or out of the money, gamma is small. When the option is near the money, gamma is largest.| |Rho|The rate at which the price of a derivative changes relative to a change in the risk-free rate of interest. Rho measures the sensitivity of an option or options portfolio to a change in interest rate.| |Theta|A measure of the rate of decline in the value of an option due to the passage of time. Theta can also be referred to as the time decay on the value of an option. If everything is held constant, then the option will lose value as time moves closer to the maturity of the option. For example, if the strike price of an option is $1,150 and theta is 53.80, then in theory the value of the option will drop $53.80 per day. The measure of theta quantifies the risk that time imposes on options as options are only exercisable for a certain period of time.| |Vega|The amount that the price of an option changes compared to a 1% change in volatility. Vega changes when there are large price movements in the underlying asset and vega falls as the option gets closer to maturity. Vega can change even if there is no change in the price of the underlying asset, this would happen if there is a change in expected volatility. For example, if the vega of an option is -96.94 and if implied volatility were to rise by 1% then the option value would fall by $96.94.|  Note   * Each step in the binomial model represents a change in time, therefore, point estimates of the Greeks can be calculated for American options. The following can be used to calculate the Greeks for the Binomial Option Pricing Model (BOPM) pricing model, using the notation fstep,node so f1,1 represents the option price at the first step, top node (nodes are counted at each step starting with 0 at the bottom. See [Constructing the Tree](https://my.apps.factset.com/oa/pages/17735#tree) for more information).    For more detials on calculation methodologies, visit [OA 14933](https://my.apps.factset.com/oa/pages/14933).     *Currently only OPRA Exchange is supproted with exchange ISO \"USA\"* 
     * @param {module:model/GreeksRequest} greeksRequest Greeks Request Object
     * @return { Promise.< module:model/GreeksResponse > } a Promise, with data of type {@link module:model/GreeksResponse }
     */
    getOptionsGreeksForList(greeksRequest) {
      return this.getOptionsGreeksForListWithHttpInfo(greeksRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the implied volatility information for the specified option identifier
     * Returns the Implied Volatility for the specified option across European and American contracts. For more details regarding Implied Volatility calculations visit - [OA 14932](https://my.apps.factset.com/oa/pages/14932)  *Currently the following exchanges are not supported for API use cases - CME, CMEE, CBT, CBTE, NYM, NYME* 
     * @param {module:model/ImpliedVolatilityRequest} impliedVolatilityRequest Volatility Request Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ImpliedVolatilityResponse} and HTTP response
     */
    getOptionsVolatilityForListWithHttpInfo(impliedVolatilityRequest) {
      let postBody = impliedVolatilityRequest;
      // verify the required parameter 'impliedVolatilityRequest' is set
      if (impliedVolatilityRequest === undefined || impliedVolatilityRequest === null) {
        throw new Error("Missing the required parameter 'impliedVolatilityRequest' when calling getOptionsVolatilityForList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = ImpliedVolatilityResponse;

      return this.apiClient.callApi(
        '/factset-options/v1/implied-volatility', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the implied volatility information for the specified option identifier
     * Returns the Implied Volatility for the specified option across European and American contracts. For more details regarding Implied Volatility calculations visit - [OA 14932](https://my.apps.factset.com/oa/pages/14932)  *Currently the following exchanges are not supported for API use cases - CME, CMEE, CBT, CBTE, NYM, NYME* 
     * @param {module:model/ImpliedVolatilityRequest} impliedVolatilityRequest Volatility Request Object
     * @return { Promise.< module:model/ImpliedVolatilityResponse > } a Promise, with data of type {@link module:model/ImpliedVolatilityResponse }
     */
    getOptionsVolatilityForList(impliedVolatilityRequest) {
      return this.getOptionsVolatilityForListWithHttpInfo(impliedVolatilityRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}




