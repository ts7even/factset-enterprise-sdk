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
import InlineResponse200DataRedemptionPriceValueUnit from './InlineResponse200DataRedemptionPriceValueUnit';

/**
 * The InlineResponse200DataRedemptionPrice model module.
 * @module model/InlineResponse200DataRedemptionPrice
 * @version 0.9.1
 */
class InlineResponse200DataRedemptionPrice {
    /**
     * Constructs a new <code>InlineResponse200DataRedemptionPrice</code>.
     * Redemption price data.
     * @alias module:model/InlineResponse200DataRedemptionPrice
     */
    constructor() { 
        
        InlineResponse200DataRedemptionPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataRedemptionPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataRedemptionPrice} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataRedemptionPrice} The populated <code>InlineResponse200DataRedemptionPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataRedemptionPrice();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('valueUnit')) {
                obj['valueUnit'] = InlineResponse200DataRedemptionPriceValueUnit.constructFromObject(data['valueUnit']);
            }
        }
        return obj;
    }


}

/**
 * Redemption price.
 * @member {Number} value
 */
InlineResponse200DataRedemptionPrice.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse200DataRedemptionPriceValueUnit} valueUnit
 */
InlineResponse200DataRedemptionPrice.prototype['valueUnit'] = undefined;






export default InlineResponse200DataRedemptionPrice;

