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
import InlineResponse200DataIssuerGroup from './InlineResponse200DataIssuerGroup';

/**
 * The InlineResponse2004Issuer model module.
 * @module model/InlineResponse2004Issuer
 * @version 0.9.1
 */
class InlineResponse2004Issuer {
    /**
     * Constructs a new <code>InlineResponse2004Issuer</code>.
     * Issuer data of the securitized derivative. See endpoint &#x60;/securitizedDerivative/issuer/search&#x60; for possible values for the issuer and the issuer group.
     * @alias module:model/InlineResponse2004Issuer
     */
    constructor() { 
        
        InlineResponse2004Issuer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004Issuer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Issuer} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Issuer} The populated <code>InlineResponse2004Issuer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004Issuer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = InlineResponse200DataIssuerGroup.constructFromObject(data['group']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the issuer.
 * @member {Number} id
 */
InlineResponse2004Issuer.prototype['id'] = undefined;

/**
 * Name of the issuer.
 * @member {String} name
 */
InlineResponse2004Issuer.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse200DataIssuerGroup} group
 */
InlineResponse2004Issuer.prototype['group'] = undefined;






export default InlineResponse2004Issuer;

