/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InputToResultSecurityIndexMapping model module.
 * @module model/InputToResultSecurityIndexMapping
 */
class InputToResultSecurityIndexMapping {
    /**
     * Constructs a new <code>InputToResultSecurityIndexMapping</code>.
     * For each input holding from the request, a list of indices aligned to the input holding&#39;s IDs. These 0-based index values key into the security dimension of the results arrays and the &#x60;labels.security.ids&#x60; array.
     * @alias module:model/InputToResultSecurityIndexMapping
     * @param portfolio {Array.<Number>} 
     */
    constructor(portfolio) { 
        
        InputToResultSecurityIndexMapping.initialize(this, portfolio);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, portfolio) { 
        obj['portfolio'] = portfolio;
    }

    /**
     * Constructs a <code>InputToResultSecurityIndexMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InputToResultSecurityIndexMapping} obj Optional instance to populate.
     * @return {module:model/InputToResultSecurityIndexMapping} The populated <code>InputToResultSecurityIndexMapping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InputToResultSecurityIndexMapping();

            if (data.hasOwnProperty('portfolio')) {
                obj['portfolio'] = ApiClient.convertToType(data['portfolio'], ['Number']);
            }
            if (data.hasOwnProperty('benchmark')) {
                obj['benchmark'] = ApiClient.convertToType(data['benchmark'], ['Number']);
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = ApiClient.convertToType(data['market'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} portfolio
 */
InputToResultSecurityIndexMapping.prototype['portfolio'] = undefined;

/**
 * @member {Array.<Number>} benchmark
 */
InputToResultSecurityIndexMapping.prototype['benchmark'] = undefined;

/**
 * @member {Array.<Number>} market
 */
InputToResultSecurityIndexMapping.prototype['market'] = undefined;






export default InputToResultSecurityIndexMapping;

