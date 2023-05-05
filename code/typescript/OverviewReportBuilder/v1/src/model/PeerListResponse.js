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
import PeerListObject from './PeerListObject';

/**
 * The PeerListResponse model module.
 * @module model/PeerListResponse
 */
class PeerListResponse {
    /**
     * Constructs a new <code>PeerListResponse</code>.
     * @alias module:model/PeerListResponse
     */
    constructor() { 
        
        PeerListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PeerListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeerListResponse} obj Optional instance to populate.
     * @return {module:model/PeerListResponse} The populated <code>PeerListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeerListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = PeerListObject.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PeerListObject} data
 */
PeerListResponse.prototype['data'] = undefined;

/**
 * @member {Object.<String, String>} meta
 */
PeerListResponse.prototype['meta'] = undefined;






export default PeerListResponse;

