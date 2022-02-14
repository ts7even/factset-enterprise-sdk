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
 * The InlineResponse20022Data model module.
 * @module model/InlineResponse20022Data
 * @version 0.9.1
 */
class InlineResponse20022Data {
    /**
     * Constructs a new <code>InlineResponse20022Data</code>.
     * @alias module:model/InlineResponse20022Data
     */
    constructor() { 
        
        InlineResponse20022Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20022Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022Data} The populated <code>InlineResponse20022Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022Data();

            if (data.hasOwnProperty('navDate')) {
                obj['navDate'] = ApiClient.convertToType(data['navDate'], 'Date');
            }
            if (data.hasOwnProperty('nav')) {
                obj['nav'] = ApiClient.convertToType(data['nav'], 'Number');
            }
            if (data.hasOwnProperty('navChange')) {
                obj['navChange'] = ApiClient.convertToType(data['navChange'], 'Number');
            }
            if (data.hasOwnProperty('navChangePercent')) {
                obj['navChangePercent'] = ApiClient.convertToType(data['navChangePercent'], 'Number');
            }
            if (data.hasOwnProperty('fundFlows')) {
                obj['fundFlows'] = ApiClient.convertToType(data['fundFlows'], 'Number');
            }
            if (data.hasOwnProperty('sharesOutstanding')) {
                obj['sharesOutstanding'] = ApiClient.convertToType(data['sharesOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('aum')) {
                obj['aum'] = ApiClient.convertToType(data['aum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Historice NAV date value.
 * @member {Date} navDate
 */
InlineResponse20022Data.prototype['navDate'] = undefined;

/**
 * Returns historic Net Asset Value of the ETP.
 * @member {Number} nav
 */
InlineResponse20022Data.prototype['nav'] = undefined;

/**
 * Absolute change in NAV value.
 * @member {Number} navChange
 */
InlineResponse20022Data.prototype['navChange'] = undefined;

/**
 * Related change in the NAV value.
 * @member {Number} navChangePercent
 */
InlineResponse20022Data.prototype['navChangePercent'] = undefined;

/**
 * This value returns factset's ETF fundflow history. Rolling one day fund flows are calculated using the difference of shares outstanding at previous close and shares outstanding one day prior to close mulitplied by the NAV of one day prior to close.
 * @member {Number} fundFlows
 */
InlineResponse20022Data.prototype['fundFlows'] = undefined;

/**
 * Returns the historic share Outstanding values of the ETP.
 * @member {Number} sharesOutstanding
 */
InlineResponse20022Data.prototype['sharesOutstanding'] = undefined;

/**
 * Returns the historic Total Asset Value of the ETP.
 * @member {Number} aum
 */
InlineResponse20022Data.prototype['aum'] = undefined;






export default InlineResponse20022Data;

