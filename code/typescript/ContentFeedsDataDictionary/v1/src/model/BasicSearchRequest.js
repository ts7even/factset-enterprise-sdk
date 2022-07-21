/**
 * CTS Data Dictionary API
 * An API for interacting with CTS Data Dictionary.
 *
 * The version of the OpenAPI document: 0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BasicSearchRequest model module.
 * @module model/BasicSearchRequest
 */
class BasicSearchRequest {
    /**
     * Constructs a new <code>BasicSearchRequest</code>.
     * @alias module:model/BasicSearchRequest
     */
    constructor() { 
        
        BasicSearchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicSearchRequest} obj Optional instance to populate.
     * @return {module:model/BasicSearchRequest} The populated <code>BasicSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicSearchRequest();

            if (data.hasOwnProperty('searchTerms')) {
                obj['searchTerms'] = ApiClient.convertToType(data['searchTerms'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} searchTerms
 */
BasicSearchRequest.prototype['searchTerms'] = undefined;






export default BasicSearchRequest;
