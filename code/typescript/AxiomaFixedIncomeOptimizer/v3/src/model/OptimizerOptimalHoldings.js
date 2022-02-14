/**
 * AFI Optimizer API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: v3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OptimizerOptimalHoldings model module.
 * @module model/OptimizerOptimalHoldings
 * @version 0.9.1
 */
class OptimizerOptimalHoldings {
    /**
     * Constructs a new <code>OptimizerOptimalHoldings</code>.
     * @alias module:model/OptimizerOptimalHoldings
     */
    constructor() { 
        
        OptimizerOptimalHoldings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerOptimalHoldings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerOptimalHoldings} obj Optional instance to populate.
     * @return {module:model/OptimizerOptimalHoldings} The populated <code>OptimizerOptimalHoldings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerOptimalHoldings();

            if (data.hasOwnProperty('identifierType')) {
                obj['identifierType'] = ApiClient.convertToType(data['identifierType'], 'String');
            }
            if (data.hasOwnProperty('includeCash')) {
                obj['includeCash'] = ApiClient.convertToType(data['includeCash'], 'Boolean');
            }
            if (data.hasOwnProperty('excludeZero')) {
                obj['excludeZero'] = ApiClient.convertToType(data['excludeZero'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Identifier type
 * @member {module:model/OptimizerOptimalHoldings.IdentifierTypeEnum} identifierType
 */
OptimizerOptimalHoldings.prototype['identifierType'] = undefined;

/**
 * Include cash
 * @member {Boolean} includeCash
 */
OptimizerOptimalHoldings.prototype['includeCash'] = undefined;

/**
 * Exclude zero
 * @member {Boolean} excludeZero
 */
OptimizerOptimalHoldings.prototype['excludeZero'] = undefined;





/**
 * Allowed values for the <code>identifierType</code> property.
 * @enum {String}
 * @readonly
 */
OptimizerOptimalHoldings['IdentifierTypeEnum'] = {

    /**
     * value: "Asset"
     * @const
     */
    "Asset": "Asset",

    /**
     * value: "Cusip"
     * @const
     */
    "Cusip": "Cusip",

    /**
     * value: "Isin"
     * @const
     */
    "Isin": "Isin",

    /**
     * value: "RiskModel"
     * @const
     */
    "RiskModel": "RiskModel",

    /**
     * value: "SedolChk"
     * @const
     */
    "SedolChk": "SedolChk",

    /**
     * value: "Sedol"
     * @const
     */
    "Sedol": "Sedol",

    /**
     * value: "SymbologyCusip"
     * @const
     */
    "SymbologyCusip": "SymbologyCusip",

    /**
     * value: "Ticker"
     * @const
     */
    "Ticker": "Ticker",

    /**
     * value: "TickerRegion"
     * @const
     */
    "TickerRegion": "TickerRegion",

    /**
     * value: "User"
     * @const
     */
    "User": "User"
};



export default OptimizerOptimalHoldings;

