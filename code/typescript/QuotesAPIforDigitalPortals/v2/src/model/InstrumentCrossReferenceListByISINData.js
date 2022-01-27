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
 * The InstrumentCrossReferenceListByISINData model module.
 * @module model/InstrumentCrossReferenceListByISINData
 * @version 0.9.0
 */
class InstrumentCrossReferenceListByISINData {
    /**
     * Constructs a new <code>InstrumentCrossReferenceListByISINData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/InstrumentCrossReferenceListByISINData
     * @param isins {Array.<String>} List of source ISINs to be translated.
     */
    constructor(isins) { 
        
        InstrumentCrossReferenceListByISINData.initialize(this, isins);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isins) { 
        obj['isins'] = isins;
    }

    /**
     * Constructs a <code>InstrumentCrossReferenceListByISINData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstrumentCrossReferenceListByISINData} obj Optional instance to populate.
     * @return {module:model/InstrumentCrossReferenceListByISINData} The populated <code>InstrumentCrossReferenceListByISINData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstrumentCrossReferenceListByISINData();

            if (data.hasOwnProperty('isins')) {
                obj['isins'] = ApiClient.convertToType(data['isins'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * List of source ISINs to be translated.
 * @member {Array.<String>} isins
 */
InstrumentCrossReferenceListByISINData.prototype['isins'] = undefined;






export default InstrumentCrossReferenceListByISINData;
