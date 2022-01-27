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
 * The InlineResponse2004DataIssueVolumeCurrency model module.
 * @module model/InlineResponse2004DataIssueVolumeCurrency
 * @version 0.9.0
 */
class InlineResponse2004DataIssueVolumeCurrency {
    /**
     * Constructs a new <code>InlineResponse2004DataIssueVolumeCurrency</code>.
     * @alias module:model/InlineResponse2004DataIssueVolumeCurrency
     */
    constructor() { 
        
        InlineResponse2004DataIssueVolumeCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataIssueVolumeCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataIssueVolumeCurrency} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataIssueVolumeCurrency} The populated <code>InlineResponse2004DataIssueVolumeCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataIssueVolumeCurrency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of a currency.
 * @member {Number} id
 */
InlineResponse2004DataIssueVolumeCurrency.prototype['id'] = undefined;

/**
 * ISO 4217 code of the currency.
 * @member {String} isoCode
 */
InlineResponse2004DataIssueVolumeCurrency.prototype['isoCode'] = undefined;

/**
 * Number of notations.
 * @member {Number} count
 */
InlineResponse2004DataIssueVolumeCurrency.prototype['count'] = undefined;






export default InlineResponse2004DataIssueVolumeCurrency;
