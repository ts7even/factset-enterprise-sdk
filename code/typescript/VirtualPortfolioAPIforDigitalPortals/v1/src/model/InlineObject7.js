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
import PortfolioTransactionCashCreateData from './PortfolioTransactionCashCreateData';

/**
 * The InlineObject7 model module.
 * @module model/InlineObject7
 * @version 0.9.0
 */
class InlineObject7 {
    /**
     * Constructs a new <code>InlineObject7</code>.
     * @alias module:model/InlineObject7
     */
    constructor() { 
        
        InlineObject7.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject7} obj Optional instance to populate.
     * @return {module:model/InlineObject7} The populated <code>InlineObject7</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject7();

            if (data.hasOwnProperty('data')) {
                obj['data'] = PortfolioTransactionCashCreateData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PortfolioCreateMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PortfolioTransactionCashCreateData} data
 */
InlineObject7.prototype['data'] = undefined;

/**
 * @member {module:model/PortfolioCreateMeta} meta
 */
InlineObject7.prototype['meta'] = undefined;






export default InlineObject7;
