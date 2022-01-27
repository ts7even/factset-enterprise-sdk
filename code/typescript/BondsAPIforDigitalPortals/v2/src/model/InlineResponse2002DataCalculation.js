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
import InlineResponse2002DataCalculationPrice from './InlineResponse2002DataCalculationPrice';

/**
 * The InlineResponse2002DataCalculation model module.
 * @module model/InlineResponse2002DataCalculation
 * @version 0.9.0
 */
class InlineResponse2002DataCalculation {
    /**
     * Constructs a new <code>InlineResponse2002DataCalculation</code>.
     * Details of the calculation.
     * @alias module:model/InlineResponse2002DataCalculation
     */
    constructor() { 
        
        InlineResponse2002DataCalculation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002DataCalculation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002DataCalculation} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002DataCalculation} The populated <code>InlineResponse2002DataCalculation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002DataCalculation();

            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = InlineResponse2002DataCalculationPrice.constructFromObject(data['price']);
            }
        }
        return obj;
    }


}

/**
 * Date and time of the calculation.
 * @member {String} time
 */
InlineResponse2002DataCalculation.prototype['time'] = undefined;

/**
 * @member {module:model/InlineResponse2002DataCalculationPrice} price
 */
InlineResponse2002DataCalculation.prototype['price'] = undefined;






export default InlineResponse2002DataCalculation;
