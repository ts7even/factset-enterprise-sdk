/**
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EMSOrders from './EMSOrders';

/**
 * The EMSOrdersDataMetaModel model module.
 * @module model/EMSOrdersDataMetaModel
 */
class EMSOrdersDataMetaModel {
    /**
     * Constructs a new <code>EMSOrdersDataMetaModel</code>.
     * @alias module:model/EMSOrdersDataMetaModel
     */
    constructor() { 
        
        EMSOrdersDataMetaModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EMSOrdersDataMetaModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EMSOrdersDataMetaModel} obj Optional instance to populate.
     * @return {module:model/EMSOrdersDataMetaModel} The populated <code>EMSOrdersDataMetaModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EMSOrdersDataMetaModel();

            if (data.hasOwnProperty('data')) {
                obj['data'] = EMSOrders.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EMSOrders} data
 */
EMSOrdersDataMetaModel.prototype['data'] = undefined;






export default EMSOrdersDataMetaModel;

