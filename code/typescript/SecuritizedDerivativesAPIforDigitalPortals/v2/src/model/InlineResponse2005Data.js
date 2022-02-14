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
import InlineResponse2005DataBonusLevel from './InlineResponse2005DataBonusLevel';
import InlineResponse2005DataCap from './InlineResponse2005DataCap';
import InlineResponse2005DataCapitalGuarantee from './InlineResponse2005DataCapitalGuarantee';
import InlineResponse2005DataCapitalProtection from './InlineResponse2005DataCapitalProtection';
import InlineResponse2005DataCategorization from './InlineResponse2005DataCategorization';
import InlineResponse2005DataCollateralized from './InlineResponse2005DataCollateralized';
import InlineResponse2005DataConstantLeverage from './InlineResponse2005DataConstantLeverage';
import InlineResponse2005DataCouponTriggerLevel from './InlineResponse2005DataCouponTriggerLevel';
import InlineResponse2005DataCurrentInterestRate from './InlineResponse2005DataCurrentInterestRate';
import InlineResponse2005DataExercise from './InlineResponse2005DataExercise';
import InlineResponse2005DataIssuer from './InlineResponse2005DataIssuer';
import InlineResponse2005DataKeyFigures from './InlineResponse2005DataKeyFigures';
import InlineResponse2005DataKnockIn from './InlineResponse2005DataKnockIn';
import InlineResponse2005DataKnockOut from './InlineResponse2005DataKnockOut';
import InlineResponse2005DataLifeCycle from './InlineResponse2005DataLifeCycle';
import InlineResponse2005DataLifeCycleMaturityPerpetual from './InlineResponse2005DataLifeCycleMaturityPerpetual';
import InlineResponse2005DataLockIn from './InlineResponse2005DataLockIn';
import InlineResponse2005DataLockOut from './InlineResponse2005DataLockOut';
import InlineResponse2005DataMarket from './InlineResponse2005DataMarket';
import InlineResponse2005DataNominalCurrency from './InlineResponse2005DataNominalCurrency';
import InlineResponse2005DataParticipation from './InlineResponse2005DataParticipation';
import InlineResponse2005DataPerformance from './InlineResponse2005DataPerformance';
import InlineResponse2005DataRangeKnockOut from './InlineResponse2005DataRangeKnockOut';
import InlineResponse2005DataSettlement from './InlineResponse2005DataSettlement';
import InlineResponse2005DataStrike from './InlineResponse2005DataStrike';
import InlineResponse2005DataUnderlying from './InlineResponse2005DataUnderlying';
import InlineResponse2005DataVolatility from './InlineResponse2005DataVolatility';

/**
 * The InlineResponse2005Data model module.
 * @module model/InlineResponse2005Data
 * @version 0.9.1
 */
class InlineResponse2005Data {
    /**
     * Constructs a new <code>InlineResponse2005Data</code>.
     * Possible values and value ranges of the parameters.
     * @alias module:model/InlineResponse2005Data
     */
    constructor() { 
        
        InlineResponse2005Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005Data} The populated <code>InlineResponse2005Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005Data();

            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('categorization')) {
                obj['categorization'] = InlineResponse2005DataCategorization.constructFromObject(data['categorization']);
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = ApiClient.convertToType(data['market'], [InlineResponse2005DataMarket]);
            }
            if (data.hasOwnProperty('lifeCycle')) {
                obj['lifeCycle'] = InlineResponse2005DataLifeCycle.constructFromObject(data['lifeCycle']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = InlineResponse2005DataIssuer.constructFromObject(data['issuer']);
            }
            if (data.hasOwnProperty('exercise')) {
                obj['exercise'] = InlineResponse2005DataExercise.constructFromObject(data['exercise']);
            }
            if (data.hasOwnProperty('settlement')) {
                obj['settlement'] = ApiClient.convertToType(data['settlement'], [InlineResponse2005DataSettlement]);
            }
            if (data.hasOwnProperty('collateralized')) {
                obj['collateralized'] = ApiClient.convertToType(data['collateralized'], [InlineResponse2005DataCollateralized]);
            }
            if (data.hasOwnProperty('quanto')) {
                obj['quanto'] = ApiClient.convertToType(data['quanto'], [InlineResponse2005DataLifeCycleMaturityPerpetual]);
            }
            if (data.hasOwnProperty('capitalProtection')) {
                obj['capitalProtection'] = InlineResponse2005DataCapitalProtection.constructFromObject(data['capitalProtection']);
            }
            if (data.hasOwnProperty('underlying')) {
                obj['underlying'] = InlineResponse2005DataUnderlying.constructFromObject(data['underlying']);
            }
            if (data.hasOwnProperty('strike')) {
                obj['strike'] = InlineResponse2005DataStrike.constructFromObject(data['strike']);
            }
            if (data.hasOwnProperty('bonusLevel')) {
                obj['bonusLevel'] = InlineResponse2005DataBonusLevel.constructFromObject(data['bonusLevel']);
            }
            if (data.hasOwnProperty('cap')) {
                obj['cap'] = InlineResponse2005DataCap.constructFromObject(data['cap']);
            }
            if (data.hasOwnProperty('knockOut')) {
                obj['knockOut'] = InlineResponse2005DataKnockOut.constructFromObject(data['knockOut']);
            }
            if (data.hasOwnProperty('knockIn')) {
                obj['knockIn'] = InlineResponse2005DataKnockIn.constructFromObject(data['knockIn']);
            }
            if (data.hasOwnProperty('lockOut')) {
                obj['lockOut'] = InlineResponse2005DataLockOut.constructFromObject(data['lockOut']);
            }
            if (data.hasOwnProperty('lockIn')) {
                obj['lockIn'] = InlineResponse2005DataLockIn.constructFromObject(data['lockIn']);
            }
            if (data.hasOwnProperty('capitalGuarantee')) {
                obj['capitalGuarantee'] = InlineResponse2005DataCapitalGuarantee.constructFromObject(data['capitalGuarantee']);
            }
            if (data.hasOwnProperty('couponTriggerLevel')) {
                obj['couponTriggerLevel'] = InlineResponse2005DataCouponTriggerLevel.constructFromObject(data['couponTriggerLevel']);
            }
            if (data.hasOwnProperty('rangeKnockOut')) {
                obj['rangeKnockOut'] = InlineResponse2005DataRangeKnockOut.constructFromObject(data['rangeKnockOut']);
            }
            if (data.hasOwnProperty('participation')) {
                obj['participation'] = ApiClient.convertToType(data['participation'], [InlineResponse2005DataParticipation]);
            }
            if (data.hasOwnProperty('constantLeverage')) {
                obj['constantLeverage'] = ApiClient.convertToType(data['constantLeverage'], [InlineResponse2005DataConstantLeverage]);
            }
            if (data.hasOwnProperty('nominalCurrency')) {
                obj['nominalCurrency'] = ApiClient.convertToType(data['nominalCurrency'], [InlineResponse2005DataNominalCurrency]);
            }
            if (data.hasOwnProperty('currentInterestRate')) {
                obj['currentInterestRate'] = InlineResponse2005DataCurrentInterestRate.constructFromObject(data['currentInterestRate']);
            }
            if (data.hasOwnProperty('keyFigures')) {
                obj['keyFigures'] = InlineResponse2005DataKeyFigures.constructFromObject(data['keyFigures']);
            }
            if (data.hasOwnProperty('performance')) {
                obj['performance'] = InlineResponse2005DataPerformance.constructFromObject(data['performance']);
            }
            if (data.hasOwnProperty('volatility')) {
                obj['volatility'] = InlineResponse2005DataVolatility.constructFromObject(data['volatility']);
            }
        }
        return obj;
    }


}

/**
 * Number of notations that satisfy the request parameters, hence have been used to retrieve the possible values and value ranges.
 * @member {Number} totalCount
 */
InlineResponse2005Data.prototype['totalCount'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCategorization} categorization
 */
InlineResponse2005Data.prototype['categorization'] = undefined;

/**
 * List of market identifiers.
 * @member {Array.<module:model/InlineResponse2005DataMarket>} market
 */
InlineResponse2005Data.prototype['market'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataLifeCycle} lifeCycle
 */
InlineResponse2005Data.prototype['lifeCycle'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataIssuer} issuer
 */
InlineResponse2005Data.prototype['issuer'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataExercise} exercise
 */
InlineResponse2005Data.prototype['exercise'] = undefined;

/**
 * Values related to the settlement. It concerns the fulfillment of the issuer's contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.
 * @member {Array.<module:model/InlineResponse2005DataSettlement>} settlement
 */
InlineResponse2005Data.prototype['settlement'] = undefined;

/**
 * Indicates whether securitized derivatives with and without protection against an issuer default are among the results. An example for such a collateralization is the COSI flag provided by SIX Swiss Exchange.
 * @member {Array.<module:model/InlineResponse2005DataCollateralized>} collateralized
 */
InlineResponse2005Data.prototype['collateralized'] = undefined;

/**
 * Indicates whether quanto and non-quanto securitized derivatives are among the results. Quanto means that the risk of exchange rate fluctuations between the value unit of the underlying and the value unit of the cash flows is hedged.
 * @member {Array.<module:model/InlineResponse2005DataLifeCycleMaturityPerpetual>} quanto
 */
InlineResponse2005Data.prototype['quanto'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCapitalProtection} capitalProtection
 */
InlineResponse2005Data.prototype['capitalProtection'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataUnderlying} underlying
 */
InlineResponse2005Data.prototype['underlying'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataStrike} strike
 */
InlineResponse2005Data.prototype['strike'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataBonusLevel} bonusLevel
 */
InlineResponse2005Data.prototype['bonusLevel'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCap} cap
 */
InlineResponse2005Data.prototype['cap'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataKnockOut} knockOut
 */
InlineResponse2005Data.prototype['knockOut'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataKnockIn} knockIn
 */
InlineResponse2005Data.prototype['knockIn'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataLockOut} lockOut
 */
InlineResponse2005Data.prototype['lockOut'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataLockIn} lockIn
 */
InlineResponse2005Data.prototype['lockIn'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCapitalGuarantee} capitalGuarantee
 */
InlineResponse2005Data.prototype['capitalGuarantee'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCouponTriggerLevel} couponTriggerLevel
 */
InlineResponse2005Data.prototype['couponTriggerLevel'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataRangeKnockOut} rangeKnockOut
 */
InlineResponse2005Data.prototype['rangeKnockOut'] = undefined;

/**
 * Values of the participation direction of factor certificates at the level movement of its effective underlying.
 * @member {Array.<module:model/InlineResponse2005DataParticipation>} participation
 */
InlineResponse2005Data.prototype['participation'] = undefined;

/**
 * Values of the constant leverage of factor certificates.
 * @member {Array.<module:model/InlineResponse2005DataConstantLeverage>} constantLeverage
 */
InlineResponse2005Data.prototype['constantLeverage'] = undefined;

/**
 * Values of the main currency of the nominal and of the coupon payments. See endpoint `/basic/valueUnit/currency/main/list` for possible values.
 * @member {Array.<module:model/InlineResponse2005DataNominalCurrency>} nominalCurrency
 */
InlineResponse2005Data.prototype['nominalCurrency'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataCurrentInterestRate} currentInterestRate
 */
InlineResponse2005Data.prototype['currentInterestRate'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataKeyFigures} keyFigures
 */
InlineResponse2005Data.prototype['keyFigures'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataPerformance} performance
 */
InlineResponse2005Data.prototype['performance'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataVolatility} volatility
 */
InlineResponse2005Data.prototype['volatility'] = undefined;






export default InlineResponse2005Data;

