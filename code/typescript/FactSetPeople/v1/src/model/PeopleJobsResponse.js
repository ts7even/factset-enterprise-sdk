/**
 * FactSet People API
 * The FactSet People API exposes FactSet data for individuals and their jobs. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Job from './Job';

/**
 * The PeopleJobsResponse model module.
 * @module model/PeopleJobsResponse
 * @version 0.9.1
 */
class PeopleJobsResponse {
    /**
     * Constructs a new <code>PeopleJobsResponse</code>.
     * @alias module:model/PeopleJobsResponse
     */
    constructor() { 
        
        PeopleJobsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PeopleJobsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeopleJobsResponse} obj Optional instance to populate.
     * @return {module:model/PeopleJobsResponse} The populated <code>PeopleJobsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeopleJobsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Job]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Job>} data
 */
PeopleJobsResponse.prototype['data'] = undefined;






export default PeopleJobsResponse;

