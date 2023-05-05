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
import DataPointMeta from './DataPointMeta';

/**
 * The ProfileDataStagePevcLatestPostMoneyValuation model module.
 * @module model/ProfileDataStagePevcLatestPostMoneyValuation
 */
class ProfileDataStagePevcLatestPostMoneyValuation {
    /**
     * Constructs a new <code>ProfileDataStagePevcLatestPostMoneyValuation</code>.
     * @alias module:model/ProfileDataStagePevcLatestPostMoneyValuation
     * @param value {Number} 
     * @param asOfDate {Number} 
     */
    constructor(value, asOfDate) { 
        
        ProfileDataStagePevcLatestPostMoneyValuation.initialize(this, value, asOfDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, asOfDate) { 
        obj['value'] = value;
        obj['asOfDate'] = asOfDate;
    }

    /**
     * Constructs a <code>ProfileDataStagePevcLatestPostMoneyValuation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProfileDataStagePevcLatestPostMoneyValuation} obj Optional instance to populate.
     * @return {module:model/ProfileDataStagePevcLatestPostMoneyValuation} The populated <code>ProfileDataStagePevcLatestPostMoneyValuation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileDataStagePevcLatestPostMoneyValuation();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('asOfDate')) {
                obj['asOfDate'] = ApiClient.convertToType(data['asOfDate'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = DataPointMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} value
 */
ProfileDataStagePevcLatestPostMoneyValuation.prototype['value'] = undefined;

/**
 * @member {Number} asOfDate
 */
ProfileDataStagePevcLatestPostMoneyValuation.prototype['asOfDate'] = undefined;

/**
 * @member {module:model/DataPointMeta} meta
 */
ProfileDataStagePevcLatestPostMoneyValuation.prototype['meta'] = undefined;






export default ProfileDataStagePevcLatestPostMoneyValuation;

