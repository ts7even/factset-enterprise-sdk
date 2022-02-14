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
 * The BasicValueUnitListDataFilter model module.
 * @module model/BasicValueUnitListDataFilter
 * @version 0.9.1
 */
class BasicValueUnitListDataFilter {
    /**
     * Constructs a new <code>BasicValueUnitListDataFilter</code>.
     * Criteria that filter the items in the response list; only items that match all of the criteria are returned.
     * @alias module:model/BasicValueUnitListDataFilter
     */
    constructor() { 
        
        BasicValueUnitListDataFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicValueUnitListDataFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicValueUnitListDataFilter} obj Optional instance to populate.
     * @return {module:model/BasicValueUnitListDataFilter} The populated <code>BasicValueUnitListDataFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicValueUnitListDataFilter();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Filter for the status.
 * @member {module:model/BasicValueUnitListDataFilter.StatusEnum} status
 * @default 'active'
 */
BasicValueUnitListDataFilter.prototype['status'] = 'active';





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BasicValueUnitListDataFilter['StatusEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};



export default BasicValueUnitListDataFilter;

