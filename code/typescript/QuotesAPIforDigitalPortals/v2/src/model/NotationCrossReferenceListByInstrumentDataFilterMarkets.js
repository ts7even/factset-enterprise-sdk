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
 * The NotationCrossReferenceListByInstrumentDataFilterMarkets model module.
 * @module model/NotationCrossReferenceListByInstrumentDataFilterMarkets
 * @version 0.9.1
 */
class NotationCrossReferenceListByInstrumentDataFilterMarkets {
    /**
     * Constructs a new <code>NotationCrossReferenceListByInstrumentDataFilterMarkets</code>.
     * Filter for specific markets.
     * @alias module:model/NotationCrossReferenceListByInstrumentDataFilterMarkets
     */
    constructor() { 
        
        NotationCrossReferenceListByInstrumentDataFilterMarkets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotationCrossReferenceListByInstrumentDataFilterMarkets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotationCrossReferenceListByInstrumentDataFilterMarkets} obj Optional instance to populate.
     * @return {module:model/NotationCrossReferenceListByInstrumentDataFilterMarkets} The populated <code>NotationCrossReferenceListByInstrumentDataFilterMarkets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotationCrossReferenceListByInstrumentDataFilterMarkets();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * List of market ids.
 * @member {Array.<Number>} ids
 */
NotationCrossReferenceListByInstrumentDataFilterMarkets.prototype['ids'] = undefined;






export default NotationCrossReferenceListByInstrumentDataFilterMarkets;

