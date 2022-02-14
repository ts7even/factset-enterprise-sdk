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
 * The InlineResponse20089InstrumentAssetClass model module.
 * @module model/InlineResponse20089InstrumentAssetClass
 * @version 0.9.1
 */
class InlineResponse20089InstrumentAssetClass {
    /**
     * Constructs a new <code>InlineResponse20089InstrumentAssetClass</code>.
     * Asset class of the instrument. See endpoint &#x60;/basic/assetClass/list&#x60; for possible values.
     * @alias module:model/InlineResponse20089InstrumentAssetClass
     */
    constructor() { 
        
        InlineResponse20089InstrumentAssetClass.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20089InstrumentAssetClass</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20089InstrumentAssetClass} obj Optional instance to populate.
     * @return {module:model/InlineResponse20089InstrumentAssetClass} The populated <code>InlineResponse20089InstrumentAssetClass</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20089InstrumentAssetClass();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the asset class.
 * @member {Number} id
 */
InlineResponse20089InstrumentAssetClass.prototype['id'] = undefined;

/**
 * English name of the asset class.
 * @member {String} name
 */
InlineResponse20089InstrumentAssetClass.prototype['name'] = undefined;






export default InlineResponse20089InstrumentAssetClass;

