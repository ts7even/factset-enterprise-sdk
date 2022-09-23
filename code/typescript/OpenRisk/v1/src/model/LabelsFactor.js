/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LabelsFactor model module.
 * @module model/LabelsFactor
 */
class LabelsFactor {
    /**
     * Constructs a new <code>LabelsFactor</code>.
     * Labels relevant to calculation-levels with &#39;Factor&#39; in the name
     * @alias module:model/LabelsFactor
     * @param ids {Array.<String>} 
     * @param names {Array.<String>} 
     */
    constructor(ids, names) { 
        
        LabelsFactor.initialize(this, ids, names);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids, names) { 
        obj['ids'] = ids;
        obj['names'] = names;
    }

    /**
     * Constructs a <code>LabelsFactor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelsFactor} obj Optional instance to populate.
     * @return {module:model/LabelsFactor} The populated <code>LabelsFactor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelsFactor();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} ids
 */
LabelsFactor.prototype['ids'] = undefined;

/**
 * @member {Array.<String>} names
 */
LabelsFactor.prototype['names'] = undefined;






export default LabelsFactor;
