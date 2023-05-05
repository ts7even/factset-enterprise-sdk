/**
 * FactSet Overview Report Builder API
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ErrorObjectLinks from './ErrorObjectLinks';
import ErrorObjectSource from './ErrorObjectSource';

/**
 * The ErrorObject model module.
 * @module model/ErrorObject
 */
class ErrorObject {
    /**
     * Constructs a new <code>ErrorObject</code>.
     * @alias module:model/ErrorObject
     */
    constructor() { 
        
        ErrorObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorObject} obj Optional instance to populate.
     * @return {module:model/ErrorObject} The populated <code>ErrorObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorObject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ErrorObjectLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ErrorObjectSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ErrorObject.prototype['id'] = undefined;

/**
 * @member {String} code
 */
ErrorObject.prototype['code'] = undefined;

/**
 * @member {String} title
 */
ErrorObject.prototype['title'] = undefined;

/**
 * @member {module:model/ErrorObjectLinks} links
 */
ErrorObject.prototype['links'] = undefined;

/**
 * @member {String} detail
 */
ErrorObject.prototype['detail'] = undefined;

/**
 * @member {module:model/ErrorObjectSource} source
 */
ErrorObject.prototype['source'] = undefined;






export default ErrorObject;

