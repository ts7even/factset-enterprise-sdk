/**
 * Barra Portfolio Optimizer API
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
 * The ErrorSource model module.
 * @module model/ErrorSource
 * @version 0.9.1
 */
class ErrorSource {
    /**
     * Constructs a new <code>ErrorSource</code>.
     * @alias module:model/ErrorSource
     */
    constructor() { 
        
        ErrorSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorSource} obj Optional instance to populate.
     * @return {module:model/ErrorSource} The populated <code>ErrorSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorSource();

            if (data.hasOwnProperty('pointer')) {
                obj['pointer'] = ApiClient.convertToType(data['pointer'], 'String');
            }
            if (data.hasOwnProperty('parameter')) {
                obj['parameter'] = ApiClient.convertToType(data['parameter'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} pointer
 */
ErrorSource.prototype['pointer'] = undefined;

/**
 * @member {String} parameter
 */
ErrorSource.prototype['parameter'] = undefined;






export default ErrorSource;

