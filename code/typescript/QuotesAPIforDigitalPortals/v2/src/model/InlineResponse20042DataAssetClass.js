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
 * The InlineResponse20042DataAssetClass model module.
 * @module model/InlineResponse20042DataAssetClass
 * @version 0.9.0
 */
class InlineResponse20042DataAssetClass {
    /**
     * Constructs a new <code>InlineResponse20042DataAssetClass</code>.
     * Asset class of the instrument. For possible values see endpoint /basic/assetClass/list.
     * @alias module:model/InlineResponse20042DataAssetClass
     */
    constructor() { 
        
        InlineResponse20042DataAssetClass.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20042DataAssetClass</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20042DataAssetClass} obj Optional instance to populate.
     * @return {module:model/InlineResponse20042DataAssetClass} The populated <code>InlineResponse20042DataAssetClass</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20042DataAssetClass();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the asset class.
 * @member {Number} id
 */
InlineResponse20042DataAssetClass.prototype['id'] = undefined;

/**
 * code of the asset class.
 * @member {String} code
 */
InlineResponse20042DataAssetClass.prototype['code'] = undefined;






export default InlineResponse20042DataAssetClass;
