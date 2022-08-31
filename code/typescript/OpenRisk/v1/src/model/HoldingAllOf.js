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
import SecurityGroup from './SecurityGroup';

/**
 * The HoldingAllOf model module.
 * @module model/HoldingAllOf
 */
class HoldingAllOf {
    /**
     * Constructs a new <code>HoldingAllOf</code>.
     * @alias module:model/HoldingAllOf
     */
    constructor() { 
        
        HoldingAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HoldingAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HoldingAllOf} obj Optional instance to populate.
     * @return {module:model/HoldingAllOf} The populated <code>HoldingAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HoldingAllOf();

            if (data.hasOwnProperty('grouping')) {
                obj['grouping'] = SecurityGroup.constructFromObject(data['grouping']);
            }
            if (data.hasOwnProperty('uncoveredAssets')) {
                obj['uncoveredAssets'] = ApiClient.convertToType(data['uncoveredAssets'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecurityGroup} grouping
 */
HoldingAllOf.prototype['grouping'] = undefined;

/**
 * Uncovered asset weight handling. Default values: 'portfolio' -> ExcludeToGlobalCash, 'benchmark' -> Normalize, 'market' -> Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)
 * @member {module:model/HoldingAllOf.UncoveredAssetsEnum} uncoveredAssets
 */
HoldingAllOf.prototype['uncoveredAssets'] = undefined;





/**
 * Allowed values for the <code>uncoveredAssets</code> property.
 * @enum {String}
 * @readonly
 */
HoldingAllOf['UncoveredAssetsEnum'] = {

    /**
     * value: "Normalize"
     * @const
     */
    "Normalize": "Normalize",

    /**
     * value: "ExcludeToGlobalCash"
     * @const
     */
    "ExcludeToGlobalCash": "ExcludeToGlobalCash",

    /**
     * value: "NormalizeWithGroupCash"
     * @const
     */
    "NormalizeWithGroupCash": "NormalizeWithGroupCash",

    /**
     * value: "ExcludeToCashWithinGroup"
     * @const
     */
    "ExcludeToCashWithinGroup": "ExcludeToCashWithinGroup",

    /**
     * value: "NormalizeWithinGroup"
     * @const
     */
    "NormalizeWithinGroup": "NormalizeWithinGroup"
};



export default HoldingAllOf;

