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
import Tag from './Tag';

/**
 * The Response model module.
 * @module model/Response
 * @version 0.8.1
 */
class Response {
    /**
     * Constructs a new <code>Response</code>.
     * @alias module:model/Response
     */
    constructor() { 
        
        Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Response} obj Optional instance to populate.
     * @return {module:model/Response} The populated <code>Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Response();

            if (data.hasOwnProperty('namedEntity')) {
                obj['namedEntity'] = ApiClient.convertToType(data['namedEntity'], [Tag]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Tag>} namedEntity
 */
Response.prototype['namedEntity'] = undefined;






export default Response;

