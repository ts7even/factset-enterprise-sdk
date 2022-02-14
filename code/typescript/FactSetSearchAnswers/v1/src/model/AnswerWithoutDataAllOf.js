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
import AnswerWithoutDataAllOfTemplateData from './AnswerWithoutDataAllOfTemplateData';

/**
 * The AnswerWithoutDataAllOf model module.
 * @module model/AnswerWithoutDataAllOf
 * @version 0.9.1
 */
class AnswerWithoutDataAllOf {
    /**
     * Constructs a new <code>AnswerWithoutDataAllOf</code>.
     * @alias module:model/AnswerWithoutDataAllOf
     * @param title {String} 
     */
    constructor(title) { 
        
        AnswerWithoutDataAllOf.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>AnswerWithoutDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnswerWithoutDataAllOf} obj Optional instance to populate.
     * @return {module:model/AnswerWithoutDataAllOf} The populated <code>AnswerWithoutDataAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnswerWithoutDataAllOf();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('templateData')) {
                obj['templateData'] = AnswerWithoutDataAllOfTemplateData.constructFromObject(data['templateData']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
AnswerWithoutDataAllOf.prototype['title'] = undefined;

/**
 * @member {module:model/AnswerWithoutDataAllOfTemplateData} templateData
 */
AnswerWithoutDataAllOf.prototype['templateData'] = undefined;






export default AnswerWithoutDataAllOf;

