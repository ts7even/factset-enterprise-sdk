/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2003InstrumentCategorization from './InlineResponse2003InstrumentCategorization';
import InlineResponse2003InstrumentCompliance from './InlineResponse2003InstrumentCompliance';
import InlineResponse2003InstrumentCoupon from './InlineResponse2003InstrumentCoupon';
import InlineResponse2003InstrumentFsym from './InlineResponse2003InstrumentFsym';
import InlineResponse2003InstrumentIssue from './InlineResponse2003InstrumentIssue';
import InlineResponse2003InstrumentIssuer from './InlineResponse2003InstrumentIssuer';
import InlineResponse2003InstrumentLifeCycle from './InlineResponse2003InstrumentLifeCycle';
import InlineResponse2003InstrumentNsin from './InlineResponse2003InstrumentNsin';
import InlineResponse2003InstrumentRatingSystem1 from './InlineResponse2003InstrumentRatingSystem1';
import InlineResponse2003InstrumentRatingSystem2 from './InlineResponse2003InstrumentRatingSystem2';
import InlineResponse2003InstrumentTradingVolume from './InlineResponse2003InstrumentTradingVolume';

/**
 * The InlineResponse2003Instrument model module.
 * @module model/InlineResponse2003Instrument
 * @version 0.9.1
 */
class InlineResponse2003Instrument {
    /**
     * Constructs a new <code>InlineResponse2003Instrument</code>.
     * Instrument data of the notation.
     * @alias module:model/InlineResponse2003Instrument
     */
    constructor() { 
        
        InlineResponse2003Instrument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003Instrument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003Instrument} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003Instrument} The populated <code>InlineResponse2003Instrument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003Instrument();

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
                obj['nsin'] = InlineResponse2003InstrumentNsin.constructFromObject(data['nsin']);
            }
            if (data.hasOwnProperty('fsym')) {
                obj['fsym'] = InlineResponse2003InstrumentFsym.constructFromObject(data['fsym']);
            }
            if (data.hasOwnProperty('categorization')) {
                obj['categorization'] = InlineResponse2003InstrumentCategorization.constructFromObject(data['categorization']);
            }
            if (data.hasOwnProperty('lifeCycle')) {
                obj['lifeCycle'] = InlineResponse2003InstrumentLifeCycle.constructFromObject(data['lifeCycle']);
            }
            if (data.hasOwnProperty('subordinated')) {
                obj['subordinated'] = ApiClient.convertToType(data['subordinated'], 'Boolean');
            }
            if (data.hasOwnProperty('ratingSystem1')) {
                obj['ratingSystem1'] = InlineResponse2003InstrumentRatingSystem1.constructFromObject(data['ratingSystem1']);
            }
            if (data.hasOwnProperty('ratingSystem2')) {
                obj['ratingSystem2'] = InlineResponse2003InstrumentRatingSystem2.constructFromObject(data['ratingSystem2']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = InlineResponse2003InstrumentIssuer.constructFromObject(data['issuer']);
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = InlineResponse2003InstrumentIssue.constructFromObject(data['issue']);
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = InlineResponse2003InstrumentTradingVolume.constructFromObject(data['tradingVolume']);
            }
            if (data.hasOwnProperty('compliance')) {
                obj['compliance'] = InlineResponse2003InstrumentCompliance.constructFromObject(data['compliance']);
            }
            if (data.hasOwnProperty('coupon')) {
                obj['coupon'] = InlineResponse2003InstrumentCoupon.constructFromObject(data['coupon']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the instrument.
 * @member {String} id
 */
InlineResponse2003Instrument.prototype['id'] = undefined;

/**
 * Name of the instrument.
 * @member {String} name
 */
InlineResponse2003Instrument.prototype['name'] = undefined;

/**
 * Short name of the instrument.
 * @member {String} shortName
 */
InlineResponse2003Instrument.prototype['shortName'] = undefined;

/**
 * The International Securities Identification Number (ISIN) of the instrument. The ISIN is a 12-character code of digits and upper-case letters that uniquely identifies an instrument.
 * @member {String} isin
 */
InlineResponse2003Instrument.prototype['isin'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentNsin} nsin
 */
InlineResponse2003Instrument.prototype['nsin'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentFsym} fsym
 */
InlineResponse2003Instrument.prototype['fsym'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentCategorization} categorization
 */
InlineResponse2003Instrument.prototype['categorization'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentLifeCycle} lifeCycle
 */
InlineResponse2003Instrument.prototype['lifeCycle'] = undefined;

/**
 * If `true`, the debt instrument is subordinated.
 * @member {Boolean} subordinated
 */
InlineResponse2003Instrument.prototype['subordinated'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentRatingSystem1} ratingSystem1
 */
InlineResponse2003Instrument.prototype['ratingSystem1'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentRatingSystem2} ratingSystem2
 */
InlineResponse2003Instrument.prototype['ratingSystem2'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentIssuer} issuer
 */
InlineResponse2003Instrument.prototype['issuer'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentIssue} issue
 */
InlineResponse2003Instrument.prototype['issue'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentTradingVolume} tradingVolume
 */
InlineResponse2003Instrument.prototype['tradingVolume'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentCompliance} compliance
 */
InlineResponse2003Instrument.prototype['compliance'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentCoupon} coupon
 */
InlineResponse2003Instrument.prototype['coupon'] = undefined;






export default InlineResponse2003Instrument;

