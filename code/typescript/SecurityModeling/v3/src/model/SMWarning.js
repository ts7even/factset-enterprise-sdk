/**
 * Security-Modeling API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SMWarning model module.
 * @module model/SMWarning
 */
class SMWarning {
    /**
     * Constructs a new <code>SMWarning</code>.
     * @alias module:model/SMWarning
     */
    constructor() { 
        
        SMWarning.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SMWarning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SMWarning} obj Optional instance to populate.
     * @return {module:model/SMWarning} The populated <code>SMWarning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SMWarning();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} detail
 */
SMWarning.prototype['detail'] = undefined;






export default SMWarning;
