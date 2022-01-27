/**
 * NER API
 * Extract named entities and their FactSet entity IDs from given document text.
 *
 * The version of the OpenAPI document: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Input from './Input';

/**
 * The Request model module.
 * @module model/Request
 * @version 0.8.0
 */
class Request {
    /**
     * Constructs a new <code>Request</code>.
     * @alias module:model/Request
     */
    constructor() { 
        
        Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Request} obj Optional instance to populate.
     * @return {module:model/Request} The populated <code>Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Request();

            if (data.hasOwnProperty('input')) {
                obj['input'] = Input.constructFromObject(data['input']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Input} input
 */
Request.prototype['input'] = undefined;






export default Request;
