/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NotationSearchByTextDataMarketOrder from './NotationSearchByTextDataMarketOrder';

/**
 * The NotationSearchByTextDataMarket model module.
 * @module model/NotationSearchByTextDataMarket
 * @version 0.9.0
 */
class NotationSearchByTextDataMarket {
    /**
     * Constructs a new <code>NotationSearchByTextDataMarket</code>.
     * Market-related notation sorting.
     * @alias module:model/NotationSearchByTextDataMarket
     */
    constructor() { 
        
        NotationSearchByTextDataMarket.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotationSearchByTextDataMarket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotationSearchByTextDataMarket} obj Optional instance to populate.
     * @return {module:model/NotationSearchByTextDataMarket} The populated <code>NotationSearchByTextDataMarket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotationSearchByTextDataMarket();

            if (data.hasOwnProperty('order')) {
                obj['order'] = NotationSearchByTextDataMarketOrder.constructFromObject(data['order']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NotationSearchByTextDataMarketOrder} order
 */
NotationSearchByTextDataMarket.prototype['order'] = undefined;






export default NotationSearchByTextDataMarket;
