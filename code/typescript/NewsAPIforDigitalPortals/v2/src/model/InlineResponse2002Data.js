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
import InlineResponse2001Publisher from './InlineResponse2001Publisher';
import InlineResponse2002DataArticles from './InlineResponse2002DataArticles';
import InlineResponse2002DataDistributor from './InlineResponse2002DataDistributor';

/**
 * The InlineResponse2002Data model module.
 * @module model/InlineResponse2002Data
 * @version 0.9.1
 */
class InlineResponse2002Data {
    /**
     * Constructs a new <code>InlineResponse2002Data</code>.
     * News articles, their publisher, and distributor as refrenced by the article chain.
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

            if (data.hasOwnProperty('distributor')) {
                obj['distributor'] = InlineResponse2002DataDistributor.constructFromObject(data['distributor']);
            }
            if (data.hasOwnProperty('publisher')) {
                obj['publisher'] = InlineResponse2001Publisher.constructFromObject(data['publisher']);
            }
            if (data.hasOwnProperty('articles')) {
                obj['articles'] = ApiClient.convertToType(data['articles'], [InlineResponse2002DataArticles]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2002DataDistributor} distributor
 */
InlineResponse2002Data.prototype['distributor'] = undefined;

/**
 * @member {module:model/InlineResponse2001Publisher} publisher
 */
InlineResponse2002Data.prototype['publisher'] = undefined;

/**
 * News articles that match the filter criteria ordered by descending article time.
 * @member {Array.<module:model/InlineResponse2002DataArticles>} articles
 */
InlineResponse2002Data.prototype['articles'] = undefined;






export default InlineResponse2002Data;

