/**
 * TickHistory
 * TickHistory provides dynamic access to historical tick data for a specific security for specific dates or date range.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Partial model module.
 * @module model/Partial
 * @version 0.9.0
 */
class Partial {
    /**
     * Constructs a new <code>Partial</code>.
     * If the value is true, it indicates additional results are available. False represents that this is the last set of results for this request.
     * @alias module:model/Partial
     */
    constructor() { 
        
        Partial.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Partial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Partial} obj Optional instance to populate.
     * @return {module:model/Partial} The populated <code>Partial</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Partial();

            if (data.hasOwnProperty('isPartial')) {
                obj['isPartial'] = ApiClient.convertToType(data['isPartial'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isPartial
 */
Partial.prototype['isPartial'] = undefined;






export default Partial;
