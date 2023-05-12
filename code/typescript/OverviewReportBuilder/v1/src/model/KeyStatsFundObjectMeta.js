/**
 * FactSet Overview Report Builder API
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import KeyStatsEntityObjectMetaSources from './KeyStatsEntityObjectMetaSources';
import KeyStatsFundObjectMetaAsOfDate from './KeyStatsFundObjectMetaAsOfDate';

/**
 * The KeyStatsFundObjectMeta model module.
 * @module model/KeyStatsFundObjectMeta
 */
class KeyStatsFundObjectMeta {
    /**
     * Constructs a new <code>KeyStatsFundObjectMeta</code>.
     * @alias module:model/KeyStatsFundObjectMeta
     */
    constructor() { 
        
        KeyStatsFundObjectMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeyStatsFundObjectMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyStatsFundObjectMeta} obj Optional instance to populate.
     * @return {module:model/KeyStatsFundObjectMeta} The populated <code>KeyStatsFundObjectMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyStatsFundObjectMeta();

            if (data.hasOwnProperty('sources')) {
                obj['sources'] = KeyStatsEntityObjectMetaSources.constructFromObject(data['sources']);
            }
            if (data.hasOwnProperty('asOfDate')) {
                obj['asOfDate'] = KeyStatsFundObjectMetaAsOfDate.constructFromObject(data['asOfDate']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/KeyStatsEntityObjectMetaSources} sources
 */
KeyStatsFundObjectMeta.prototype['sources'] = undefined;

/**
 * @member {module:model/KeyStatsFundObjectMetaAsOfDate} asOfDate
 */
KeyStatsFundObjectMeta.prototype['asOfDate'] = undefined;






export default KeyStatsFundObjectMeta;
