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
import InlineResponse2004DataSensitivitiesBasePointValue from './InlineResponse2004DataSensitivitiesBasePointValue';
import InlineResponse2004DataSensitivitiesConvexity from './InlineResponse2004DataSensitivitiesConvexity';
import InlineResponse2004DataSensitivitiesElasticity from './InlineResponse2004DataSensitivitiesElasticity';
import InlineResponse2004DataSensitivitiesModifiedDuration from './InlineResponse2004DataSensitivitiesModifiedDuration';

/**
 * The InlineResponse2004DataSensitivities model module.
 * @module model/InlineResponse2004DataSensitivities
 * @version 0.9.0
 */
class InlineResponse2004DataSensitivities {
    /**
     * Constructs a new <code>InlineResponse2004DataSensitivities</code>.
     * Value ranges of the price sensitivities of the debt instruments with respect to the prevailing market interest rate.
     * @alias module:model/InlineResponse2004DataSensitivities
     */
    constructor() { 
        
        InlineResponse2004DataSensitivities.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataSensitivities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataSensitivities} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataSensitivities} The populated <code>InlineResponse2004DataSensitivities</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataSensitivities();

            if (data.hasOwnProperty('basePointValue')) {
                obj['basePointValue'] = InlineResponse2004DataSensitivitiesBasePointValue.constructFromObject(data['basePointValue']);
            }
            if (data.hasOwnProperty('modifiedDuration')) {
                obj['modifiedDuration'] = InlineResponse2004DataSensitivitiesModifiedDuration.constructFromObject(data['modifiedDuration']);
            }
            if (data.hasOwnProperty('elasticity')) {
                obj['elasticity'] = InlineResponse2004DataSensitivitiesElasticity.constructFromObject(data['elasticity']);
            }
            if (data.hasOwnProperty('convexity')) {
                obj['convexity'] = InlineResponse2004DataSensitivitiesConvexity.constructFromObject(data['convexity']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004DataSensitivitiesBasePointValue} basePointValue
 */
InlineResponse2004DataSensitivities.prototype['basePointValue'] = undefined;

/**
 * @member {module:model/InlineResponse2004DataSensitivitiesModifiedDuration} modifiedDuration
 */
InlineResponse2004DataSensitivities.prototype['modifiedDuration'] = undefined;

/**
 * @member {module:model/InlineResponse2004DataSensitivitiesElasticity} elasticity
 */
InlineResponse2004DataSensitivities.prototype['elasticity'] = undefined;

/**
 * @member {module:model/InlineResponse2004DataSensitivitiesConvexity} convexity
 */
InlineResponse2004DataSensitivities.prototype['convexity'] = undefined;






export default InlineResponse2004DataSensitivities;
