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
 * The InlineResponse2003DataThetaOneWeek model module.
 * @module model/InlineResponse2003DataThetaOneWeek
 * @version 0.9.0
 */
class InlineResponse2003DataThetaOneWeek {
    /**
     * Constructs a new <code>InlineResponse2003DataThetaOneWeek</code>.
     * Ask-based weekly theta. It represents the first partial derivative of the function determining the derivative notation&#39;s theoretical price with respect to the residual term, evaluated at the current residual term and multiplied by 7/365. Weekly theta indicates the absolute change (decrease) of the price of a derivative for a reduction of the residual term by one week (seven calendar days), thus it represents the price sensitivity of the derivative relative to changes in the residual term. This key figure is calculated for plain vanilla warrants only.
     * @alias module:model/InlineResponse2003DataThetaOneWeek
     */
    constructor() { 
        
        InlineResponse2003DataThetaOneWeek.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003DataThetaOneWeek</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003DataThetaOneWeek} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003DataThetaOneWeek} The populated <code>InlineResponse2003DataThetaOneWeek</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003DataThetaOneWeek();

            if (data.hasOwnProperty('effective')) {
                obj['effective'] = ApiClient.convertToType(data['effective'], 'Number');
            }
            if (data.hasOwnProperty('unadjusted')) {
                obj['unadjusted'] = ApiClient.convertToType(data['unadjusted'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Weekly theta calculated using the actual cover ratio of the securitized derivative.
 * @member {Number} effective
 */
InlineResponse2003DataThetaOneWeek.prototype['effective'] = undefined;

/**
 * Weekly theta calculated using a (hypothetical) cover ratio of 1:1.
 * @member {Number} unadjusted
 */
InlineResponse2003DataThetaOneWeek.prototype['unadjusted'] = undefined;






export default InlineResponse2003DataThetaOneWeek;
