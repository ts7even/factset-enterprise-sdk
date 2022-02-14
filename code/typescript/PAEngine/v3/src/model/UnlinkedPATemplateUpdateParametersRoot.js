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
import UnlinkedPATemplateUpdateParameters from './UnlinkedPATemplateUpdateParameters';

/**
 * The UnlinkedPATemplateUpdateParametersRoot model module.
 * @module model/UnlinkedPATemplateUpdateParametersRoot
 * @version 0.9.1
 */
class UnlinkedPATemplateUpdateParametersRoot {
    /**
     * Constructs a new <code>UnlinkedPATemplateUpdateParametersRoot</code>.
     * @alias module:model/UnlinkedPATemplateUpdateParametersRoot
     * @param data {module:model/UnlinkedPATemplateUpdateParameters} 
     */
    constructor(data) { 
        
        UnlinkedPATemplateUpdateParametersRoot.initialize(this, data);
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
     * Constructs a <code>UnlinkedPATemplateUpdateParametersRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnlinkedPATemplateUpdateParametersRoot} obj Optional instance to populate.
     * @return {module:model/UnlinkedPATemplateUpdateParametersRoot} The populated <code>UnlinkedPATemplateUpdateParametersRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnlinkedPATemplateUpdateParametersRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = UnlinkedPATemplateUpdateParameters.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UnlinkedPATemplateUpdateParameters} data
 */
UnlinkedPATemplateUpdateParametersRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
UnlinkedPATemplateUpdateParametersRoot.prototype['meta'] = undefined;






export default UnlinkedPATemplateUpdateParametersRoot;

