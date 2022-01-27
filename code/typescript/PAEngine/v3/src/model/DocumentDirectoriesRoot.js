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
import DocumentDirectories from './DocumentDirectories';

/**
 * The DocumentDirectoriesRoot model module.
 * @module model/DocumentDirectoriesRoot
 * @version 0.9.0
 */
class DocumentDirectoriesRoot {
    /**
     * Constructs a new <code>DocumentDirectoriesRoot</code>.
     * @alias module:model/DocumentDirectoriesRoot
     * @param data {module:model/DocumentDirectories} 
     */
    constructor(data) { 
        
        DocumentDirectoriesRoot.initialize(this, data);
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
     * Constructs a <code>DocumentDirectoriesRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentDirectoriesRoot} obj Optional instance to populate.
     * @return {module:model/DocumentDirectoriesRoot} The populated <code>DocumentDirectoriesRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentDirectoriesRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = DocumentDirectories.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DocumentDirectories} data
 */
DocumentDirectoriesRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
DocumentDirectoriesRoot.prototype['meta'] = undefined;






export default DocumentDirectoriesRoot;
