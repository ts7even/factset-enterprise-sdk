/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.12.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';

/**
 * The CalculationUnitStatus model module.
 * @module model/CalculationUnitStatus
 */
class CalculationUnitStatus {
    /**
     * Constructs a new <code>CalculationUnitStatus</code>.
     * @alias module:model/CalculationUnitStatus
     */
    constructor() { 
        
        CalculationUnitStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CalculationUnitStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CalculationUnitStatus} obj Optional instance to populate.
     * @return {module:model/CalculationUnitStatus} The populated <code>CalculationUnitStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CalculationUnitStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'String');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The status of calculation unit.
 * @member {module:model/CalculationUnitStatus.StatusEnum} status
 */
CalculationUnitStatus.prototype['status'] = undefined;

/**
 * The error in a calculation unit.
 * @member {Array.<module:model/Error>} errors
 */
CalculationUnitStatus.prototype['errors'] = undefined;

/**
 * The result URL of the calculation.
 * @member {String} result
 */
CalculationUnitStatus.prototype['result'] = undefined;

/**
 * The progress of the calculation unit.
 * @member {String} progress
 */
CalculationUnitStatus.prototype['progress'] = undefined;

/**
 * The points for the calculation unit.
 * @member {Number} points
 */
CalculationUnitStatus.prototype['points'] = undefined;

/**
 * The warnings in a calculation unit.
 * @member {Array.<String>} warnings
 */
CalculationUnitStatus.prototype['warnings'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CalculationUnitStatus['StatusEnum'] = {

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
     * value: "Success"
     * @const
     */
    "Success": "Success",

    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",

    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled"
};



export default CalculationUnitStatus;

