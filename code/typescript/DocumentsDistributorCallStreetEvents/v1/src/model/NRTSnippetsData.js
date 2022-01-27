/**
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that provide events data such as Events Audio and Near Real-Time Transcripts  The  Events Audio API provides access to all audio recordings to various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service.
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NRTSnippetsSnippetData from './NRTSnippetsSnippetData';

/**
 * The NRTSnippetsData model module.
 * @module model/NRTSnippetsData
 * @version 0.9.0
 */
class NRTSnippetsData {
    /**
     * Constructs a new <code>NRTSnippetsData</code>.
     * @alias module:model/NRTSnippetsData
     */
    constructor() { 
        
        NRTSnippetsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NRTSnippetsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NRTSnippetsData} obj Optional instance to populate.
     * @return {module:model/NRTSnippetsData} The populated <code>NRTSnippetsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NRTSnippetsData();

            if (data.hasOwnProperty('reportId')) {
                obj['reportId'] = ApiClient.convertToType(data['reportId'], 'Number');
            }
            if (data.hasOwnProperty('snippetEndTimestamp')) {
                obj['snippetEndTimestamp'] = ApiClient.convertToType(data['snippetEndTimestamp'], 'String');
            }
            if (data.hasOwnProperty('snippetData')) {
                obj['snippetData'] = ApiClient.convertToType(data['snippetData'], [NRTSnippetsSnippetData]);
            }
            if (data.hasOwnProperty('snippetSequence')) {
                obj['snippetSequence'] = ApiClient.convertToType(data['snippetSequence'], 'Number');
            }
            if (data.hasOwnProperty('audioSourceId')) {
                obj['audioSourceId'] = ApiClient.convertToType(data['audioSourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The unique ID for an event.
 * @member {Number} reportId
 */
NRTSnippetsData.prototype['reportId'] = undefined;

/**
 * The snippet end time is calculated based off the endTime in the snippetData section and the recordingStartTime from the calls endpoint 
 * @member {String} snippetEndTimestamp
 */
NRTSnippetsData.prototype['snippetEndTimestamp'] = undefined;

/**
 * @member {Array.<module:model/NRTSnippetsSnippetData>} snippetData
 */
NRTSnippetsData.prototype['snippetData'] = undefined;

/**
 * The sequence number of the snippet from the start of the current call 
 * @member {Number} snippetSequence
 */
NRTSnippetsData.prototype['snippetSequence'] = undefined;

/**
 * The Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from a different source (dial-in or webcast). One ReportID can have multiple AudioSource ids.
 * @member {Number} audioSourceId
 */
NRTSnippetsData.prototype['audioSourceId'] = undefined;






export default NRTSnippetsData;
