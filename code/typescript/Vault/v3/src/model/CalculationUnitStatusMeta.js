/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CalculationUnitStatusMeta model module.
 * @module model/CalculationUnitStatusMeta
 */
class CalculationUnitStatusMeta {
    /**
     * Constructs a new <code>CalculationUnitStatusMeta</code>.
     * @alias module:model/CalculationUnitStatusMeta
     */
    constructor() { 
        
        CalculationUnitStatusMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CalculationUnitStatusMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CalculationUnitStatusMeta} obj Optional instance to populate.
     * @return {module:model/CalculationUnitStatusMeta} The populated <code>CalculationUnitStatusMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CalculationUnitStatusMeta();

            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Info URL of the calculation.
 * @member {String} info
 */
CalculationUnitStatusMeta.prototype['info'] = undefined;






export default CalculationUnitStatusMeta;

