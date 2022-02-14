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
import InlineResponse2002DataInstrument from './InlineResponse2002DataInstrument';
import InlineResponse2002DataRecommendationList from './InlineResponse2002DataRecommendationList';
import InlineResponse2002DataTypes from './InlineResponse2002DataTypes';
import InlineResponse200DataActiveRevisionActiveRange from './InlineResponse200DataActiveRevisionActiveRange';

/**
 * The InlineResponse2002Data model module.
 * @module model/InlineResponse2002Data
 * @version 0.9.1
 */
class InlineResponse2002Data {
    /**
     * Constructs a new <code>InlineResponse2002Data</code>.
     * Details about the revision.
     * @alias module:model/InlineResponse2002Data
     */
    constructor() { 
        
        InlineResponse2002Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002Data} The populated <code>InlineResponse2002Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('recommendationList')) {
                obj['recommendationList'] = InlineResponse2002DataRecommendationList.constructFromObject(data['recommendationList']);
            }
            if (data.hasOwnProperty('types')) {
                obj['types'] = ApiClient.convertToType(data['types'], [InlineResponse2002DataTypes]);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('activeRange')) {
                obj['activeRange'] = InlineResponse200DataActiveRevisionActiveRange.constructFromObject(data['activeRange']);
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = InlineResponse2002DataInstrument.constructFromObject(data['instrument']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the revision.
 * @member {Number} id
 */
InlineResponse2002Data.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse2002DataRecommendationList} recommendationList
 */
InlineResponse2002Data.prototype['recommendationList'] = undefined;

/**
 * Set of types assigned to the recommendation list as of the given revision. The customer maintains a list of valid types for all of its recommendation lists.
 * @member {Array.<module:model/InlineResponse2002DataTypes>} types
 */
InlineResponse2002Data.prototype['types'] = undefined;

/**
 * Title assigned to the recommendation list as of the given revision.
 * @member {String} title
 */
InlineResponse2002Data.prototype['title'] = undefined;

/**
 * Description assigned to the recommendation list as of the given revision.
 * @member {String} description
 */
InlineResponse2002Data.prototype['description'] = undefined;

/**
 * @member {module:model/InlineResponse200DataActiveRevisionActiveRange} activeRange
 */
InlineResponse2002Data.prototype['activeRange'] = undefined;

/**
 * @member {module:model/InlineResponse2002DataInstrument} instrument
 */
InlineResponse2002Data.prototype['instrument'] = undefined;






export default InlineResponse2002Data;

