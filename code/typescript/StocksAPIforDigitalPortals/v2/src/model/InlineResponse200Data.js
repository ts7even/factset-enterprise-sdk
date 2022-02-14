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
import InlineResponse200Currency from './InlineResponse200Currency';
import InlineResponse200Dates from './InlineResponse200Dates';
import InlineResponse200Gross from './InlineResponse200Gross';
import InlineResponse200Occurrence from './InlineResponse200Occurrence';
import InlineResponse200Type from './InlineResponse200Type';

/**
 * The InlineResponse200Data model module.
 * @module model/InlineResponse200Data
 * @version 0.9.1
 */
class InlineResponse200Data {
    /**
     * Constructs a new <code>InlineResponse200Data</code>.
     * @alias module:model/InlineResponse200Data
     */
    constructor() { 
        
        InlineResponse200Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse200Data} The populated <code>InlineResponse200Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = InlineResponse200Type.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('occurrence')) {
                obj['occurrence'] = InlineResponse200Occurrence.constructFromObject(data['occurrence']);
            }
            if (data.hasOwnProperty('dates')) {
                obj['dates'] = InlineResponse200Dates.constructFromObject(data['dates']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = InlineResponse200Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('gross')) {
                obj['gross'] = InlineResponse200Gross.constructFromObject(data['gross']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of a dividend.
 * @member {String} id
 */
InlineResponse200Data.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse200Type} type
 */
InlineResponse200Data.prototype['type'] = undefined;

/**
 * @member {module:model/InlineResponse200Occurrence} occurrence
 */
InlineResponse200Data.prototype['occurrence'] = undefined;

/**
 * @member {module:model/InlineResponse200Dates} dates
 */
InlineResponse200Data.prototype['dates'] = undefined;

/**
 * @member {module:model/InlineResponse200Currency} currency
 */
InlineResponse200Data.prototype['currency'] = undefined;

/**
 * @member {module:model/InlineResponse200Gross} gross
 */
InlineResponse200Data.prototype['gross'] = undefined;






export default InlineResponse200Data;

