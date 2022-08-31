/**
 * FactSet Private Markets API
 * FactSet Private Markets API encompasses Private Company Financials data to start. Private Company firmographics can be found in the FactSet Entity API. The future plans of this service will include additional Private Markets data, such as Private Equity/Venture Capital. 
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

/**
 * The Financials model module.
 * @module model/Financials
 */
class Financials {
    /**
     * Constructs a new <code>Financials</code>.
     * @alias module:model/Financials
     * @extends Object
     */
    constructor() { 
        
        Financials.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Financials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Financials} obj Optional instance to populate.
     * @return {module:model/Financials} The populated <code>Financials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Financials();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique FactSet-generated identifier representing an entity for the current entity identifier (-E)
 * @member {String} fsymId
 */
Financials.prototype['fsymId'] = undefined;

/**
 * Identifier used in `ids`.
 * @member {String} requestId
 */
Financials.prototype['requestId'] = undefined;






export default Financials;

