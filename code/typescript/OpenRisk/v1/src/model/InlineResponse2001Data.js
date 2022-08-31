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
 * The InlineResponse2001Data model module.
 * @module model/InlineResponse2001Data
 */
class InlineResponse2001Data {
    /**
     * Constructs a new <code>InlineResponse2001Data</code>.
     * @alias module:model/InlineResponse2001Data
     * @param available {Boolean} If the model is available for use
     * @param category {String} Model category
     * @param code {String} Model code
     * @param name {String} Model name
     * @param vendor {String} Model vendor
     */
    constructor(available, category, code, name, vendor) { 
        
        InlineResponse2001Data.initialize(this, available, category, code, name, vendor);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, available, category, code, name, vendor) { 
        obj['available'] = available;
        obj['category'] = category;
        obj['code'] = code;
        obj['name'] = name;
        obj['vendor'] = vendor;
    }

    /**
     * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Data();

            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Boolean');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * If the model is available for use
 * @member {Boolean} available
 */
InlineResponse2001Data.prototype['available'] = undefined;

/**
 * Model category
 * @member {String} category
 */
InlineResponse2001Data.prototype['category'] = undefined;

/**
 * Model code
 * @member {String} code
 */
InlineResponse2001Data.prototype['code'] = undefined;

/**
 * Model name
 * @member {String} name
 */
InlineResponse2001Data.prototype['name'] = undefined;

/**
 * Model vendor
 * @member {String} vendor
 */
InlineResponse2001Data.prototype['vendor'] = undefined;






export default InlineResponse2001Data;

