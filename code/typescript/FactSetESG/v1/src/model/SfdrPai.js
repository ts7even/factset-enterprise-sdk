/**
 * FactSet ESG API
 * FactSet ESG (powered by FactSet Truvalue Labs) applies machine learning to uncover risks and opportunities from companies' Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores. The service focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data.<p> FactSet ESG extracts, analyzes, and generates scores from millions of documents each month collected from more than 100,000 data sources in over 30 languages. Sources include news, trade journals, NGOs, watchdog groups, trade blogs, industry reports and social media. Products deliver investable insights by revealing value and risk factors from unstructured data at the speed of current events.</p> 
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SfdrPai model module.
 * @module model/SfdrPai
 */
class SfdrPai {
    /**
     * Constructs a new <code>SfdrPai</code>.
     * @alias module:model/SfdrPai
     */
    constructor() { 
        
        SfdrPai.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SfdrPai</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SfdrPai} obj Optional instance to populate.
     * @return {module:model/SfdrPai} The populated <code>SfdrPai</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SfdrPai();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('subTopicCode')) {
                obj['subTopicCode'] = ApiClient.convertToType(data['subTopicCode'], 'String');
            }
            if (data.hasOwnProperty('subTopicName')) {
                obj['subTopicName'] = ApiClient.convertToType(data['subTopicName'], 'String');
            }
            if (data.hasOwnProperty('indicatorType')) {
                obj['indicatorType'] = ApiClient.convertToType(data['indicatorType'], 'String');
            }
            if (data.hasOwnProperty('periodEndDate')) {
                obj['periodEndDate'] = ApiClient.convertToType(data['periodEndDate'], 'Date');
            }
            if (data.hasOwnProperty('reportingPeriod')) {
                obj['reportingPeriod'] = ApiClient.convertToType(data['reportingPeriod'], 'String');
            }
            if (data.hasOwnProperty('standardizedUnit')) {
                obj['standardizedUnit'] = ApiClient.convertToType(data['standardizedUnit'], 'String');
            }
            if (data.hasOwnProperty('standardizedValue')) {
                obj['standardizedValue'] = ApiClient.convertToType(data['standardizedValue'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Entity Identifier. Six alpha-numeric characters, excluding vowels, with a -E suffix (XXXXXX-E).
 * @member {String} fsymId
 */
SfdrPai.prototype['fsymId'] = undefined;

/**
 * Identifier that was used for the request.
 * @member {String} requestId
 */
SfdrPai.prototype['requestId'] = undefined;

/**
 * Codes for the General, Mandatory and Additional PAI indicators
 * @member {String} subTopicCode
 */
SfdrPai.prototype['subTopicCode'] = undefined;

/**
 * Names for the General, Mandatory and Additional PAI indicators
 * @member {String} subTopicName
 */
SfdrPai.prototype['subTopicName'] = undefined;

/**
 * The type of indicator - General, Additional & Mandatory
 * @member {String} indicatorType
 */
SfdrPai.prototype['indicatorType'] = undefined;

/**
 * The Reporting period end date expressed in YYYY-MM-DD format
 * @member {Date} periodEndDate
 */
SfdrPai.prototype['periodEndDate'] = undefined;

/**
 * The reporting period of the company expressed in YYYY format
 * @member {String} reportingPeriod
 */
SfdrPai.prototype['reportingPeriod'] = undefined;

/**
 * The units of measurements for the indicators
 * @member {String} standardizedUnit
 */
SfdrPai.prototype['standardizedUnit'] = undefined;

/**
 * The PAI calculations based on the company-reported data, some metrics sourced from Factset Databases and Truvalue SASB Spotlights
 * @member {String} standardizedValue
 */
SfdrPai.prototype['standardizedValue'] = undefined;






export default SfdrPai;

