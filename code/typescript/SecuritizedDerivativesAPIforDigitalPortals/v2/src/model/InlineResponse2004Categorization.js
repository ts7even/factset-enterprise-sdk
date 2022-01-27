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
import InlineResponse2004CategorizationDdv from './InlineResponse2004CategorizationDdv';

/**
 * The InlineResponse2004Categorization model module.
 * @module model/InlineResponse2004Categorization
 * @version 0.9.0
 */
class InlineResponse2004Categorization {
    /**
     * Constructs a new <code>InlineResponse2004Categorization</code>.
     * Categorization of the securitized derivative. Not all securitized derivatives have an assignement to all category systems. For each category system, the categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity.
     * @alias module:model/InlineResponse2004Categorization
     */
    constructor() { 
        
        InlineResponse2004Categorization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004Categorization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Categorization} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Categorization} The populated <code>InlineResponse2004Categorization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004Categorization();

            if (data.hasOwnProperty('ddv')) {
                obj['ddv'] = ApiClient.convertToType(data['ddv'], [InlineResponse2004CategorizationDdv]);
            }
            if (data.hasOwnProperty('eusipa')) {
                obj['eusipa'] = ApiClient.convertToType(data['eusipa'], [InlineResponse2004CategorizationDdv]);
            }
        }
        return obj;
    }


}

/**
 * Categorization based on the DDV (Deutscher Derivate Verband, German for German Derivatives Association) product classification. This category system covers securitized derivatives traded in Germany except exchange trade commodities (ETC) and exchange traded notes (ETN). See endpoint `/category/listBySystem` for category system 23 for possible values.
 * @member {Array.<module:model/InlineResponse2004CategorizationDdv>} ddv
 */
InlineResponse2004Categorization.prototype['ddv'] = undefined;

/**
 * Categorization based on the EUSIPA (European Structured Investment Products Association) product classification. This category system  covers all securitized derivatives. See endpoint `/category/listBySystem` for category system 18 for possible values.
 * @member {Array.<module:model/InlineResponse2004CategorizationDdv>} eusipa
 */
InlineResponse2004Categorization.prototype['eusipa'] = undefined;






export default InlineResponse2004Categorization;
