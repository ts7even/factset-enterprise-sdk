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
import InlineResponse2003InstrumentFsymSecurity from './InlineResponse2003InstrumentFsymSecurity';

/**
 * The InlineResponse2003InstrumentFsym model module.
 * @module model/InlineResponse2003InstrumentFsym
 * @version 0.9.0
 */
class InlineResponse2003InstrumentFsym {
    /**
     * Constructs a new <code>InlineResponse2003InstrumentFsym</code>.
     * Instrument-level FactSet identifier of the financial instrument used primarily in FactSet products other than the MDG.
     * @alias module:model/InlineResponse2003InstrumentFsym
     */
    constructor() { 
        
        InlineResponse2003InstrumentFsym.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003InstrumentFsym</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003InstrumentFsym} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003InstrumentFsym} The populated <code>InlineResponse2003InstrumentFsym</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003InstrumentFsym();

            if (data.hasOwnProperty('security')) {
                obj['security'] = InlineResponse2003InstrumentFsymSecurity.constructFromObject(data['security']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2003InstrumentFsymSecurity} security
 */
InlineResponse2003InstrumentFsym.prototype['security'] = undefined;






export default InlineResponse2003InstrumentFsym;
