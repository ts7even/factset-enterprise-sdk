/**
 * Open:FactSet - Partners
 * This service provides the capability to search and download unstructured content provided by <a href=\"https://open.factset.com/catalog/en-us\">Open:FactSet Partners</a>.
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
import BeamEndpointsFiles from './BeamEndpointsFiles';
import Meta from './Meta';

/**
 * The BeamEndpointsResponse model module.
 * @module model/BeamEndpointsResponse
 */
class BeamEndpointsResponse {
    /**
     * Constructs a new <code>BeamEndpointsResponse</code>.
     * Returns Beam Endpoints Response
     * @alias module:model/BeamEndpointsResponse
     */
    constructor() { 
        
        BeamEndpointsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BeamEndpointsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BeamEndpointsResponse} obj Optional instance to populate.
     * @return {module:model/BeamEndpointsResponse} The populated <code>BeamEndpointsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BeamEndpointsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BeamEndpointsFiles]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Returns Beam Endpoints Response
 * @member {Array.<module:model/BeamEndpointsFiles>} data
 */
BeamEndpointsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/Meta} meta
 */
BeamEndpointsResponse.prototype['meta'] = undefined;






export default BeamEndpointsResponse;
