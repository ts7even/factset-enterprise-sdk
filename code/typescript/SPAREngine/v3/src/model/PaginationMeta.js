/**
 * SPAR Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.13.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PaginationInfo from './PaginationInfo';

/**
 * The PaginationMeta model module.
 * @module model/PaginationMeta
 */
class PaginationMeta {
    /**
     * Constructs a new <code>PaginationMeta</code>.
     * @alias module:model/PaginationMeta
     */
    constructor() { 
        
        PaginationMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginationMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationMeta} obj Optional instance to populate.
     * @return {module:model/PaginationMeta} The populated <code>PaginationMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationMeta();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PaginationInfo.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationInfo} pagination
 */
PaginationMeta.prototype['pagination'] = undefined;






export default PaginationMeta;

