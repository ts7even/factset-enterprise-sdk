/**
 * FactSet Terms & Conditions API
 * The FactSet Terms & Conditions API exposes Terms & Conditions data for Fixed Income Corporate, Governement & Agency securities. The FactSet Corporate Government & Agency Terms & Conditions library provides descriptive data on the issue level, such as offering details, redemption information, and coupon schedules. Issuer level data is also available. Coverage is global and includes corporate, sovereign, and agency issues. 
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

/**
 * The RedemptionPricesRequest model module.
 * @module model/RedemptionPricesRequest
 * @version 0.9.0
 */
class RedemptionPricesRequest {
    /**
     * Constructs a new <code>RedemptionPricesRequest</code>.
     * @alias module:model/RedemptionPricesRequest
     * @param ids {Array.<String>} List of Fixed Income Security identifiers. Supported symbol types include CUSIP, SEDOL, ISIN, and FactSet Security Permanent Identifier (-S).  **ID LIMIT = 250** *per request*. 
     * @param categories {module:model/RedemptionPricesRequest.CategoriesEnum} Filters the list of Redemption Prices Categories -   * **CALL** = Call prices.   * **PUT** = Put prices.   * **SF** = Sinking Fund prices. 
     */
    constructor(ids, categories) { 
        
        RedemptionPricesRequest.initialize(this, ids, categories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids, categories) { 
        obj['ids'] = ids;
        obj['categories'] = categories;
    }

    /**
     * Constructs a <code>RedemptionPricesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RedemptionPricesRequest} obj Optional instance to populate.
     * @return {module:model/RedemptionPricesRequest} The populated <code>RedemptionPricesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RedemptionPricesRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], 'String');
            }
        }
        return obj;
    }


}

/**
 * List of Fixed Income Security identifiers. Supported symbol types include CUSIP, SEDOL, ISIN, and FactSet Security Permanent Identifier (-S).  **ID LIMIT = 250** *per request*. 
 * @member {Array.<String>} ids
 */
RedemptionPricesRequest.prototype['ids'] = undefined;

/**
 * Filters the list of Redemption Prices Categories -   * **CALL** = Call prices.   * **PUT** = Put prices.   * **SF** = Sinking Fund prices. 
 * @member {module:model/RedemptionPricesRequest.CategoriesEnum} categories
 */
RedemptionPricesRequest.prototype['categories'] = undefined;





/**
 * Allowed values for the <code>categories</code> property.
 * @enum {String}
 * @readonly
 */
RedemptionPricesRequest['CategoriesEnum'] = {

    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",

    /**
     * value: "CALL"
     * @const
     */
    "CALL": "CALL",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT",

    /**
     * value: "SF"
     * @const
     */
    "SF": "SF"
};



export default RedemptionPricesRequest;
