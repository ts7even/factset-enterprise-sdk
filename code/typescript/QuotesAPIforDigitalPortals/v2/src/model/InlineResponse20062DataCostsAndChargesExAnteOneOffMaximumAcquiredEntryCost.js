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
 * The InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost model module.
 * @module model/InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost
 * @version 0.9.1
 */
class InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost {
    /**
     * Constructs a new <code>InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost</code>.
     * Maximum ex ante one-off entry cost acquired to a fund (e.g. subscription fee). This type of cost is applicable to funds only.
     * @alias module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost
     */
    constructor() { 
        
        InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost} The populated <code>InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost();

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
InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit} valueUnit
 */
InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost.prototype['valueUnit'] = undefined;






export default InlineResponse20062DataCostsAndChargesExAnteOneOffMaximumAcquiredEntryCost;

