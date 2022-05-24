/**
 * Stocks API For Digital Portals
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse20010InstrumentCompany from './InlineResponse20010InstrumentCompany';
import InlineResponse20010InstrumentFsym from './InlineResponse20010InstrumentFsym';
import InlineResponse20010InstrumentIndustryClassification from './InlineResponse20010InstrumentIndustryClassification';
import InlineResponse20010InstrumentNsin from './InlineResponse20010InstrumentNsin';

/**
 * The InlineResponse20010Instrument model module.
 * @module model/InlineResponse20010Instrument
 * @version 0.10.0
 */
class InlineResponse20010Instrument {
    /**
     * Constructs a new <code>InlineResponse20010Instrument</code>.
     * Instrument data of the notation.
     * @alias module:model/InlineResponse20010Instrument
     */
    constructor() { 
        
        InlineResponse20010Instrument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20010Instrument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010Instrument} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010Instrument} The populated <code>InlineResponse20010Instrument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20010Instrument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('nsin')) {
                obj['nsin'] = InlineResponse20010InstrumentNsin.constructFromObject(data['nsin']);
            }
            if (data.hasOwnProperty('fsym')) {
                obj['fsym'] = InlineResponse20010InstrumentFsym.constructFromObject(data['fsym']);
            }
            if (data.hasOwnProperty('industryClassification')) {
                obj['industryClassification'] = InlineResponse20010InstrumentIndustryClassification.constructFromObject(data['industryClassification']);
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = InlineResponse20010InstrumentCompany.constructFromObject(data['company']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the instrument.
 * @member {String} id
 */
InlineResponse20010Instrument.prototype['id'] = undefined;

/**
 * Name of the instrument.
 * @member {String} name
 */
InlineResponse20010Instrument.prototype['name'] = undefined;

/**
 * Short name of the instrument.
 * @member {String} shortName
 */
InlineResponse20010Instrument.prototype['shortName'] = undefined;

/**
 * The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument.
 * @member {String} isin
 */
InlineResponse20010Instrument.prototype['isin'] = undefined;

/**
 * @member {module:model/InlineResponse20010InstrumentNsin} nsin
 */
InlineResponse20010Instrument.prototype['nsin'] = undefined;

/**
 * @member {module:model/InlineResponse20010InstrumentFsym} fsym
 */
InlineResponse20010Instrument.prototype['fsym'] = undefined;

/**
 * @member {module:model/InlineResponse20010InstrumentIndustryClassification} industryClassification
 */
InlineResponse20010Instrument.prototype['industryClassification'] = undefined;

/**
 * @member {module:model/InlineResponse20010InstrumentCompany} company
 */
InlineResponse20010Instrument.prototype['company'] = undefined;






export default InlineResponse20010Instrument;
