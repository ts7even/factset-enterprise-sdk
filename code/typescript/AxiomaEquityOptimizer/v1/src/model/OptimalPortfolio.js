/**
 * Engines API
 * Allow clients to fetch Engines Analytics through APIs.
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

/**
 * The OptimalPortfolio model module.
 * @module model/OptimalPortfolio
 * @version 0.8.0
 */
class OptimalPortfolio {
    /**
     * Constructs a new <code>OptimalPortfolio</code>.
     * @alias module:model/OptimalPortfolio
     */
    constructor() { 
        
        OptimalPortfolio.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimalPortfolio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimalPortfolio} obj Optional instance to populate.
     * @return {module:model/OptimalPortfolio} The populated <code>OptimalPortfolio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimalPortfolio();

            if (data.hasOwnProperty('acctname')) {
                obj['acctname'] = ApiClient.convertToType(data['acctname'], 'String');
            }
            if (data.hasOwnProperty('excludezero')) {
                obj['excludezero'] = ApiClient.convertToType(data['excludezero'], 'Boolean');
            }
            if (data.hasOwnProperty('archivedate')) {
                obj['archivedate'] = ApiClient.convertToType(data['archivedate'], 'String');
            }
            if (data.hasOwnProperty('ifacctexists')) {
                obj['ifacctexists'] = ApiClient.convertToType(data['ifacctexists'], 'String');
            }
            if (data.hasOwnProperty('ifofdbdateexists')) {
                obj['ifofdbdateexists'] = ApiClient.convertToType(data['ifofdbdateexists'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Account path
 * @member {String} acctname
 */
OptimalPortfolio.prototype['acctname'] = undefined;

/**
 * Exclude zero
 * @member {Boolean} excludezero
 */
OptimalPortfolio.prototype['excludezero'] = undefined;

/**
 * Archive date
 * @member {String} archivedate
 */
OptimalPortfolio.prototype['archivedate'] = undefined;

/**
 * Archive action if account exists
 * @member {module:model/OptimalPortfolio.IfacctexistsEnum} ifacctexists
 */
OptimalPortfolio.prototype['ifacctexists'] = undefined;

/**
 * Action if ofdb date exists
 * @member {module:model/OptimalPortfolio.IfofdbdateexistsEnum} ifofdbdateexists
 */
OptimalPortfolio.prototype['ifofdbdateexists'] = undefined;





/**
 * Allowed values for the <code>ifacctexists</code> property.
 * @enum {String}
 * @readonly
 */
OptimalPortfolio['IfacctexistsEnum'] = {

    /**
     * value: "abort"
     * @const
     */
    "abort": "abort",

    /**
     * value: "overwrite"
     * @const
     */
    "overwrite": "overwrite",

    /**
     * value: "appenddate"
     * @const
     */
    "appenddate": "appenddate"
};


/**
 * Allowed values for the <code>ifofdbdateexists</code> property.
 * @enum {String}
 * @readonly
 */
OptimalPortfolio['IfofdbdateexistsEnum'] = {

    /**
     * value: "abort"
     * @const
     */
    "abort": "abort",

    /**
     * value: "replacedate"
     * @const
     */
    "replacedate": "replacedate",

    /**
     * value: "appendsecurities"
     * @const
     */
    "appendsecurities": "appendsecurities"
};



export default OptimalPortfolio;
