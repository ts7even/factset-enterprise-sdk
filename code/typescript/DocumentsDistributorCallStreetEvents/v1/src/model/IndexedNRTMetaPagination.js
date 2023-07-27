/**
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that offer events data such as Events Audio and Near Real-Time Transcripts.  The  Events Audio API provides access to historical as well as the latest audio recordings of various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service. 
 *
 * The version of the OpenAPI document: 1.8.3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The IndexedNRTMetaPagination model module.
 * @module model/IndexedNRTMetaPagination
 */
class IndexedNRTMetaPagination {
    /**
     * Constructs a new <code>IndexedNRTMetaPagination</code>.
     * @alias module:model/IndexedNRTMetaPagination
     */
    constructor() { 
        
        IndexedNRTMetaPagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IndexedNRTMetaPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndexedNRTMetaPagination} obj Optional instance to populate.
     * @return {module:model/IndexedNRTMetaPagination} The populated <code>IndexedNRTMetaPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IndexedNRTMetaPagination();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('isEstimatedTotal')) {
                obj['isEstimatedTotal'] = ApiClient.convertToType(data['isEstimatedTotal'], 'Boolean');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Total number for results returned for a specific query.
 * @member {Number} total
 */
IndexedNRTMetaPagination.prototype['total'] = undefined;

/**
 * This field acts as a flag for the exact count of results and is defaulted to false as the API should always return the exact count of results.
 * @member {Boolean} isEstimatedTotal
 */
IndexedNRTMetaPagination.prototype['isEstimatedTotal'] = undefined;

/**
 * Number of results returned per page
 * @member {Number} limit
 */
IndexedNRTMetaPagination.prototype['limit'] = undefined;

/**
 * The flag indicating the position in the results array if additional results are available beyond the default value or the value in _paginationLimit parameter (if used). This value is passed in the _paginationOffset parameter to retrieve subsequent results.
 * @member {Number} offset
 */
IndexedNRTMetaPagination.prototype['offset'] = undefined;






export default IndexedNRTMetaPagination;

