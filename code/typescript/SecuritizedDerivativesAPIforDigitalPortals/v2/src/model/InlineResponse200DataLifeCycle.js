/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse200DataLifeCycleIntradayActivation from './InlineResponse200DataLifeCycleIntradayActivation';
import InlineResponse200DataLifeCycleMaturity from './InlineResponse200DataLifeCycleMaturity';
import InlineResponse200DataLifeCycleSubscriptionPeriod from './InlineResponse200DataLifeCycleSubscriptionPeriod';
import InlineResponse200DataLifeCycleTradingPeriod from './InlineResponse200DataLifeCycleTradingPeriod';

/**
 * The InlineResponse200DataLifeCycle model module.
 * @module model/InlineResponse200DataLifeCycle
 * @version 0.9.0
 */
class InlineResponse200DataLifeCycle {
    /**
     * Constructs a new <code>InlineResponse200DataLifeCycle</code>.
     * Important dates of the instrument.
     * @alias module:model/InlineResponse200DataLifeCycle
     */
    constructor() { 
        
        InlineResponse200DataLifeCycle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataLifeCycle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataLifeCycle} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataLifeCycle} The populated <code>InlineResponse200DataLifeCycle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataLifeCycle();

            if (data.hasOwnProperty('subscriptionPeriod')) {
                obj['subscriptionPeriod'] = InlineResponse200DataLifeCycleSubscriptionPeriod.constructFromObject(data['subscriptionPeriod']);
            }
            if (data.hasOwnProperty('valutaIssue')) {
                obj['valutaIssue'] = ApiClient.convertToType(data['valutaIssue'], 'Date');
            }
            if (data.hasOwnProperty('initialFixing')) {
                obj['initialFixing'] = ApiClient.convertToType(data['initialFixing'], 'Date');
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = ApiClient.convertToType(data['issue'], 'Date');
            }
            if (data.hasOwnProperty('intradayActivation')) {
                obj['intradayActivation'] = InlineResponse200DataLifeCycleIntradayActivation.constructFromObject(data['intradayActivation']);
            }
            if (data.hasOwnProperty('tradingPeriod')) {
                obj['tradingPeriod'] = InlineResponse200DataLifeCycleTradingPeriod.constructFromObject(data['tradingPeriod']);
            }
            if (data.hasOwnProperty('startExercisePeriod')) {
                obj['startExercisePeriod'] = ApiClient.convertToType(data['startExercisePeriod'], 'Date');
            }
            if (data.hasOwnProperty('valuation')) {
                obj['valuation'] = ApiClient.convertToType(data['valuation'], 'Date');
            }
            if (data.hasOwnProperty('maturity')) {
                obj['maturity'] = InlineResponse200DataLifeCycleMaturity.constructFromObject(data['maturity']);
            }
            if (data.hasOwnProperty('repayment')) {
                obj['repayment'] = ApiClient.convertToType(data['repayment'], 'Date');
            }
            if (data.hasOwnProperty('cancellation')) {
                obj['cancellation'] = ApiClient.convertToType(data['cancellation'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse200DataLifeCycleSubscriptionPeriod} subscriptionPeriod
 */
InlineResponse200DataLifeCycle.prototype['subscriptionPeriod'] = undefined;

/**
 * Date by which the issuer requires receiving the purchase price for a newly issued product purchased during the subscription period.
 * @member {Date} valutaIssue
 */
InlineResponse200DataLifeCycle.prototype['valutaIssue'] = undefined;

/**
 * Date of the initial fixing.
 * @member {Date} initialFixing
 */
InlineResponse200DataLifeCycle.prototype['initialFixing'] = undefined;

/**
 * Date of the issue.
 * @member {Date} issue
 */
InlineResponse200DataLifeCycle.prototype['issue'] = undefined;

/**
 * @member {module:model/InlineResponse200DataLifeCycleIntradayActivation} intradayActivation
 */
InlineResponse200DataLifeCycle.prototype['intradayActivation'] = undefined;

/**
 * @member {module:model/InlineResponse200DataLifeCycleTradingPeriod} tradingPeriod
 */
InlineResponse200DataLifeCycle.prototype['tradingPeriod'] = undefined;

/**
 * Date of the start of the exercise period, which ends with the valuation.
 * @member {Date} startExercisePeriod
 */
InlineResponse200DataLifeCycle.prototype['startExercisePeriod'] = undefined;

/**
 * Date of the valuation.
 * @member {Date} valuation
 */
InlineResponse200DataLifeCycle.prototype['valuation'] = undefined;

/**
 * @member {module:model/InlineResponse200DataLifeCycleMaturity} maturity
 */
InlineResponse200DataLifeCycle.prototype['maturity'] = undefined;

/**
 * Date of the repayment.
 * @member {Date} repayment
 */
InlineResponse200DataLifeCycle.prototype['repayment'] = undefined;

/**
 * Date of the cancellation day defined by the issuer.
 * @member {Date} cancellation
 */
InlineResponse200DataLifeCycle.prototype['cancellation'] = undefined;






export default InlineResponse200DataLifeCycle;
