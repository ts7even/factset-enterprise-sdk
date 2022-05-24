/**
 * VRS API documentation
 * Documentation on all available end points in the VRSAPI
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
 * The DataSourceListMetaPagination model module.
 * @module model/DataSourceListMetaPagination
 * @version 0.9.0
 */
class DataSourceListMetaPagination {
    /**
     * Constructs a new <code>DataSourceListMetaPagination</code>.
     * @alias module:model/DataSourceListMetaPagination
     */
    constructor() { 
        
        DataSourceListMetaPagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataSourceListMetaPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataSourceListMetaPagination} obj Optional instance to populate.
     * @return {module:model/DataSourceListMetaPagination} The populated <code>DataSourceListMetaPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSourceListMetaPagination();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('isEstimatedTotal')) {
                obj['isEstimatedTotal'] = ApiClient.convertToType(data['isEstimatedTotal'], 'Boolean');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} total
 */
DataSourceListMetaPagination.prototype['total'] = undefined;

/**
 * @member {Boolean} isEstimatedTotal
 */
DataSourceListMetaPagination.prototype['isEstimatedTotal'] = undefined;

/**
 * @member {String} next
 */
DataSourceListMetaPagination.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
DataSourceListMetaPagination.prototype['previous'] = undefined;






export default DataSourceListMetaPagination;
