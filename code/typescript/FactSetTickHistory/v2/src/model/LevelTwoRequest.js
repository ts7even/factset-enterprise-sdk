/**
 * Tick History
 * Tick History provides dynamic access to historical tick data for a specific security for specific dates or date range.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Level2RequestBody from './Level2RequestBody';

/**
 * The LevelTwoRequest model module.
 * @module model/LevelTwoRequest
 */
class LevelTwoRequest {
    /**
     * Constructs a new <code>LevelTwoRequest</code>.
     * Level2 request body elements
     * @alias module:model/LevelTwoRequest
     * @param data {module:model/Level2RequestBody} 
     */
    constructor(data) { 
        
        LevelTwoRequest.initialize(this, data);
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
     * Constructs a <code>LevelTwoRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LevelTwoRequest} obj Optional instance to populate.
     * @return {module:model/LevelTwoRequest} The populated <code>LevelTwoRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LevelTwoRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Level2RequestBody.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Level2RequestBody} data
 */
LevelTwoRequest.prototype['data'] = undefined;






export default LevelTwoRequest;

