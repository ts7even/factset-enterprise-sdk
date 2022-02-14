/**
 * PA Engine API
 * Allow clients to fetch Analytics through APIs.
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

/**
 * The Column model module.
 * @module model/Column
 * @version 0.9.1
 */
class Column {
    /**
     * Constructs a new <code>Column</code>.
     * @alias module:model/Column
     */
    constructor() { 
        
        Column.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Column</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Column} obj Optional instance to populate.
     * @return {module:model/Column} The populated <code>Column</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Column();

            if (data.hasOwnProperty('defaultstatisticsids')) {
                obj['defaultstatisticsids'] = ApiClient.convertToType(data['defaultstatisticsids'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('directory')) {
                obj['directory'] = ApiClient.convertToType(data['directory'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Column statistic Id
 * @member {Array.<String>} defaultstatisticsids
 */
Column.prototype['defaultstatisticsids'] = undefined;

/**
 * Column Name
 * @member {String} name
 */
Column.prototype['name'] = undefined;

/**
 * Column Directory
 * @member {String} directory
 */
Column.prototype['directory'] = undefined;

/**
 * Column Category
 * @member {String} category
 */
Column.prototype['category'] = undefined;






export default Column;

