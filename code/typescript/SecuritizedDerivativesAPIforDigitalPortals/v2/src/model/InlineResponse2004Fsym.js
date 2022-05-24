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
import InlineResponse2004FsymListing from './InlineResponse2004FsymListing';
import InlineResponse2004FsymRegional from './InlineResponse2004FsymRegional';

/**
 * The InlineResponse2004Fsym model module.
 * @module model/InlineResponse2004Fsym
 * @version 0.10.0
 */
class InlineResponse2004Fsym {
    /**
     * Constructs a new <code>InlineResponse2004Fsym</code>.
     * Notation-level FactSet identifiers of the financial instrument used primarily in FactSet products other than the MDG.
     * @alias module:model/InlineResponse2004Fsym
     */
    constructor() { 
        
        InlineResponse2004Fsym.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004Fsym</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Fsym} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Fsym} The populated <code>InlineResponse2004Fsym</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004Fsym();

            if (data.hasOwnProperty('listing')) {
                obj['listing'] = InlineResponse2004FsymListing.constructFromObject(data['listing']);
            }
            if (data.hasOwnProperty('regional')) {
                obj['regional'] = InlineResponse2004FsymRegional.constructFromObject(data['regional']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004FsymListing} listing
 */
InlineResponse2004Fsym.prototype['listing'] = undefined;

/**
 * @member {module:model/InlineResponse2004FsymRegional} regional
 */
InlineResponse2004Fsym.prototype['regional'] = undefined;






export default InlineResponse2004Fsym;
