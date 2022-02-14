/**
 * SPAR Engine API
 * Allow clients to fetch SPAR Engine Analytics through APIs.
 *
 * The version of the OpenAPI document: 2
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PubDateParameters model module.
 * @module model/PubDateParameters
 * @version 0.8.1
 */
class PubDateParameters {
    /**
     * Constructs a new <code>PubDateParameters</code>.
     * The date parameters for Publisher calculation.
     * @alias module:model/PubDateParameters
     * @param enddate {String} Calculation's end date or as of date.
     */
    constructor(enddate) { 
        
        PubDateParameters.initialize(this, enddate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enddate) { 
        obj['enddate'] = enddate;
    }

    /**
     * Constructs a <code>PubDateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PubDateParameters} obj Optional instance to populate.
     * @return {module:model/PubDateParameters} The populated <code>PubDateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PubDateParameters();

            if (data.hasOwnProperty('startdate')) {
                obj['startdate'] = ApiClient.convertToType(data['startdate'], 'String');
            }
            if (data.hasOwnProperty('enddate')) {
                obj['enddate'] = ApiClient.convertToType(data['enddate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Calculation's start date.
 * @member {String} startdate
 */
PubDateParameters.prototype['startdate'] = undefined;

/**
 * Calculation's end date or as of date.
 * @member {String} enddate
 */
PubDateParameters.prototype['enddate'] = undefined;






export default PubDateParameters;

