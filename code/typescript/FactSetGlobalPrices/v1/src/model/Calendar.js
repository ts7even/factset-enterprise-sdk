/**
 * FactSet Global Prices API
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class Calendar.
* @enum {}
* @readonly
*/
export default class Calendar {
    
        /**
         * value: "FIVEDAY"
         * @const
         */
        "FIVEDAY" = "FIVEDAY";

    
        /**
         * value: "SEVENDAY"
         * @const
         */
        "SEVENDAY" = "SEVENDAY";

    
        /**
         * value: "LOCAL"
         * @const
         */
        "LOCAL" = "LOCAL";

    

    /**
    * Returns a <code>Calendar</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Calendar} The enum <code>Calendar</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
