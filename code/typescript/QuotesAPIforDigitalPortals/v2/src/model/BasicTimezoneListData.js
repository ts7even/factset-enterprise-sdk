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
import BasicTimezoneListDataFilter from './BasicTimezoneListDataFilter';

/**
 * The BasicTimezoneListData model module.
 * @module model/BasicTimezoneListData
 * @version 0.9.1
 */
class BasicTimezoneListData {
    /**
     * Constructs a new <code>BasicTimezoneListData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/BasicTimezoneListData
     */
    constructor() { 
        
        BasicTimezoneListData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicTimezoneListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicTimezoneListData} obj Optional instance to populate.
     * @return {module:model/BasicTimezoneListData} The populated <code>BasicTimezoneListData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicTimezoneListData();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = BasicTimezoneListDataFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BasicTimezoneListDataFilter} filter
 */
BasicTimezoneListData.prototype['filter'] = undefined;






export default BasicTimezoneListData;

