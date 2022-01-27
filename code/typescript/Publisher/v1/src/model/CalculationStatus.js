/**
 * Publisher API
 * Allow clients to fetch Publisher Analytics through APIs.
 *
 * The version of the OpenAPI document: 2
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CalculationUnitStatus from './CalculationUnitStatus';

/**
 * The CalculationStatus model module.
 * @module model/CalculationStatus
 * @version 0.8.0
 */
class CalculationStatus {
    /**
     * Constructs a new <code>CalculationStatus</code>.
     * @alias module:model/CalculationStatus
     */
    constructor() { 
        
        CalculationStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CalculationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CalculationStatus} obj Optional instance to populate.
     * @return {module:model/CalculationStatus} The populated <code>CalculationStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CalculationStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
            if (data.hasOwnProperty('pa')) {
                obj['pa'] = ApiClient.convertToType(data['pa'], {'String': CalculationUnitStatus});
            }
            if (data.hasOwnProperty('spar')) {
                obj['spar'] = ApiClient.convertToType(data['spar'], {'String': CalculationUnitStatus});
            }
            if (data.hasOwnProperty('vault')) {
                obj['vault'] = ApiClient.convertToType(data['vault'], {'String': CalculationUnitStatus});
            }
            if (data.hasOwnProperty('pub')) {
                obj['pub'] = ApiClient.convertToType(data['pub'], {'String': CalculationUnitStatus});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CalculationStatus.StatusEnum} status
 */
CalculationStatus.prototype['status'] = undefined;

/**
 * Number of calculation units in batch.
 * @member {Number} units
 */
CalculationStatus.prototype['units'] = undefined;

/**
 * List of statuses for PA calculation units.
 * @member {Object.<String, module:model/CalculationUnitStatus>} pa
 */
CalculationStatus.prototype['pa'] = undefined;

/**
 * List of statuses for SPAR calculation units.
 * @member {Object.<String, module:model/CalculationUnitStatus>} spar
 */
CalculationStatus.prototype['spar'] = undefined;

/**
 * List of statuses for Vault calculation units.
 * @member {Object.<String, module:model/CalculationUnitStatus>} vault
 */
CalculationStatus.prototype['vault'] = undefined;

/**
 * List of statuses for Publisher calculation units.
 * @member {Object.<String, module:model/CalculationUnitStatus>} pub
 */
CalculationStatus.prototype['pub'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CalculationStatus['StatusEnum'] = {

    /**
     * value: "Queued"
     * @const
     */
    "Queued": "Queued",

    /**
     * value: "Executing"
     * @const
     */
    "Executing": "Executing",

    /**
     * value: "Completed"
     * @const
     */
    "Completed": "Completed",

    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled"
};



export default CalculationStatus;
