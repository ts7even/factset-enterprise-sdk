/**
 * VRS API documentation
 * Documentation on all available end points in the VRSAPI
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ReportInstancesGenerateVrsInstanceId from './V1ReportInstancesGenerateVrsInstanceId';

/**
 * The V1ReportInstancesGenerateVrs model module.
 * @module model/V1ReportInstancesGenerateVrs
 * @version 0.9.0
 */
class V1ReportInstancesGenerateVrs {
    /**
     * Constructs a new <code>V1ReportInstancesGenerateVrs</code>.
     * @alias module:model/V1ReportInstancesGenerateVrs
     */
    constructor() { 
        
        V1ReportInstancesGenerateVrs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ReportInstancesGenerateVrs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ReportInstancesGenerateVrs} obj Optional instance to populate.
     * @return {module:model/V1ReportInstancesGenerateVrs} The populated <code>V1ReportInstancesGenerateVrs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ReportInstancesGenerateVrs();

            if (data.hasOwnProperty('instanceId')) {
                obj['instanceId'] = V1ReportInstancesGenerateVrsInstanceId.constructFromObject(data['instanceId']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1ReportInstancesGenerateVrsInstanceId} instanceId
 */
V1ReportInstancesGenerateVrs.prototype['instanceId'] = undefined;






export default V1ReportInstancesGenerateVrs;
