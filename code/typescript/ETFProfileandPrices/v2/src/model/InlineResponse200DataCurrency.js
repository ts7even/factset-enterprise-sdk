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
 * The InlineResponse200DataCurrency model module.
 * @module model/InlineResponse200DataCurrency
 * @version 0.9.1
 */
class InlineResponse200DataCurrency {
    /**
     * Constructs a new <code>InlineResponse200DataCurrency</code>.
     * Currency.
     * @alias module:model/InlineResponse200DataCurrency
     */
    constructor() { 
        
        InlineResponse200DataCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataCurrency} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataCurrency} The populated <code>InlineResponse200DataCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataCurrency();

            if (data.hasOwnProperty('listing')) {
                obj['listing'] = ApiClient.convertToType(data['listing'], 'String');
            }
            if (data.hasOwnProperty('fund')) {
                obj['fund'] = ApiClient.convertToType(data['fund'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Currency of exchange specific listing. This data is available for all the regions and currency code is in the format ISO 4217.
 * @member {String} listing
 */
InlineResponse200DataCurrency.prototype['listing'] = undefined;

/**
 * Base calculation currency of the ETP. This data is available for all the regions and currency code is in the format ISO 4217.
 * @member {String} fund
 */
InlineResponse200DataCurrency.prototype['fund'] = undefined;






export default InlineResponse200DataCurrency;

