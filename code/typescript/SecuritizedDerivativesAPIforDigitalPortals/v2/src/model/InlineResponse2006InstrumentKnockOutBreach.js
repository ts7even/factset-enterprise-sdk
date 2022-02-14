/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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

/**
 * The InlineResponse2006InstrumentKnockOutBreach model module.
 * @module model/InlineResponse2006InstrumentKnockOutBreach
 * @version 0.9.1
 */
class InlineResponse2006InstrumentKnockOutBreach {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentKnockOutBreach</code>.
     * Information whether or not, and if yes - when a barrier breach has occurred.
     * @alias module:model/InlineResponse2006InstrumentKnockOutBreach
     */
    constructor() { 
        
        InlineResponse2006InstrumentKnockOutBreach.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentKnockOutBreach</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentKnockOutBreach} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentKnockOutBreach} The populated <code>InlineResponse2006InstrumentKnockOutBreach</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentKnockOutBreach();

            if (data.hasOwnProperty('breached')) {
                obj['breached'] = ApiClient.convertToType(data['breached'], 'Boolean');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'String');
            }
        }
        return obj;
    }


}

/**
 * If `true`, the barrier has been breached.
 * @member {Boolean} breached
 */
InlineResponse2006InstrumentKnockOutBreach.prototype['breached'] = undefined;

/**
 * Date and time of the breach.
 * @member {String} datetime
 */
InlineResponse2006InstrumentKnockOutBreach.prototype['datetime'] = undefined;






export default InlineResponse2006InstrumentKnockOutBreach;

