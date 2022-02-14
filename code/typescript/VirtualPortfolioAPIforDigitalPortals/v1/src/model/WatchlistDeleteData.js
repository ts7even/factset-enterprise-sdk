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

/**
 * The WatchlistDeleteData model module.
 * @module model/WatchlistDeleteData
 * @version 0.9.1
 */
class WatchlistDeleteData {
    /**
     * Constructs a new <code>WatchlistDeleteData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/WatchlistDeleteData
     * @param id {String} Identifier of the watchlist.
     */
    constructor(id) { 
        
        WatchlistDeleteData.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>WatchlistDeleteData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WatchlistDeleteData} obj Optional instance to populate.
     * @return {module:model/WatchlistDeleteData} The populated <code>WatchlistDeleteData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatchlistDeleteData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the watchlist.
 * @member {String} id
 */
WatchlistDeleteData.prototype['id'] = undefined;






export default WatchlistDeleteData;

