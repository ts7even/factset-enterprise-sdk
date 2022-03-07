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

/**
 * The NoAnswersFoundAllOf model module.
 * @module model/NoAnswersFoundAllOf
 * @version 0.9.1
 */
class NoAnswersFoundAllOf {
    /**
     * Constructs a new <code>NoAnswersFoundAllOf</code>.
     * @alias module:model/NoAnswersFoundAllOf
     * @param message {String} 
     * @param querySuggestions {Array.<String>} 
     */
    constructor(message, querySuggestions) { 
        
        NoAnswersFoundAllOf.initialize(this, message, querySuggestions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, querySuggestions) { 
        obj['message'] = message;
        obj['querySuggestions'] = querySuggestions;
    }

    /**
     * Constructs a <code>NoAnswersFoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NoAnswersFoundAllOf} obj Optional instance to populate.
     * @return {module:model/NoAnswersFoundAllOf} The populated <code>NoAnswersFoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NoAnswersFoundAllOf();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('querySuggestions')) {
                obj['querySuggestions'] = ApiClient.convertToType(data['querySuggestions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
NoAnswersFoundAllOf.prototype['message'] = undefined;

/**
 * @member {Array.<String>} querySuggestions
 */
NoAnswersFoundAllOf.prototype['querySuggestions'] = undefined;






export default NoAnswersFoundAllOf;
