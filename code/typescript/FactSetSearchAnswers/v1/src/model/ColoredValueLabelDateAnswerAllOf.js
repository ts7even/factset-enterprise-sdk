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
import ColoredValueLabelDateTemplateData from './ColoredValueLabelDateTemplateData';

/**
 * The ColoredValueLabelDateAnswerAllOf model module.
 * @module model/ColoredValueLabelDateAnswerAllOf
 */
class ColoredValueLabelDateAnswerAllOf {
    /**
     * Constructs a new <code>ColoredValueLabelDateAnswerAllOf</code>.
     * @alias module:model/ColoredValueLabelDateAnswerAllOf
     * @param templateData {module:model/ColoredValueLabelDateTemplateData} 
     */
    constructor(templateData) { 
        
        ColoredValueLabelDateAnswerAllOf.initialize(this, templateData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, templateData) { 
        obj['templateData'] = templateData;
    }

    /**
     * Constructs a <code>ColoredValueLabelDateAnswerAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ColoredValueLabelDateAnswerAllOf} obj Optional instance to populate.
     * @return {module:model/ColoredValueLabelDateAnswerAllOf} The populated <code>ColoredValueLabelDateAnswerAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ColoredValueLabelDateAnswerAllOf();

            if (data.hasOwnProperty('templateData')) {
                obj['templateData'] = ColoredValueLabelDateTemplateData.constructFromObject(data['templateData']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ColoredValueLabelDateTemplateData} templateData
 */
ColoredValueLabelDateAnswerAllOf.prototype['templateData'] = undefined;






export default ColoredValueLabelDateAnswerAllOf;
