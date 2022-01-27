/**
 * PA Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LinkedPATemplateParameters from './LinkedPATemplateParameters';

/**
 * The LinkedPATemplateParametersRoot model module.
 * @module model/LinkedPATemplateParametersRoot
 * @version 0.9.0
 */
class LinkedPATemplateParametersRoot {
    /**
     * Constructs a new <code>LinkedPATemplateParametersRoot</code>.
     * @alias module:model/LinkedPATemplateParametersRoot
     * @param data {module:model/LinkedPATemplateParameters} 
     */
    constructor(data) { 
        
        LinkedPATemplateParametersRoot.initialize(this, data);
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
     * Constructs a <code>LinkedPATemplateParametersRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedPATemplateParametersRoot} obj Optional instance to populate.
     * @return {module:model/LinkedPATemplateParametersRoot} The populated <code>LinkedPATemplateParametersRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedPATemplateParametersRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = LinkedPATemplateParameters.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LinkedPATemplateParameters} data
 */
LinkedPATemplateParametersRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
LinkedPATemplateParametersRoot.prototype['meta'] = undefined;






export default LinkedPATemplateParametersRoot;
