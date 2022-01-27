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
import NotationSearchByTextDataValidationMarket from './NotationSearchByTextDataValidationMarket';
import NotationSearchByTextDataValidationPrices from './NotationSearchByTextDataValidationPrices';
import NotationSearchByTextDataValidationValueUnit from './NotationSearchByTextDataValidationValueUnit';

/**
 * The NotationSearchByTextDataValidation model module.
 * @module model/NotationSearchByTextDataValidation
 * @version 0.9.0
 */
class NotationSearchByTextDataValidation {
    /**
     * Constructs a new <code>NotationSearchByTextDataValidation</code>.
     * Validation parameters.
     * @alias module:model/NotationSearchByTextDataValidation
     */
    constructor() { 
        
        NotationSearchByTextDataValidation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotationSearchByTextDataValidation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotationSearchByTextDataValidation} obj Optional instance to populate.
     * @return {module:model/NotationSearchByTextDataValidation} The populated <code>NotationSearchByTextDataValidation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotationSearchByTextDataValidation();

            if (data.hasOwnProperty('onlyActive')) {
                obj['onlyActive'] = ApiClient.convertToType(data['onlyActive'], 'Boolean');
            }
            if (data.hasOwnProperty('prices')) {
                obj['prices'] = NotationSearchByTextDataValidationPrices.constructFromObject(data['prices']);
            }
            if (data.hasOwnProperty('valueUnit')) {
                obj['valueUnit'] = NotationSearchByTextDataValidationValueUnit.constructFromObject(data['valueUnit']);
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = NotationSearchByTextDataValidationMarket.constructFromObject(data['market']);
            }
        }
        return obj;
    }


}

/**
 * If `true`, only active notations will be returned. The term \"active\" reflects the fact that notations and related data is not being deleted immediately after becoming irrelevant (e.g. because the source does not provide a price anymore), but remains in general retrievable for up to 6 months.
 * @member {Boolean} onlyActive
 * @default true
 */
NotationSearchByTextDataValidation.prototype['onlyActive'] = true;

/**
 * @member {module:model/NotationSearchByTextDataValidationPrices} prices
 */
NotationSearchByTextDataValidation.prototype['prices'] = undefined;

/**
 * @member {module:model/NotationSearchByTextDataValidationValueUnit} valueUnit
 */
NotationSearchByTextDataValidation.prototype['valueUnit'] = undefined;

/**
 * @member {module:model/NotationSearchByTextDataValidationMarket} market
 */
NotationSearchByTextDataValidation.prototype['market'] = undefined;






export default NotationSearchByTextDataValidation;
