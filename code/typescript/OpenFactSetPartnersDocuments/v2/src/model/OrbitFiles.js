/**
 * Open:FactSet - Partners
 * This service provides the capability to search and download unstructured content provided by <a href=\"https://open.factset.com/catalog/en-us\">Open:FactSet Partners</a>.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrbitFiles model module.
 * @module model/OrbitFiles
 */
class OrbitFiles {
    /**
     * Constructs a new <code>OrbitFiles</code>.
     * Returns Orbit Response.
     * @alias module:model/OrbitFiles
     */
    constructor() { 
        
        OrbitFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrbitFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrbitFiles} obj Optional instance to populate.
     * @return {module:model/OrbitFiles} The populated <code>OrbitFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrbitFiles();

            if (data.hasOwnProperty('stockCode')) {
                obj['stockCode'] = ApiClient.convertToType(data['stockCode'], 'String');
            }
            if (data.hasOwnProperty('eventStartDateTime')) {
                obj['eventStartDateTime'] = ApiClient.convertToType(data['eventStartDateTime'], 'Date');
            }
            if (data.hasOwnProperty('eventEndDateTime')) {
                obj['eventEndDateTime'] = ApiClient.convertToType(data['eventEndDateTime'], 'Date');
            }
            if (data.hasOwnProperty('typesOfInvestorRelationsActivities')) {
                obj['typesOfInvestorRelationsActivities'] = ApiClient.convertToType(data['typesOfInvestorRelationsActivities'], 'String');
            }
            if (data.hasOwnProperty('transcriptUniqueId')) {
                obj['transcriptUniqueId'] = ApiClient.convertToType(data['transcriptUniqueId'], 'String');
            }
            if (data.hasOwnProperty('uploadTime')) {
                obj['uploadTime'] = ApiClient.convertToType(data['uploadTime'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('exchangeCode')) {
                obj['exchangeCode'] = ApiClient.convertToType(data['exchangeCode'], 'String');
            }
            if (data.hasOwnProperty('versionId')) {
                obj['versionId'] = ApiClient.convertToType(data['versionId'], 'Number');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('fileTimestamp')) {
                obj['fileTimestamp'] = ApiClient.convertToType(data['fileTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('updateTimestamp')) {
                obj['updateTimestamp'] = ApiClient.convertToType(data['updateTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The company/ticker which is associated with the transcript. Please submit a question via Issue Tracker under the Open:FactSet - Partner Communication to get the required list of tickers. 
 * @member {String} stockCode
 */
OrbitFiles.prototype['stockCode'] = undefined;

/**
 * The timestamp when latest version of the call was published at the source.
 * @member {Date} eventStartDateTime
 */
OrbitFiles.prototype['eventStartDateTime'] = undefined;

/**
 * The timestamp when the file is last updated.
 * @member {Date} eventEndDateTime
 */
OrbitFiles.prototype['eventEndDateTime'] = undefined;

/**
 * Specifies the type of the call.
 * @member {String} typesOfInvestorRelationsActivities
 */
OrbitFiles.prototype['typesOfInvestorRelationsActivities'] = undefined;

/**
 * Unique identifier for the transcript
 * @member {String} transcriptUniqueId
 */
OrbitFiles.prototype['transcriptUniqueId'] = undefined;

/**
 * The timestamp when the transcript was last uploaded.
 * @member {Date} uploadTime
 */
OrbitFiles.prototype['uploadTime'] = undefined;

/**
 * The headline of the transcript.
 * @member {String} title
 */
OrbitFiles.prototype['title'] = undefined;

/**
 * Exchange Code
 * @member {String} exchangeCode
 */
OrbitFiles.prototype['exchangeCode'] = undefined;

/**
 * Helpful to distinguish corrected reports.
 * @member {Number} versionId
 */
OrbitFiles.prototype['versionId'] = undefined;

/**
 * The filename of the transcript.
 * @member {String} fileName
 */
OrbitFiles.prototype['fileName'] = undefined;

/**
 * The time when file is available for ingestion at the source.
 * @member {Date} fileTimestamp
 */
OrbitFiles.prototype['fileTimestamp'] = undefined;

/**
 * The time when file is processed.
 * @member {Date} updateTimestamp
 */
OrbitFiles.prototype['updateTimestamp'] = undefined;

/**
 * Defines the size of the file.
 * @member {Number} fileSize
 */
OrbitFiles.prototype['fileSize'] = undefined;

/**
 * Download link for the transcripts provided by the Orbit feed.
 * @member {String} url
 */
OrbitFiles.prototype['url'] = undefined;






export default OrbitFiles;
