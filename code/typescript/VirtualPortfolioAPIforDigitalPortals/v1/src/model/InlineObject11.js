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
import PortfolioCreateMeta from './PortfolioCreateMeta';
import WatchlistModifyData from './WatchlistModifyData';

/**
 * The InlineObject11 model module.
 * @module model/InlineObject11
 * @version 0.9.1
 */
class InlineObject11 {
    /**
     * Constructs a new <code>InlineObject11</code>.
     * @alias module:model/InlineObject11
     */
    constructor() { 
        
        InlineObject11.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject11} obj Optional instance to populate.
     * @return {module:model/InlineObject11} The populated <code>InlineObject11</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject11();

            if (data.hasOwnProperty('data')) {
                obj['data'] = WatchlistModifyData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PortfolioCreateMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WatchlistModifyData} data
 */
InlineObject11.prototype['data'] = undefined;

/**
 * @member {module:model/PortfolioCreateMeta} meta
 */
InlineObject11.prototype['meta'] = undefined;






export default InlineObject11;

