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
 * The InstrumentCrossReferenceListByWKNData model module.
 * @module model/InstrumentCrossReferenceListByWKNData
 * @version 0.9.1
 */
class InstrumentCrossReferenceListByWKNData {
    /**
     * Constructs a new <code>InstrumentCrossReferenceListByWKNData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/InstrumentCrossReferenceListByWKNData
     * @param wkns {Array.<String>} List of source WKNs to be translated.
     */
    constructor(wkns) { 
        
        InstrumentCrossReferenceListByWKNData.initialize(this, wkns);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, wkns) { 
        obj['wkns'] = wkns;
    }

    /**
     * Constructs a <code>InstrumentCrossReferenceListByWKNData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstrumentCrossReferenceListByWKNData} obj Optional instance to populate.
     * @return {module:model/InstrumentCrossReferenceListByWKNData} The populated <code>InstrumentCrossReferenceListByWKNData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstrumentCrossReferenceListByWKNData();

            if (data.hasOwnProperty('wkns')) {
                obj['wkns'] = ApiClient.convertToType(data['wkns'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of source WKNs to be translated.
 * @member {Array.<String>} wkns
 */
InstrumentCrossReferenceListByWKNData.prototype['wkns'] = undefined;






export default InstrumentCrossReferenceListByWKNData;

