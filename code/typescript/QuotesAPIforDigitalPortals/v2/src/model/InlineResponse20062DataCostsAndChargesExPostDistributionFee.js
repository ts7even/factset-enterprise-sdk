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
import InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit from './InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit';

/**
 * The InlineResponse20062DataCostsAndChargesExPostDistributionFee model module.
 * @module model/InlineResponse20062DataCostsAndChargesExPostDistributionFee
 * @version 0.9.1
 */
class InlineResponse20062DataCostsAndChargesExPostDistributionFee {
    /**
     * Constructs a new <code>InlineResponse20062DataCostsAndChargesExPostDistributionFee</code>.
     * Annualized ex post distribution fee of the investment product. This fee is included in the total ex post ongoing cost.
     * @alias module:model/InlineResponse20062DataCostsAndChargesExPostDistributionFee
     */
    constructor() { 
        
        InlineResponse20062DataCostsAndChargesExPostDistributionFee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataCostsAndChargesExPostDistributionFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataCostsAndChargesExPostDistributionFee} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataCostsAndChargesExPostDistributionFee} The populated <code>InlineResponse20062DataCostsAndChargesExPostDistributionFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataCostsAndChargesExPostDistributionFee();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('valueUnit')) {
                obj['valueUnit'] = InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit.constructFromObject(data['valueUnit']);
            }
        }
        return obj;
    }


}

/**
 * Value of the attribute.
 * @member {Number} value
 */
InlineResponse20062DataCostsAndChargesExPostDistributionFee.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit} valueUnit
 */
InlineResponse20062DataCostsAndChargesExPostDistributionFee.prototype['valueUnit'] = undefined;






export default InlineResponse20062DataCostsAndChargesExPostDistributionFee;

