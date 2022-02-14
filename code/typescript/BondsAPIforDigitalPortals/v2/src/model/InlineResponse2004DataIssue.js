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
import InlineResponse2004DataIssueVolume from './InlineResponse2004DataIssueVolume';

/**
 * The InlineResponse2004DataIssue model module.
 * @module model/InlineResponse2004DataIssue
 * @version 0.9.1
 */
class InlineResponse2004DataIssue {
    /**
     * Constructs a new <code>InlineResponse2004DataIssue</code>.
     * Values and value ranges related to the issue of the debt instruments.
     * @alias module:model/InlineResponse2004DataIssue
     */
    constructor() { 
        
        InlineResponse2004DataIssue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataIssue} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataIssue} The populated <code>InlineResponse2004DataIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataIssue();

            if (data.hasOwnProperty('volume')) {
                obj['volume'] = InlineResponse2004DataIssueVolume.constructFromObject(data['volume']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004DataIssueVolume} volume
 */
InlineResponse2004DataIssue.prototype['volume'] = undefined;






export default InlineResponse2004DataIssue;

