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
 * The InlineResponse2002DataCountries model module.
 * @module model/InlineResponse2002DataCountries
 * @version 0.9.1
 */
class InlineResponse2002DataCountries {
    /**
     * Constructs a new <code>InlineResponse2002DataCountries</code>.
     * @alias module:model/InlineResponse2002DataCountries
     */
    constructor() { 
        
        InlineResponse2002DataCountries.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002DataCountries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002DataCountries} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002DataCountries} The populated <code>InlineResponse2002DataCountries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002DataCountries();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Name of the country.
 * @member {String} country
 */
InlineResponse2002DataCountries.prototype['country'] = undefined;

/**
 * Consolidate weight of the position within the ETP by country(s)..
 * @member {Number} weight
 */
InlineResponse2002DataCountries.prototype['weight'] = undefined;






export default InlineResponse2002DataCountries;

