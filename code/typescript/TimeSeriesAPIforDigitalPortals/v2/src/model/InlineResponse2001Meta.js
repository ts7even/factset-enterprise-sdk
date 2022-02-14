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
import StatusObject from './StatusObject';

/**
 * The InlineResponse2001Meta model module.
 * @module model/InlineResponse2001Meta
 * @version 0.9.1
 */
class InlineResponse2001Meta {
    /**
     * Constructs a new <code>InlineResponse2001Meta</code>.
     * The meta member contains the meta information of the response.
     * @alias module:model/InlineResponse2001Meta
     */
    constructor() { 
        
        InlineResponse2001Meta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Meta} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Meta} The populated <code>InlineResponse2001Meta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Meta();

            if (data.hasOwnProperty('status')) {
                obj['status'] = StatusObject.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StatusObject} status
 */
InlineResponse2001Meta.prototype['status'] = undefined;






export default InlineResponse2001Meta;

