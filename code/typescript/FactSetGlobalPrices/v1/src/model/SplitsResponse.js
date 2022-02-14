/**
 * FactSet Global Prices API
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Split from './Split';

/**
 * The SplitsResponse model module.
 * @module model/SplitsResponse
 * @version 0.9.1
 */
class SplitsResponse {
    /**
     * Constructs a new <code>SplitsResponse</code>.
     * @alias module:model/SplitsResponse
     */
    constructor() { 
        
        SplitsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SplitsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SplitsResponse} obj Optional instance to populate.
     * @return {module:model/SplitsResponse} The populated <code>SplitsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SplitsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Split]);
            }
        }
        return obj;
    }


}

/**
 * Array of Split Objects
 * @member {Array.<module:model/Split>} data
 */
SplitsResponse.prototype['data'] = undefined;






export default SplitsResponse;

