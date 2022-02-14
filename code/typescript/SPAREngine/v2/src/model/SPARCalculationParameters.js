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
import SPARDateParameters from './SPARDateParameters';
import SPARIdentifier from './SPARIdentifier';

/**
 * The SPARCalculationParameters model module.
 * @module model/SPARCalculationParameters
 * @version 0.8.1
 */
class SPARCalculationParameters {
    /**
     * Constructs a new <code>SPARCalculationParameters</code>.
     * @alias module:model/SPARCalculationParameters
     * @param componentid {String} The SPAR Engine component identifier to analyze.
     */
    constructor(componentid) { 
        
        SPARCalculationParameters.initialize(this, componentid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, componentid) { 
        obj['componentid'] = componentid;
    }

    /**
     * Constructs a <code>SPARCalculationParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SPARCalculationParameters} obj Optional instance to populate.
     * @return {module:model/SPARCalculationParameters} The populated <code>SPARCalculationParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SPARCalculationParameters();

            if (data.hasOwnProperty('componentid')) {
                obj['componentid'] = ApiClient.convertToType(data['componentid'], 'String');
            }
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [SPARIdentifier]);
            }
            if (data.hasOwnProperty('benchmark')) {
                obj['benchmark'] = SPARIdentifier.constructFromObject(data['benchmark']);
            }
            if (data.hasOwnProperty('dates')) {
                obj['dates'] = SPARDateParameters.constructFromObject(data['dates']);
            }
        }
        return obj;
    }


}

/**
 * The SPAR Engine component identifier to analyze.
 * @member {String} componentid
 */
SPARCalculationParameters.prototype['componentid'] = undefined;

/**
 * List of accounts for SPAR calculation.
 * @member {Array.<module:model/SPARIdentifier>} accounts
 */
SPARCalculationParameters.prototype['accounts'] = undefined;

/**
 * @member {module:model/SPARIdentifier} benchmark
 */
SPARCalculationParameters.prototype['benchmark'] = undefined;

/**
 * @member {module:model/SPARDateParameters} dates
 */
SPARCalculationParameters.prototype['dates'] = undefined;






export default SPARCalculationParameters;

