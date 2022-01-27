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
 * The InlineResponse2004DataLevel model module.
 * @module model/InlineResponse2004DataLevel
 * @version 0.9.0
 */
class InlineResponse2004DataLevel {
    /**
     * Constructs a new <code>InlineResponse2004DataLevel</code>.
     * Category level.
     * @alias module:model/InlineResponse2004DataLevel
     */
    constructor() { 
        
        InlineResponse2004DataLevel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataLevel} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataLevel} The populated <code>InlineResponse2004DataLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataLevel();

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of the category level, indicating the distance to the root of the category hierarchy.
 * @member {Number} number
 */
InlineResponse2004DataLevel.prototype['number'] = undefined;






export default InlineResponse2004DataLevel;
