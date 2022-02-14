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
import NotationSearchByTextDataValidationMarketPriority from './NotationSearchByTextDataValidationMarketPriority';
import NotationSearchByTextDataValidationMarketSelection from './NotationSearchByTextDataValidationMarketSelection';

/**
 * The NotationSearchByTextDataValidationMarket model module.
 * @module model/NotationSearchByTextDataValidationMarket
 * @version 0.9.1
 */
class NotationSearchByTextDataValidationMarket {
    /**
     * Constructs a new <code>NotationSearchByTextDataValidationMarket</code>.
     * Market-related notation selection. See endpoint &#x60;/basic/market/list&#x60; for valid values.
     * @alias module:model/NotationSearchByTextDataValidationMarket
     */
    constructor() { 
        
        NotationSearchByTextDataValidationMarket.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotationSearchByTextDataValidationMarket</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotationSearchByTextDataValidationMarket} obj Optional instance to populate.
     * @return {module:model/NotationSearchByTextDataValidationMarket} The populated <code>NotationSearchByTextDataValidationMarket</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotationSearchByTextDataValidationMarket();

            if (data.hasOwnProperty('selection')) {
                obj['selection'] = NotationSearchByTextDataValidationMarketSelection.constructFromObject(data['selection']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = NotationSearchByTextDataValidationMarketPriority.constructFromObject(data['priority']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NotationSearchByTextDataValidationMarketSelection} selection
 */
NotationSearchByTextDataValidationMarket.prototype['selection'] = undefined;

/**
 * @member {module:model/NotationSearchByTextDataValidationMarketPriority} priority
 */
NotationSearchByTextDataValidationMarket.prototype['priority'] = undefined;






export default NotationSearchByTextDataValidationMarket;

