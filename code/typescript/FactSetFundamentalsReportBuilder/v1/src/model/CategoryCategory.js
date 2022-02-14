/**
 * FactSet Fundamentals Report Builder
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CategoryCategory model module.
 * @module model/CategoryCategory
 * @version 0.9.1
 */
class CategoryCategory {
    /**
     * Constructs a new <code>CategoryCategory</code>.
     * Describes data based on source or kind of value - ACTUAL - Historical data collected directly from a press release or a median consensus from brokers after a report date. - ESTIMATE - Forward looking average of broker estimates within a specific time horizon. - GUIDANCE - Forward looking indication or estimate of future performance issued by the company itself. - DETAIL - Indicates data that is more granular and may be secondary in focus. - MAIN - Indicates data is of more impactful or higher importance and may want to be emphasized. - SECTION - Indicates data that is used in sectioning rows in group level STACH format. 
     * @alias module:model/CategoryCategory
     */
    constructor() { 
        
        CategoryCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CategoryCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CategoryCategory} obj Optional instance to populate.
     * @return {module:model/CategoryCategory} The populated <code>CategoryCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryCategory();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CategoryCategory.ValueEnum} value
 */
CategoryCategory.prototype['value'] = undefined;





/**
 * Allowed values for the <code>value</code> property.
 * @enum {String}
 * @readonly
 */
CategoryCategory['ValueEnum'] = {

    /**
     * value: "ACTUAL"
     * @const
     */
    "ACTUAL": "ACTUAL",

    /**
     * value: "ESTIMATE"
     * @const
     */
    "ESTIMATE": "ESTIMATE",

    /**
     * value: "GUIDANCE"
     * @const
     */
    "GUIDANCE": "GUIDANCE",

    /**
     * value: "EXCLUDED"
     * @const
     */
    "EXCLUDED": "EXCLUDED",

    /**
     * value: "CHANGE"
     * @const
     */
    "CHANGE": "CHANGE",

    /**
     * value: "DETAIL"
     * @const
     */
    "DETAIL": "DETAIL",

    /**
     * value: "MAIN"
     * @const
     */
    "MAIN": "MAIN",

    /**
     * value: "SECTION"
     * @const
     */
    "SECTION": "SECTION"
};



export default CategoryCategory;

