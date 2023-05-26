/**
 * Signals API
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: signals.api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EventsMetaPagination model module.
 * @module model/EventsMetaPagination
 */
class EventsMetaPagination {
    /**
     * Constructs a new <code>EventsMetaPagination</code>.
     * @alias module:model/EventsMetaPagination
     */
    constructor() { 
        
        EventsMetaPagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventsMetaPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsMetaPagination} obj Optional instance to populate.
     * @return {module:model/EventsMetaPagination} The populated <code>EventsMetaPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventsMetaPagination();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('isEstimatedTotal')) {
                obj['isEstimatedTotal'] = ApiClient.convertToType(data['isEstimatedTotal'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total
 */
EventsMetaPagination.prototype['total'] = undefined;

/**
 * @member {Boolean} isEstimatedTotal
 */
EventsMetaPagination.prototype['isEstimatedTotal'] = undefined;






export default EventsMetaPagination;

