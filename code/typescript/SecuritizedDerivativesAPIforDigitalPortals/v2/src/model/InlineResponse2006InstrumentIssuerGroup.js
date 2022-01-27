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
 * The InlineResponse2006InstrumentIssuerGroup model module.
 * @module model/InlineResponse2006InstrumentIssuerGroup
 * @version 0.9.0
 */
class InlineResponse2006InstrumentIssuerGroup {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentIssuerGroup</code>.
     * Issuer group. The issuer group is defined by FactSet and does not represent an actual juristic person.
     * @alias module:model/InlineResponse2006InstrumentIssuerGroup
     */
    constructor() { 
        
        InlineResponse2006InstrumentIssuerGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentIssuerGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentIssuerGroup} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentIssuerGroup} The populated <code>InlineResponse2006InstrumentIssuerGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentIssuerGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the issuer group. See endpoint `/securitizedDerivative/issuer/search` for possible values.
 * @member {Number} id
 */
InlineResponse2006InstrumentIssuerGroup.prototype['id'] = undefined;

/**
 * Name of the issuer group.
 * @member {String} name
 */
InlineResponse2006InstrumentIssuerGroup.prototype['name'] = undefined;






export default InlineResponse2006InstrumentIssuerGroup;
