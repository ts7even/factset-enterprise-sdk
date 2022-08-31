/**
 * Watchlist API For Digital Portals
 * Watchlists keeps track of users' individual investment objectives. They are meant to support the self-directed business of wealth management firms.  The Watchlist API for Digital Portals is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments in a watchlist. This also supports basic security identifier cross-reference. To complement the Watchlist API with direct access to price histories, please refer to the Time Series API for Digital Portals.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse201Data from './InlineResponse201Data';
import InlineResponse201Meta from './InlineResponse201Meta';

/**
 * The InlineResponse201 model module.
 * @module model/InlineResponse201
 */
class InlineResponse201 {
    /**
     * Constructs a new <code>InlineResponse201</code>.
     * @alias module:model/InlineResponse201
     */
    constructor() { 
        
        InlineResponse201.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse201} obj Optional instance to populate.
     * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse201();

            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse201Data.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse201Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse201Data} data
 */
InlineResponse201.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse201Meta} meta
 */
InlineResponse201.prototype['meta'] = undefined;






export default InlineResponse201;

