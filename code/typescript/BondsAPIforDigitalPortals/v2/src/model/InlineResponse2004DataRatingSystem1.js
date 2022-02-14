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
import InlineResponse2004DataRatingSystem1Rating from './InlineResponse2004DataRatingSystem1Rating';

/**
 * The InlineResponse2004DataRatingSystem1 model module.
 * @module model/InlineResponse2004DataRatingSystem1
 * @version 0.9.1
 */
class InlineResponse2004DataRatingSystem1 {
    /**
     * Constructs a new <code>InlineResponse2004DataRatingSystem1</code>.
     * Ratings of the debt instruments according to the rating system specified by either the first identifier provided in the parameter &#x60;rating.system.ids&#x60;, or of the rating system implied by the first identifier provided in the parameter &#x60;rating.minimum.grade.ids&#x60;. Not available, if a rating system has not been specified via the mentioned parameters.
     * @alias module:model/InlineResponse2004DataRatingSystem1
     */
    constructor() { 
        
        InlineResponse2004DataRatingSystem1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataRatingSystem1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataRatingSystem1} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataRatingSystem1} The populated <code>InlineResponse2004DataRatingSystem1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataRatingSystem1();

            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], [InlineResponse2004DataRatingSystem1Rating]);
            }
        }
        return obj;
    }


}

/**
 * List of rating grades.
 * @member {Array.<module:model/InlineResponse2004DataRatingSystem1Rating>} rating
 */
InlineResponse2004DataRatingSystem1.prototype['rating'] = undefined;






export default InlineResponse2004DataRatingSystem1;

