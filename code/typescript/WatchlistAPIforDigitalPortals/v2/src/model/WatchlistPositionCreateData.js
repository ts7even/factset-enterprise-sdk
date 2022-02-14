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
 * The WatchlistPositionCreateData model module.
 * @module model/WatchlistPositionCreateData
 * @version 0.9.1
 */
class WatchlistPositionCreateData {
    /**
     * Constructs a new <code>WatchlistPositionCreateData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/WatchlistPositionCreateData
     * @param name {String} Name of watchlist
     * @param notation {String} Identifier of the notation
     */
    constructor(name, notation) { 
        
        WatchlistPositionCreateData.initialize(this, name, notation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, notation) { 
        obj['name'] = name;
        obj['notation'] = notation;
    }

    /**
     * Constructs a <code>WatchlistPositionCreateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WatchlistPositionCreateData} obj Optional instance to populate.
     * @return {module:model/WatchlistPositionCreateData} The populated <code>WatchlistPositionCreateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatchlistPositionCreateData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = ApiClient.convertToType(data['notation'], 'String');
            }
            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of watchlist
 * @member {String} name
 */
WatchlistPositionCreateData.prototype['name'] = undefined;

/**
 * Identifier of the notation
 * @member {String} notation
 */
WatchlistPositionCreateData.prototype['notation'] = undefined;

/**
 * Additional data to the watched position.
 * @member {String} additionalData
 */
WatchlistPositionCreateData.prototype['additionalData'] = undefined;






export default WatchlistPositionCreateData;

