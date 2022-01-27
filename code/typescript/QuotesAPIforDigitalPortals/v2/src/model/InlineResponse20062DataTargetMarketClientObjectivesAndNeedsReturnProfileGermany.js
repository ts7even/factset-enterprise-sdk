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
 * The InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany model module.
 * @module model/InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany
 * @version 0.9.0
 */
class InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany {
    /**
     * Constructs a new <code>InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany</code>.
     * Specific indicators for Germany.
     * @alias module:model/InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany
     */
    constructor() { 
        
        InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany} The populated <code>InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany();

            if (data.hasOwnProperty('pensionScheme')) {
                obj['pensionScheme'] = ApiClient.convertToType(data['pensionScheme'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates whether the investment product is suitable for investors with the return profile \"pension scheme\". This regulatory requirement is available only in Germany (\"Riester Rente\").
 * @member {module:model/InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany.PensionSchemeEnum} pensionScheme
 */
InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany.prototype['pensionScheme'] = undefined;





/**
 * Allowed values for the <code>pensionScheme</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany['PensionSchemeEnum'] = {

    /**
     * value: "yes"
     * @const
     */
    "yes": "yes",

    /**
     * value: "no"
     * @const
     */
    "no": "no",

    /**
     * value: "neutral"
     * @const
     */
    "neutral": "neutral",

    /**
     * value: "feedback"
     * @const
     */
    "feedback": "feedback"
};



export default InlineResponse20062DataTargetMarketClientObjectivesAndNeedsReturnProfileGermany;
