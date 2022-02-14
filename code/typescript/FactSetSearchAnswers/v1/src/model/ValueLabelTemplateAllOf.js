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
 * The ValueLabelTemplateAllOf model module.
 * @module model/ValueLabelTemplateAllOf
 * @version 0.9.1
 */
class ValueLabelTemplateAllOf {
    /**
     * Constructs a new <code>ValueLabelTemplateAllOf</code>.
     * @alias module:model/ValueLabelTemplateAllOf
     */
    constructor() { 
        
        ValueLabelTemplateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValueLabelTemplateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValueLabelTemplateAllOf} obj Optional instance to populate.
     * @return {module:model/ValueLabelTemplateAllOf} The populated <code>ValueLabelTemplateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValueLabelTemplateAllOf();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} value
 */
ValueLabelTemplateAllOf.prototype['value'] = undefined;

/**
 * @member {String} label
 */
ValueLabelTemplateAllOf.prototype['label'] = undefined;






export default ValueLabelTemplateAllOf;

