/**
 * FactSet ESG API
 * FactSet ESG (powered by FactSet Truvalue Labs) applies machine learning to uncover risks and opportunities from companies' Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores. The service focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data.<p> FactSet ESG extracts, analyzes, and generates scores from millions of documents each month collected from more than 100,000 data sources in over 30 languages. Sources include news, trade journals, NGOs, watchdog groups, trade blogs, industry reports and social media. Products deliver investable insights by revealing value and risk factors from unstructured data at the speed of current events.</p> 
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class DateOf.
* @enum {}
* @readonly
*/
export default class DateOf {
    
        /**
         * value: "PUBLICATION"
         * @const
         */
        "PUBLICATION" = "PUBLICATION";

    
        /**
         * value: "INGESTION"
         * @const
         */
        "INGESTION" = "INGESTION";

    

    /**
    * Returns a <code>DateOf</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DateOf} The enum <code>DateOf</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

