/**
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OptionsReferences from './OptionsReferences';

/**
 * The OptionsReferencesResponse model module.
 * @module model/OptionsReferencesResponse
 */
class OptionsReferencesResponse {
    /**
     * Constructs a new <code>OptionsReferencesResponse</code>.
     * @alias module:model/OptionsReferencesResponse
     */
    constructor() { 
        
        OptionsReferencesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptionsReferencesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptionsReferencesResponse} obj Optional instance to populate.
     * @return {module:model/OptionsReferencesResponse} The populated <code>OptionsReferencesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionsReferencesResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [OptionsReferences]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/OptionsReferences>} data
 */
OptionsReferencesResponse.prototype['data'] = undefined;






export default OptionsReferencesResponse;
