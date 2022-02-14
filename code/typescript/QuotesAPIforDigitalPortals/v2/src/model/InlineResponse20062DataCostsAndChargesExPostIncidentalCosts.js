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
 * The InlineResponse20062DataCostsAndChargesExPostIncidentalCosts model module.
 * @module model/InlineResponse20062DataCostsAndChargesExPostIncidentalCosts
 * @version 0.9.1
 */
class InlineResponse20062DataCostsAndChargesExPostIncidentalCosts {
    /**
     * Constructs a new <code>InlineResponse20062DataCostsAndChargesExPostIncidentalCosts</code>.
     * Annualized ex post incidental cost of the investment product. Among others, this includes the performance fee and the carried interests.
     * @alias module:model/InlineResponse20062DataCostsAndChargesExPostIncidentalCosts
     */
    constructor() { 
        
        InlineResponse20062DataCostsAndChargesExPostIncidentalCosts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataCostsAndChargesExPostIncidentalCosts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataCostsAndChargesExPostIncidentalCosts} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataCostsAndChargesExPostIncidentalCosts} The populated <code>InlineResponse20062DataCostsAndChargesExPostIncidentalCosts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataCostsAndChargesExPostIncidentalCosts();

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
InlineResponse20062DataCostsAndChargesExPostIncidentalCosts.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse20062DataCostsAndChargesExAnteOneOffEntryCostValueUnit} valueUnit
 */
InlineResponse20062DataCostsAndChargesExPostIncidentalCosts.prototype['valueUnit'] = undefined;






export default InlineResponse20062DataCostsAndChargesExPostIncidentalCosts;

