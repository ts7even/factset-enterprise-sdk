/**
 * FactSet Ownership API
 * FactSet’s Fund Ownership API gives access to both **Holdings** and **Holders** data.<p> Factset's Holdings endpoints gives access to all the underlying securities and their position detils held within a given fund. Fund Types supported include Open-End Mutual Funds, Closed-end Mutual Funds, and Exchange Traded Funds. Security Holders information retrieves all \"holder types\" and their positions across institutions, funds, insiders, and stakeholders.</p><p>The FactSet Ownership and Mutual Funds database collects global equity ownership data for approximately 50,000 institutions, 60,000 unique Mutual Fund portfolios, and 400,000 Insider/Stake holders from around 110 countries.  For more details review our [Data Collection](https://my.apps.factset.com/oa/cms/oaAttachment/87e162be-f2d1-4f40-a85b-bfb1b020d270/20079) methodology. </p> 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FundHolding model module.
 * @module model/FundHolding
 * @version 0.9.1
 */
class FundHolding {
    /**
     * Constructs a new <code>FundHolding</code>.
     * fundHolding response object
     * @alias module:model/FundHolding
     */
    constructor() { 
        
        FundHolding.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FundHolding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundHolding} obj Optional instance to populate.
     * @return {module:model/FundHolding} The populated <code>FundHolding</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundHolding();

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('adjHolding')) {
                obj['adjHolding'] = ApiClient.convertToType(data['adjHolding'], 'Number');
            }
            if (data.hasOwnProperty('adjMarketValue')) {
                obj['adjMarketValue'] = ApiClient.convertToType(data['adjMarketValue'], 'Number');
            }
            if (data.hasOwnProperty('weightClose')) {
                obj['weightClose'] = ApiClient.convertToType(data['weightClose'], 'Number');
            }
            if (data.hasOwnProperty('issueType')) {
                obj['issueType'] = ApiClient.convertToType(data['issueType'], 'String');
            }
            if (data.hasOwnProperty('fsymSecurityId')) {
                obj['fsymSecurityId'] = ApiClient.convertToType(data['fsymSecurityId'], 'String');
            }
            if (data.hasOwnProperty('fsymRegionalId')) {
                obj['fsymRegionalId'] = ApiClient.convertToType(data['fsymRegionalId'], 'String');
            }
            if (data.hasOwnProperty('securityName')) {
                obj['securityName'] = ApiClient.convertToType(data['securityName'], 'String');
            }
            if (data.hasOwnProperty('securityTicker')) {
                obj['securityTicker'] = ApiClient.convertToType(data['securityTicker'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Fund Identifier that was used in the request.
 * @member {String} requestId
 */
FundHolding.prototype['requestId'] = undefined;

/**
 * FactSet Security Identifier of Fund. Identifies the security level id of the Fund requested (not-representing the underlying holding). Six alpha-numeric characters, excluding vowels, with an -S suffix (XXXXXX-S). All equity and fixed income securities that exist on FactSet are allocated a security-level permanent identifier.
 * @member {String} fsymId
 */
FundHolding.prototype['fsymId'] = undefined;

/**
 * Date of the reported holding in YYYY-MM-DD format. For more details, visit [Online Assistant Page #11262](https://oa.apps.factset.com/pages/11262).
 * @member {Date} date
 */
FundHolding.prototype['date'] = undefined;

/**
 * Currency code. The service will default to the funds local currency. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
 * @member {String} currency
 */
FundHolding.prototype['currency'] = undefined;

/**
 * Adjusted number of shares held. All positions and prices are adjusted for splits and name changes, but they are not adjusted for spinoffs or mergers. If a given company announces a split today, FactSet's Ownership data will reflect that split either tomorrow or the day after, depending upon the time in which the FactSet Symbology team makes record of the change. For more details, visit [Online Assistant Page #11262](https://oa.apps.factset.com/pages/11262).
 * @member {Number} adjHolding
 */
FundHolding.prototype['adjHolding'] = undefined;

/**
 * Adjusted market values of shares held. Market Value. All positions and prices are adjusted for splits and name changes, but they are not adjusted for spinoffs or mergers. If a given company announces a split today, FactSet's Ownership data will reflect that split either tomorrow or the day after, depending upon the time in which the FactSet Symbology team makes record of the change. For more details, visit [Online Assistant Page #11262](https://oa.apps.factset.com/pages/11262).
 * @member {Number} adjMarketValue
 */
FundHolding.prototype['adjMarketValue'] = undefined;

/**
 * Closing weight of security in the fund for the requested asset type (percent).
 * @member {Number} weightClose
 */
FundHolding.prototype['weightClose'] = undefined;

/**
 * Issue type of held security. For more details, visit [Online Assistant Page #11262](https://oa.apps.factset.com/pages/11262).
 * @member {String} issueType
 */
FundHolding.prototype['issueType'] = undefined;

/**
 * Represents the security id for the underlying holding, not the parent holding. Six alpha-numeric characters, excluding vowels, with an -S suffix (XXXXXX-S). All equity and fixed income securities that exist on FactSet are allocated a security-level permanent identifier.
 * @member {String} fsymSecurityId
 */
FundHolding.prototype['fsymSecurityId'] = undefined;

/**
 * FactSet Regional Security identifier of the security held in the fund.
 * @member {String} fsymRegionalId
 */
FundHolding.prototype['fsymRegionalId'] = undefined;

/**
 * Name of held security.
 * @member {String} securityName
 */
FundHolding.prototype['securityName'] = undefined;

/**
 * Ticker of held security.
 * @member {String} securityTicker
 */
FundHolding.prototype['securityTicker'] = undefined;






export default FundHolding;

