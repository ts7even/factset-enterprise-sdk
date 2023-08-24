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
import Meta from './Meta';
import TickDataLevel2 from './TickDataLevel2';

/**
 * The LeveltwoGetFilesResponse model module.
 * @module model/LeveltwoGetFilesResponse
 */
class LeveltwoGetFilesResponse {
    /**
     * Constructs a new <code>LeveltwoGetFilesResponse</code>.
     * Returns Tick History Files
     * @alias module:model/LeveltwoGetFilesResponse
     */
    constructor() { 
        
        LeveltwoGetFilesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeveltwoGetFilesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeveltwoGetFilesResponse} obj Optional instance to populate.
     * @return {module:model/LeveltwoGetFilesResponse} The populated <code>LeveltwoGetFilesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeveltwoGetFilesResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = TickDataLevel2.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TickDataLevel2} data
 */
LeveltwoGetFilesResponse.prototype['data'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
LeveltwoGetFilesResponse.prototype['meta'] = undefined;






export default LeveltwoGetFilesResponse;

