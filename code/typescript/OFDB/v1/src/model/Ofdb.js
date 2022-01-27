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
 * The Ofdb model module.
 * @module model/Ofdb
 * @version 0.9.0
 */
class Ofdb {
    /**
     * Constructs a new <code>Ofdb</code>.
     * @alias module:model/Ofdb
     */
    constructor() { 
        
        Ofdb.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Ofdb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ofdb} obj Optional instance to populate.
     * @return {module:model/Ofdb} The populated <code>Ofdb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ofdb();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
Ofdb.prototype['username'] = undefined;






export default Ofdb;
