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

/**
 * The InlineResponse20067FsymListing model module.
 * @module model/InlineResponse20067FsymListing
 * @version 0.9.0
 */
class InlineResponse20067FsymListing {
    /**
     * Constructs a new <code>InlineResponse20067FsymListing</code>.
     * Listing-level identifiers.
     * @alias module:model/InlineResponse20067FsymListing
     */
    constructor() { 
        
        InlineResponse20067FsymListing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20067FsymListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20067FsymListing} obj Optional instance to populate.
     * @return {module:model/InlineResponse20067FsymListing} The populated <code>InlineResponse20067FsymListing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20067FsymListing();

            if (data.hasOwnProperty('permanentIdentifier')) {
                obj['permanentIdentifier'] = ApiClient.convertToType(data['permanentIdentifier'], 'String');
            }
            if (data.hasOwnProperty('tickerExchange')) {
                obj['tickerExchange'] = ApiClient.convertToType(data['tickerExchange'], 'String');
            }
            if (data.hasOwnProperty('isPrimary')) {
                obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * FactSet Permanent Identifier for a notation. The format is six alpha numeric characters, excluding vowels, with an L suffix (XXXXXX-L).
 * @member {String} permanentIdentifier
 */
InlineResponse20067FsymListing.prototype['permanentIdentifier'] = undefined;

/**
 * FactSet market symbol of the notation, usually consisting of the ticker (e.g. \"DAI\" for Daimler AG) and the three-character code of the exchange on which the listing is traded (example: DAI-ETR).
 * @member {String} tickerExchange
 */
InlineResponse20067FsymListing.prototype['tickerExchange'] = undefined;

/**
 * Indicates whether the notation is the primary notation among all notations within the same region (`true`) or not (`false`).
 * @member {Boolean} isPrimary
 */
InlineResponse20067FsymListing.prototype['isPrimary'] = undefined;






export default InlineResponse20067FsymListing;
