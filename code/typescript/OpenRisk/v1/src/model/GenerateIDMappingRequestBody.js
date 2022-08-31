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
import GenerateIDMappingRequestData from './GenerateIDMappingRequestData';

/**
 * The GenerateIDMappingRequestBody model module.
 * @module model/GenerateIDMappingRequestBody
 */
class GenerateIDMappingRequestBody {
    /**
     * Constructs a new <code>GenerateIDMappingRequestBody</code>.
     * @alias module:model/GenerateIDMappingRequestBody
     * @param data {module:model/GenerateIDMappingRequestData} 
     */
    constructor(data) { 
        
        GenerateIDMappingRequestBody.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>GenerateIDMappingRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateIDMappingRequestBody} obj Optional instance to populate.
     * @return {module:model/GenerateIDMappingRequestBody} The populated <code>GenerateIDMappingRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateIDMappingRequestBody();

            if (data.hasOwnProperty('data')) {
                obj['data'] = GenerateIDMappingRequestData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GenerateIDMappingRequestData} data
 */
GenerateIDMappingRequestBody.prototype['data'] = undefined;






export default GenerateIDMappingRequestBody;

