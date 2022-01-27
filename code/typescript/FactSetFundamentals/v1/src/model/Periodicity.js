/**
 * FactSet Fundamentals API
 * Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class Periodicity.
* @enum {}
* @readonly
*/
export default class Periodicity {
    
        /**
         * value: "ANN"
         * @const
         */
        "ANN" = "ANN";

    
        /**
         * value: "ANN_R"
         * @const
         */
        "ANN_R" = "ANN_R";

    
        /**
         * value: "QTR"
         * @const
         */
        "QTR" = "QTR";

    
        /**
         * value: "QTR_R"
         * @const
         */
        "QTR_R" = "QTR_R";

    
        /**
         * value: "SEMI"
         * @const
         */
        "SEMI" = "SEMI";

    
        /**
         * value: "LTM"
         * @const
         */
        "LTM" = "LTM";

    
        /**
         * value: "LTMSG"
         * @const
         */
        "LTMSG" = "LTMSG";

    
        /**
         * value: "YTD"
         * @const
         */
        "YTD" = "YTD";

    

    /**
    * Returns a <code>Periodicity</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Periodicity} The enum <code>Periodicity</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
