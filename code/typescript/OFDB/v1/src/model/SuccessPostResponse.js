/**
 * OFDB API
 * OFDB api
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: cpd-hyd-engineering@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SuccessPostResponse model module.
 * @module model/SuccessPostResponse
 * @version 0.9.1
 */
class SuccessPostResponse {
    /**
     * Constructs a new <code>SuccessPostResponse</code>.
     * Response format of any kind of post response
     * @alias module:model/SuccessPostResponse
     */
    constructor() { 
        
        SuccessPostResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SuccessPostResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessPostResponse} obj Optional instance to populate.
     * @return {module:model/SuccessPostResponse} The populated <code>SuccessPostResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessPostResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * id of the newly created resource
 * @member {String} id
 */
SuccessPostResponse.prototype['id'] = undefined;






export default SuccessPostResponse;

