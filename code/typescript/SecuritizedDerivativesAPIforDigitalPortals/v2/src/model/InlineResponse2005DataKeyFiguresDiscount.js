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
import InlineResponse2005DataKeyFiguresDiscountAbsolute from './InlineResponse2005DataKeyFiguresDiscountAbsolute';
import InlineResponse2005DataKeyFiguresDiscountRelative from './InlineResponse2005DataKeyFiguresDiscountRelative';

/**
 * The InlineResponse2005DataKeyFiguresDiscount model module.
 * @module model/InlineResponse2005DataKeyFiguresDiscount
 * @version 0.9.0
 */
class InlineResponse2005DataKeyFiguresDiscount {
    /**
     * Constructs a new <code>InlineResponse2005DataKeyFiguresDiscount</code>.
     * Value ranges related to the discount.
     * @alias module:model/InlineResponse2005DataKeyFiguresDiscount
     */
    constructor() { 
        
        InlineResponse2005DataKeyFiguresDiscount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataKeyFiguresDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataKeyFiguresDiscount} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataKeyFiguresDiscount} The populated <code>InlineResponse2005DataKeyFiguresDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataKeyFiguresDiscount();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = InlineResponse2005DataKeyFiguresDiscountAbsolute.constructFromObject(data['absolute']);
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = InlineResponse2005DataKeyFiguresDiscountRelative.constructFromObject(data['relative']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataKeyFiguresDiscountAbsolute} absolute
 */
InlineResponse2005DataKeyFiguresDiscount.prototype['absolute'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataKeyFiguresDiscountRelative} relative
 */
InlineResponse2005DataKeyFiguresDiscount.prototype['relative'] = undefined;






export default InlineResponse2005DataKeyFiguresDiscount;
