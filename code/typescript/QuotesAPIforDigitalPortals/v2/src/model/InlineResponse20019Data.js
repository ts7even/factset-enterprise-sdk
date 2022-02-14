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
import InlineResponse20019DataSubdivisions from './InlineResponse20019DataSubdivisions';

/**
 * The InlineResponse20019Data model module.
 * @module model/InlineResponse20019Data
 * @version 0.9.1
 */
class InlineResponse20019Data {
    /**
     * Constructs a new <code>InlineResponse20019Data</code>.
     * Details of a country.
     * @alias module:model/InlineResponse20019Data
     */
    constructor() { 
        
        InlineResponse20019Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20019Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20019Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20019Data} The populated <code>InlineResponse20019Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20019Data();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subdivisions')) {
                obj['subdivisions'] = ApiClient.convertToType(data['subdivisions'], [InlineResponse20019DataSubdivisions]);
            }
        }
        return obj;
    }


}

/**
 * ISO 3166-1 alpha-2 code of the country.
 * @member {String} code
 */
InlineResponse20019Data.prototype['code'] = undefined;

/**
 * Name of the country.
 * @member {String} name
 */
InlineResponse20019Data.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20019DataSubdivisions>} subdivisions
 */
InlineResponse20019Data.prototype['subdivisions'] = undefined;






export default InlineResponse20019Data;

