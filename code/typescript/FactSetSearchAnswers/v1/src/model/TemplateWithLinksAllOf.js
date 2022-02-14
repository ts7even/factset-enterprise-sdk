/**
 * FactSet Search Answers API
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApplicationLink from './ApplicationLink';

/**
 * The TemplateWithLinksAllOf model module.
 * @module model/TemplateWithLinksAllOf
 * @version 0.9.1
 */
class TemplateWithLinksAllOf {
    /**
     * Constructs a new <code>TemplateWithLinksAllOf</code>.
     * @alias module:model/TemplateWithLinksAllOf
     */
    constructor() { 
        
        TemplateWithLinksAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateWithLinksAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateWithLinksAllOf} obj Optional instance to populate.
     * @return {module:model/TemplateWithLinksAllOf} The populated <code>TemplateWithLinksAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateWithLinksAllOf();

            if (data.hasOwnProperty('applicationLinks')) {
                obj['applicationLinks'] = ApiClient.convertToType(data['applicationLinks'], [ApplicationLink]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ApplicationLink>} applicationLinks
 */
TemplateWithLinksAllOf.prototype['applicationLinks'] = undefined;






export default TemplateWithLinksAllOf;

