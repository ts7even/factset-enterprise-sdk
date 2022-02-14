/**
 * Publisher API
 * Allow clients to fetch Publisher Analytics through APIs.
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
import CalculationUnitStatus from './CalculationUnitStatus';

/**
 * The CalculationStatus model module.
 * @module model/CalculationStatus
 * @version 0.9.1
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

            if (data.hasOwnProperty('calculationid')) {
                obj['calculationid'] = ApiClient.convertToType(data['calculationid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], {'String': CalculationUnitStatus});
            }
        }
        return obj;
    }


}

/**
 * @member {String} calculationid
 */
CalculationStatus.prototype['calculationid'] = undefined;

/**
 * @member {module:model/CalculationStatus.StatusEnum} status
 */
CalculationStatus.prototype['status'] = undefined;

/**
 * Number of calculation units in batch.
 * @member {Object.<String, module:model/CalculationUnitStatus>} units
 */
CalculationStatus.prototype['units'] = undefined;





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

