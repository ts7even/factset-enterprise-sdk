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
import SPARComponent from './SPARComponent';

/**
 * The SPARComponentRoot model module.
 * @module model/SPARComponentRoot
 */
class SPARComponentRoot {
    /**
     * Constructs a new <code>SPARComponentRoot</code>.
     * @alias module:model/SPARComponentRoot
     */
    constructor() { 
        
        SPARComponentRoot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SPARComponentRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SPARComponentRoot} obj Optional instance to populate.
     * @return {module:model/SPARComponentRoot} The populated <code>SPARComponentRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SPARComponentRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = SPARComponent.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SPARComponent} data
 */
SPARComponentRoot.prototype['data'] = undefined;






export default SPARComponentRoot;
