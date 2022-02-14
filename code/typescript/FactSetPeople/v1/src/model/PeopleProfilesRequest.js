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

/**
 * The PeopleProfilesRequest model module.
 * @module model/PeopleProfilesRequest
 * @version 0.9.1
 */
class PeopleProfilesRequest {
    /**
     * Constructs a new <code>PeopleProfilesRequest</code>.
     * @alias module:model/PeopleProfilesRequest
     * @param ids {Array.<String>} FactSet People Entity Ids. 
     */
    constructor(ids) { 
        
        PeopleProfilesRequest.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>PeopleProfilesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeopleProfilesRequest} obj Optional instance to populate.
     * @return {module:model/PeopleProfilesRequest} The populated <code>PeopleProfilesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeopleProfilesRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * FactSet People Entity Ids. 
 * @member {Array.<String>} ids
 */
PeopleProfilesRequest.prototype['ids'] = undefined;






export default PeopleProfilesRequest;

