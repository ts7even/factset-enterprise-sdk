/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import StatCalculationLevel from './StatCalculationLevel';
import StatCalculationSettings from './StatCalculationSettings';

/**
 * The Stat model module.
 * @module model/Stat
 */
class Stat {
    /**
     * Constructs a new <code>Stat</code>.
     * Risk statistic name and calculation level plus optional stat settings
     * @alias module:model/Stat
     * @param name {String} 
     * @param level {module:model/StatCalculationLevel} 
     */
    constructor(name, level) { 
        
        Stat.initialize(this, name, level);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, level) { 
        obj['name'] = name;
        obj['level'] = level;
    }

    /**
     * Constructs a <code>Stat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stat} obj Optional instance to populate.
     * @return {module:model/Stat} The populated <code>Stat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stat();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = StatCalculationLevel.constructFromObject(data['level']);
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = StatCalculationSettings.constructFromObject(data['settings']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Stat.prototype['name'] = undefined;

/**
 * @member {module:model/StatCalculationLevel} level
 */
Stat.prototype['level'] = undefined;

/**
 * @member {module:model/StatCalculationSettings} settings
 */
Stat.prototype['settings'] = undefined;






export default Stat;

