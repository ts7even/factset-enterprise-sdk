/**
 * FactSet Funds API
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class DividendAdjust.
* @enum {}
* @readonly
*/
export default class DividendAdjust {
    
        /**
         * value: "DIV"
         * @const
         */
        "DIV" = "DIV";

    
        /**
         * value: "NO_DIV"
         * @const
         */
        "NO_DIV" = "NO_DIV";

    

    /**
    * Returns a <code>DividendAdjust</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DividendAdjust} The enum <code>DividendAdjust</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
