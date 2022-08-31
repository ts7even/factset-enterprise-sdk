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
import GroupsLabels from './GroupsLabels';
import LabelsFactor from './LabelsFactor';
import LabelsSecurity from './LabelsSecurity';

/**
 * The Labels model module.
 * @module model/Labels
 */
class Labels {
    /**
     * Constructs a new <code>Labels</code>.
     * Labeling and index information to be able to reconstruct the calculated data results to the provided inputs from the request. Only contains items relevant to results; will not be present at all if all calculation-levels are &#39;Portfolio&#39;.
     * @alias module:model/Labels
     */
    constructor() { 
        
        Labels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Labels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Labels} obj Optional instance to populate.
     * @return {module:model/Labels} The populated <code>Labels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Labels();

            if (data.hasOwnProperty('security')) {
                obj['security'] = LabelsSecurity.constructFromObject(data['security']);
            }
            if (data.hasOwnProperty('factor')) {
                obj['factor'] = LabelsFactor.constructFromObject(data['factor']);
            }
            if (data.hasOwnProperty('securityGroup')) {
                obj['securityGroup'] = GroupsLabels.constructFromObject(data['securityGroup']);
            }
            if (data.hasOwnProperty('factorGroup')) {
                obj['factorGroup'] = GroupsLabels.constructFromObject(data['factorGroup']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LabelsSecurity} security
 */
Labels.prototype['security'] = undefined;

/**
 * @member {module:model/LabelsFactor} factor
 */
Labels.prototype['factor'] = undefined;

/**
 * @member {module:model/GroupsLabels} securityGroup
 */
Labels.prototype['securityGroup'] = undefined;

/**
 * @member {module:model/GroupsLabels} factorGroup
 */
Labels.prototype['factorGroup'] = undefined;






export default Labels;

