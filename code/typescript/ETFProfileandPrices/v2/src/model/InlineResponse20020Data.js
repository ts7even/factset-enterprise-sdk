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

/**
 * The InlineResponse20020Data model module.
 * @module model/InlineResponse20020Data
 * @version 0.9.1
 */
class InlineResponse20020Data {
    /**
     * Constructs a new <code>InlineResponse20020Data</code>.
     * Structure.
     * @alias module:model/InlineResponse20020Data
     */
    constructor() { 
        
        InlineResponse20020Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20020Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020Data} The populated <code>InlineResponse20020Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20020Data();

            if (data.hasOwnProperty('isEtn')) {
                obj['isEtn'] = ApiClient.convertToType(data['isEtn'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('isActivelyManaged')) {
                obj['isActivelyManaged'] = ApiClient.convertToType(data['isActivelyManaged'], 'Boolean');
            }
            if (data.hasOwnProperty('backing')) {
                obj['backing'] = ApiClient.convertToType(data['backing'], 'String');
            }
            if (data.hasOwnProperty('syntheticType')) {
                obj['syntheticType'] = ApiClient.convertToType(data['syntheticType'], 'String');
            }
            if (data.hasOwnProperty('legalStructure')) {
                obj['legalStructure'] = ApiClient.convertToType(data['legalStructure'], 'String');
            }
            if (data.hasOwnProperty('isUcitsCompliant')) {
                obj['isUcitsCompliant'] = ApiClient.convertToType(data['isUcitsCompliant'], 'Boolean');
            }
            if (data.hasOwnProperty('isHoldingsTransparent')) {
                obj['isHoldingsTransparent'] = ApiClient.convertToType(data['isHoldingsTransparent'], 'Boolean');
            }
            if (data.hasOwnProperty('portfolioDisclosure')) {
                obj['portfolioDisclosure'] = ApiClient.convertToType(data['portfolioDisclosure'], 'String');
            }
            if (data.hasOwnProperty('cashFlowFrequency')) {
                obj['cashFlowFrequency'] = ApiClient.convertToType(data['cashFlowFrequency'], 'String');
            }
            if (data.hasOwnProperty('isEligibleForRegisteredAccounts')) {
                obj['isEligibleForRegisteredAccounts'] = ApiClient.convertToType(data['isEligibleForRegisteredAccounts'], 'Boolean');
            }
            if (data.hasOwnProperty('isDripEligible')) {
                obj['isDripEligible'] = ApiClient.convertToType(data['isDripEligible'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Flags exchange-traded notes. This data is available for all the regions.
 * @member {Boolean} isEtn
 */
InlineResponse20020Data.prototype['isEtn'] = undefined;

/**
 * Describes the legal structure of the ETP, text and standardized value available This data is available for all the regions.
 * @member {String} type
 */
InlineResponse20020Data.prototype['type'] = undefined;

/**
 * Flags ETPs that are actively managed as per SEC guidelines. This data is available for all the regions.
 * @member {Boolean} isActivelyManaged
 */
InlineResponse20020Data.prototype['isActivelyManaged'] = undefined;

/**
 * Describes whether the ETP holds underlying securities or uses derivatives to gain its desired exposure, text and standardized value available.  This data is available for all the regions.
 * @member {String} backing
 */
InlineResponse20020Data.prototype['backing'] = undefined;

/**
 * Indicates whether the synthetic ETP is “unfunded” (collateral or substitute basket of securities for the swap agreement is owned by ETP), or “funded” (collateral for swap agreement is held by a custodian in the name of the ETP or in the name of the counterparty, pledged to the ETP issuer), text and standardized value available. This data is available for Europe only.
 * @member {String} syntheticType
 */
InlineResponse20020Data.prototype['syntheticType'] = undefined;

/**
 * The organizational structure of the ETP, text and standardized value available. This data is available for all the regions.
 * @member {String} legalStructure
 */
InlineResponse20020Data.prototype['legalStructure'] = undefined;

/**
 * The counterparty for derivative exposure for synthetic ETPs. This data is available for all the regions.
 * @member {Boolean} isUcitsCompliant
 */
InlineResponse20020Data.prototype['isUcitsCompliant'] = undefined;

/**
 * States whether or not the ETP's issuer discloses its positions on its website daily. This data is available for all the regions.
 * @member {Boolean} isHoldingsTransparent
 */
InlineResponse20020Data.prototype['isHoldingsTransparent'] = undefined;

/**
 * The frequency of an issuer's disclosure of all ETP holdings on its website, text and standardized value available. This data is available for all the regions.
 * @member {String} portfolioDisclosure
 */
InlineResponse20020Data.prototype['portfolioDisclosure'] = undefined;

/**
 * States how often the ETP makes regular distributions, text and standardized value available. This data is available only for US and Europe.
 * @member {String} cashFlowFrequency
 */
InlineResponse20020Data.prototype['cashFlowFrequency'] = undefined;

/**
 * Product can be held in tax-advantaged investment accounts. This data is available for Canada only.
 * @member {Boolean} isEligibleForRegisteredAccounts
 */
InlineResponse20020Data.prototype['isEligibleForRegisteredAccounts'] = undefined;

/**
 * Ability to have dividends reinvested. This data is available for Canada only.
 * @member {Boolean} isDripEligible
 */
InlineResponse20020Data.prototype['isDripEligible'] = undefined;






export default InlineResponse20020Data;

