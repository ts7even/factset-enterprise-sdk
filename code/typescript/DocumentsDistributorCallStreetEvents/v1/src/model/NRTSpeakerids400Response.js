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
import NRTSpeakerids400ResponseDetails from './NRTSpeakerids400ResponseDetails';

/**
 * The NRTSpeakerids400Response model module.
 * @module model/NRTSpeakerids400Response
 * @version 0.9.0
 */
class NRTSpeakerids400Response {
    /**
     * Constructs a new <code>NRTSpeakerids400Response</code>.
     * @alias module:model/NRTSpeakerids400Response
     */
    constructor() { 
        
        NRTSpeakerids400Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NRTSpeakerids400Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NRTSpeakerids400Response} obj Optional instance to populate.
     * @return {module:model/NRTSpeakerids400Response} The populated <code>NRTSpeakerids400Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NRTSpeakerids400Response();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = NRTSpeakerids400ResponseDetails.constructFromObject(data['details']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
NRTSpeakerids400Response.prototype['id'] = undefined;

/**
 * @member {String} error_message
 */
NRTSpeakerids400Response.prototype['error_message'] = undefined;

/**
 * @member {module:model/NRTSpeakerids400ResponseDetails} details
 */
NRTSpeakerids400Response.prototype['details'] = undefined;






export default NRTSpeakerids400Response;
