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
 * The InlineResponse2005DataLevel model module.
 * @module model/InlineResponse2005DataLevel
 * @version 0.9.0
 */
class InlineResponse2005DataLevel {
    /**
     * Constructs a new <code>InlineResponse2005DataLevel</code>.
     * Category level.
     * @alias module:model/InlineResponse2005DataLevel
     */
    constructor() { 
        
        InlineResponse2005DataLevel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataLevel} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataLevel} The populated <code>InlineResponse2005DataLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataLevel();

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Number of the category level, indicating the distance to the root of the category hierarchy.
 * @member {Number} number
 */
InlineResponse2005DataLevel.prototype['number'] = undefined;

/**
 * Name of the category level.
 * @member {String} name
 */
InlineResponse2005DataLevel.prototype['name'] = undefined;






export default InlineResponse2005DataLevel;
