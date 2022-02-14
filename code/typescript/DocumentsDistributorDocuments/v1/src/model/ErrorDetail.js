/**
 * Documents Distributor - Documents API
 * Documents APIs that provide filings such as Global Filings and XML files such as StreetAccount    Global Filings API provides the capability to search and download filings documents from various exchanges around the world. The API also provides relevant metadata such as document source, company identifiers and form type around each filings document. Filings providers currently include EDGAR and SYMEX WebDisclosure.      StreetAccount XML API provides access to historical StreetAccount (SA) news. SA provides a summary for various corporate and market news written by journalist with background in financial markets.    The API delivers SA stories in XML format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files.   Files delivered contain both metadata and content body in each file. This eliminates the need to make multiple requests through multiple services to get all the information.  
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
import ValidParameterDetails from './ValidParameterDetails';

/**
 * The ErrorDetail model module.
 * @module model/ErrorDetail
 * @version 0.9.1
 */
class ErrorDetail {
    /**
     * Constructs a new <code>ErrorDetail</code>.
     * @alias module:model/ErrorDetail
     */
    constructor() { 
        
        ErrorDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorDetail} obj Optional instance to populate.
     * @return {module:model/ErrorDetail} The populated <code>ErrorDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorDetail();

            if (data.hasOwnProperty('validparameters')) {
                obj['validparameters'] = ValidParameterDetails.constructFromObject(data['validparameters']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ValidParameterDetails} validparameters
 */
ErrorDetail.prototype['validparameters'] = undefined;






export default ErrorDetail;

