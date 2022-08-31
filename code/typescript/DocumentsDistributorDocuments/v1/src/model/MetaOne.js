/**
 * Documents Distributor - Documents API
 * Documents APIs that provide filings such as Global Filings and XML files such as StreetAccount    Global Filings API provides the capability to search and download filings documents from various exchanges around the world. This API will provide access to the full history and the ability to search by date and dataset(source). It does not provide real-time updates to the filings documents. Filings providers currently include EDGAR       Note: The real-time updates to the filing documents will be available within week to ten days and per request able to query up to 8 days of data               StreetAccount XML API provides access to historical StreetAccount (SA) news. SA provides a summary for various corporate and market news written by journalist with background in financial markets.    The API delivers SA stories in XML format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files.      This API only supports adhoc requests to retrieve historical files and does not support real-time files and if require real-time push should consider the other three methods (pushed via SFTP, to QNT account, or users Azure Storage)   Both historical and real-time Street Account news is also delivered via SFTP, to users QNT account, or users Azure Storage.  Files delivered contain both metadata and content body in each file. This eliminates the need to make multiple requests through multiple services to get all the information.  News API provides access to historical news. This provides a summary for various corporate and market news written by journalist with background in financial markets.  The API delivers  stories in different format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files    
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IsPartialOne from './IsPartialOne';
import PaginationOne from './PaginationOne';

/**
 * The MetaOne model module.
 * @module model/MetaOne
 */
class MetaOne {
    /**
     * Constructs a new <code>MetaOne</code>.
     * Array of metadata objects
     * @alias module:model/MetaOne
     */
    constructor() { 
        
        MetaOne.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetaOne</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaOne} obj Optional instance to populate.
     * @return {module:model/MetaOne} The populated <code>MetaOne</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetaOne();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PaginationOne.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('partial')) {
                obj['partial'] = IsPartialOne.constructFromObject(data['partial']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationOne} pagination
 */
MetaOne.prototype['pagination'] = undefined;

/**
 * @member {module:model/IsPartialOne} partial
 */
MetaOne.prototype['partial'] = undefined;






export default MetaOne;

