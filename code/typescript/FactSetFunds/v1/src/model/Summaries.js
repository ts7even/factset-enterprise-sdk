/**
 * FactSet Funds API
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Summaries model module.
 * @module model/Summaries
 * @version 0.9.0
 */
class Summaries {
    /**
     * Constructs a new <code>Summaries</code>.
     * @alias module:model/Summaries
     */
    constructor() { 
        
        Summaries.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Summaries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summaries} obj Optional instance to populate.
     * @return {module:model/Summaries} The populated <code>Summaries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Summaries();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('fsymEntityId')) {
                obj['fsymEntityId'] = ApiClient.convertToType(data['fsymEntityId'], 'String');
            }
            if (data.hasOwnProperty('fsymRegionalId')) {
                obj['fsymRegionalId'] = ApiClient.convertToType(data['fsymRegionalId'], 'String');
            }
            if (data.hasOwnProperty('fsymTickerRegion')) {
                obj['fsymTickerRegion'] = ApiClient.convertToType(data['fsymTickerRegion'], 'String');
            }
            if (data.hasOwnProperty('fsymUltimateParentId')) {
                obj['fsymUltimateParentId'] = ApiClient.convertToType(data['fsymUltimateParentId'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('activeFlag')) {
                obj['activeFlag'] = ApiClient.convertToType(data['activeFlag'], 'Number');
            }
            if (data.hasOwnProperty('activelyManagedFlag')) {
                obj['activelyManagedFlag'] = ApiClient.convertToType(data['activelyManagedFlag'], 'Number');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('countryDomicile')) {
                obj['countryDomicile'] = ApiClient.convertToType(data['countryDomicile'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('descInfo')) {
                obj['descInfo'] = ApiClient.convertToType(data['descInfo'], 'String');
            }
            if (data.hasOwnProperty('fundOfFundsId')) {
                obj['fundOfFundsId'] = ApiClient.convertToType(data['fundOfFundsId'], 'String');
            }
            if (data.hasOwnProperty('inceptionDate')) {
                obj['inceptionDate'] = ApiClient.convertToType(data['inceptionDate'], 'String');
            }
            if (data.hasOwnProperty('insight')) {
                obj['insight'] = ApiClient.convertToType(data['insight'], 'String');
            }
            if (data.hasOwnProperty('issuerId')) {
                obj['issuerId'] = ApiClient.convertToType(data['issuerId'], 'String');
            }
            if (data.hasOwnProperty('issuerName')) {
                obj['issuerName'] = ApiClient.convertToType(data['issuerName'], 'String');
            }
            if (data.hasOwnProperty('legalStructure')) {
                obj['legalStructure'] = ApiClient.convertToType(data['legalStructure'], 'String');
            }
            if (data.hasOwnProperty('leverageFactor')) {
                obj['leverageFactor'] = ApiClient.convertToType(data['leverageFactor'], 'Number');
            }
            if (data.hasOwnProperty('leverageInverse')) {
                obj['leverageInverse'] = ApiClient.convertToType(data['leverageInverse'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('navCurrency')) {
                obj['navCurrency'] = ApiClient.convertToType(data['navCurrency'], 'String');
            }
            if (data.hasOwnProperty('objective')) {
                obj['objective'] = ApiClient.convertToType(data['objective'], 'String');
            }
            if (data.hasOwnProperty('priceFirstDate')) {
                obj['priceFirstDate'] = ApiClient.convertToType(data['priceFirstDate'], 'String');
            }
            if (data.hasOwnProperty('priceRecentDate')) {
                obj['priceRecentDate'] = ApiClient.convertToType(data['priceRecentDate'], 'String');
            }
            if (data.hasOwnProperty('shrClass')) {
                obj['shrClass'] = ApiClient.convertToType(data['shrClass'], 'String');
            }
            if (data.hasOwnProperty('shrClassActiveFlag')) {
                obj['shrClassActiveFlag'] = ApiClient.convertToType(data['shrClassActiveFlag'], 'Number');
            }
            if (data.hasOwnProperty('shrClsCurrency')) {
                obj['shrClsCurrency'] = ApiClient.convertToType(data['shrClsCurrency'], 'String');
            }
            if (data.hasOwnProperty('shrClsInceptDate')) {
                obj['shrClsInceptDate'] = ApiClient.convertToType(data['shrClsInceptDate'], 'String');
            }
            if (data.hasOwnProperty('shrClsName')) {
                obj['shrClsName'] = ApiClient.convertToType(data['shrClsName'], 'String');
            }
            if (data.hasOwnProperty('shrClsTermDate')) {
                obj['shrClsTermDate'] = ApiClient.convertToType(data['shrClsTermDate'], 'String');
            }
            if (data.hasOwnProperty('terminationDate')) {
                obj['terminationDate'] = ApiClient.convertToType(data['terminationDate'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('webSite')) {
                obj['webSite'] = ApiClient.convertToType(data['webSite'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested.
 * @member {String} fsymId
 */
Summaries.prototype['fsymId'] = undefined;

/**
 * FactSet Entity Identifier. Six alpha-numeric characters, excluding vowels, with a -E suffix (XXXXXX-E), resolved from the requestId of the Fund requested.
 * @member {String} fsymEntityId
 */
Summaries.prototype['fsymEntityId'] = undefined;

/**
 * FactSet Regional Identifier. Six alpha-numeric characters, excluding vowels, with a -R suffix (XXXXXX-R), resolved from the requestId of the Fund requested.
 * @member {String} fsymRegionalId
 */
Summaries.prototype['fsymRegionalId'] = undefined;

/**
 * FactSet Ticker-Region for the requested fund.
 * @member {String} fsymTickerRegion
 */
Summaries.prototype['fsymTickerRegion'] = undefined;

/**
 * The FactSet Ultimate Parent Entity Identifer, with a -E suffix (XXXXXX-E).
 * @member {String} fsymUltimateParentId
 */
Summaries.prototype['fsymUltimateParentId'] = undefined;

/**
 * The requested Id sent as input.
 * @member {String} requestId
 */
Summaries.prototype['requestId'] = undefined;

/**
 * Binary flag to indicate whether the fund is currently active, where 1 is active and 0 is inactive.
 * @member {Number} activeFlag
 */
Summaries.prototype['activeFlag'] = undefined;

/**
 * Binary indicator of whether the fund is actively managed, where 1 is active and 0 is inactive.
 * @member {Number} activelyManagedFlag
 */
Summaries.prototype['activelyManagedFlag'] = undefined;

/**
 * The Funds Brand Name in proper format.
 * @member {String} brand
 */
Summaries.prototype['brand'] = undefined;

/**
 * Returns the fund's country of domicile in ISO2 format. Only available for Mutual Funds.
 * @member {String} countryDomicile
 */
Summaries.prototype['countryDomicile'] = undefined;

/**
 * The fund's currency.
 * @member {String} currency
 */
Summaries.prototype['currency'] = undefined;

/**
 * The Fund's Investment Strategy short description.
 * @member {String} descInfo
 */
Summaries.prototype['descInfo'] = undefined;

/**
 * The fund of fund's id if applicable. Will provide plain Fund of Funds text.
 * @member {String} fundOfFundsId
 */
Summaries.prototype['fundOfFundsId'] = undefined;

/**
 * The fund's inception date in YYYY-MM-DD format.
 * @member {String} inceptionDate
 */
Summaries.prototype['inceptionDate'] = undefined;

/**
 * The fund's investment strategy long description. Use `descInfo` if needing short description.
 * @member {String} insight
 */
Summaries.prototype['insight'] = undefined;

/**
 * The Issuer Identifier.
 * @member {String} issuerId
 */
Summaries.prototype['issuerId'] = undefined;

/**
 * The Issuer Name in proper format.
 * @member {String} issuerName
 */
Summaries.prototype['issuerName'] = undefined;

/**
 * The legal structure of the fund, e.g. Open-Ended Fund, close-ended fund
 * @member {String} legalStructure
 */
Summaries.prototype['legalStructure'] = undefined;

/**
 * The leverage factor of the fund.
 * @member {Number} leverageFactor
 */
Summaries.prototype['leverageFactor'] = undefined;

/**
 * Indicates whether the fund is leveraged, inverse, or neither in proper format.
 * @member {String} leverageInverse
 */
Summaries.prototype['leverageInverse'] = undefined;

/**
 * The Fund security's name in proper format.
 * @member {String} name
 */
Summaries.prototype['name'] = undefined;

/**
 * The NAV currency for the specified share class.
 * @member {String} navCurrency
 */
Summaries.prototype['navCurrency'] = undefined;

/**
 * The Fund's objective long description.
 * @member {String} objective
 */
Summaries.prototype['objective'] = undefined;

/**
 * The fund's first available date for prices (NAV) in YYYY-MM-DD format. This can be used to fetch the first available price from FactSet. *NOTE: This is not the inception date of fund.*
 * @member {String} priceFirstDate
 */
Summaries.prototype['priceFirstDate'] = undefined;

/**
 * The fund's most recent available date for prices (NAV) in YYYY-MM-DD format.
 * @member {String} priceRecentDate
 */
Summaries.prototype['priceRecentDate'] = undefined;

/**
 * The Funds Share class type name in proper format.
 * @member {String} shrClass
 */
Summaries.prototype['shrClass'] = undefined;

/**
 * Returns a binary indicator of whether the specified share class is currently active, where 1 is active and 0 is inactive.
 * @member {Number} shrClassActiveFlag
 */
Summaries.prototype['shrClassActiveFlag'] = undefined;

/**
 * The currency for the specified share class.
 * @member {String} shrClsCurrency
 */
Summaries.prototype['shrClsCurrency'] = undefined;

/**
 * The specified share class's inception date in YYYY-MM-DD format.
 * @member {String} shrClsInceptDate
 */
Summaries.prototype['shrClsInceptDate'] = undefined;

/**
 * The specified share class name for the fund in proper format.
 * @member {String} shrClsName
 */
Summaries.prototype['shrClsName'] = undefined;

/**
 * The Share class Termination Date in YYYY-MM-DD format. If still active, value will be null.
 * @member {String} shrClsTermDate
 */
Summaries.prototype['shrClsTermDate'] = undefined;

/**
 * The Termination Date in YYYY-MM-DD format. If still active, value will be null.
 * @member {String} terminationDate
 */
Summaries.prototype['terminationDate'] = undefined;

/**
 * The Type of Fund, e.g. Mutual Fund, Unit Investment Trust
 * @member {String} type
 */
Summaries.prototype['type'] = undefined;

/**
 * The URL of the Fund.
 * @member {String} webSite
 */
Summaries.prototype['webSite'] = undefined;






export default Summaries;
