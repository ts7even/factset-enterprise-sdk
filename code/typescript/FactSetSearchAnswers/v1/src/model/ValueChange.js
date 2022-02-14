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
import ChangeColor from './ChangeColor';

/**
 * The ValueChange model module.
 * @module model/ValueChange
 * @version 0.9.1
 */
class ValueChange {
    /**
     * Constructs a new <code>ValueChange</code>.
     * @alias module:model/ValueChange
     */
    constructor() { 
        
        ValueChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValueChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValueChange} obj Optional instance to populate.
     * @return {module:model/ValueChange} The populated <code>ValueChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValueChange();

            if (data.hasOwnProperty('absoluteChange')) {
                obj['absoluteChange'] = ApiClient.convertToType(data['absoluteChange'], 'String');
            }
            if (data.hasOwnProperty('percentageChange')) {
                obj['percentageChange'] = ApiClient.convertToType(data['percentageChange'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ChangeColor.constructFromObject(data['color']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} absoluteChange
 */
ValueChange.prototype['absoluteChange'] = undefined;

/**
 * @member {String} percentageChange
 */
ValueChange.prototype['percentageChange'] = undefined;

/**
 * @member {module:model/ChangeColor} color
 */
ValueChange.prototype['color'] = undefined;






export default ValueChange;

