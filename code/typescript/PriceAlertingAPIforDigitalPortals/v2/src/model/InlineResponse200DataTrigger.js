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
import InlineResponse200DataTriggerNotation from './InlineResponse200DataTriggerNotation';
import InlineResponse200DataTriggerPrice from './InlineResponse200DataTriggerPrice';
import InlineResponse200DataTriggerRange from './InlineResponse200DataTriggerRange';
import InlineResponse200DataTriggerStatus from './InlineResponse200DataTriggerStatus';

/**
 * The InlineResponse200DataTrigger model module.
 * @module model/InlineResponse200DataTrigger
 * @version 0.9.0
 */
class InlineResponse200DataTrigger {
    /**
     * Constructs a new <code>InlineResponse200DataTrigger</code>.
     * Trigger data at the time of alert creation.
     * @alias module:model/InlineResponse200DataTrigger
     */
    constructor() { 
        
        InlineResponse200DataTrigger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataTrigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataTrigger} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataTrigger} The populated <code>InlineResponse200DataTrigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataTrigger();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('creation')) {
                obj['creation'] = ApiClient.convertToType(data['creation'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = InlineResponse200DataTriggerNotation.constructFromObject(data['notation']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = InlineResponse200DataTriggerPrice.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('range')) {
                obj['range'] = InlineResponse200DataTriggerRange.constructFromObject(data['range']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InlineResponse200DataTriggerStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the trigger.
 * @member {String} id
 */
InlineResponse200DataTrigger.prototype['id'] = undefined;

/**
 * Date and time when the trigger was created.
 * @member {String} creation
 */
InlineResponse200DataTrigger.prototype['creation'] = undefined;

/**
 * @member {module:model/InlineResponse200DataTriggerNotation} notation
 */
InlineResponse200DataTrigger.prototype['notation'] = undefined;

/**
 * @member {module:model/InlineResponse200DataTriggerPrice} price
 */
InlineResponse200DataTrigger.prototype['price'] = undefined;

/**
 * @member {module:model/InlineResponse200DataTriggerRange} range
 */
InlineResponse200DataTrigger.prototype['range'] = undefined;

/**
 * Comment of the trigger.
 * @member {String} comment
 */
InlineResponse200DataTrigger.prototype['comment'] = undefined;

/**
 * @member {module:model/InlineResponse200DataTriggerStatus} status
 */
InlineResponse200DataTrigger.prototype['status'] = undefined;






export default InlineResponse200DataTrigger;
