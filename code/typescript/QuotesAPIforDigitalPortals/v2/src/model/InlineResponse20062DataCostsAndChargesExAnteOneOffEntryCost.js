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
 * The InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost model module.
 * @module model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost
 * @version 0.9.0
 */
class InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost {
    /**
     * Constructs a new <code>InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost</code>.
     * One-off ex ante entry cost of the investment product.
     * @alias module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost
     */
    constructor() { 
        
        InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost} The populated <code>InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost();

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
InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit} valueUnit
 */
InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost.prototype['valueUnit'] = undefined;






export default InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCost;
