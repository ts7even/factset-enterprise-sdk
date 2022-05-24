/**
 * Time Series API For Digital Portals
 * Time series data, end-of-day or intraday, tick-by-tick or subsampled. Additional vendor-specific endpoints provide a modified interface for seamless integration with the ChartIQ chart library.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2007DataSubsamples from './InlineResponse2007DataSubsamples';
import InlineResponse200DataRange from './InlineResponse200DataRange';

/**
 * The InlineResponse2007Data model module.
 * @module model/InlineResponse2007Data
 * @version 0.10.0
 */
class InlineResponse2007Data {
    /**
     * Constructs a new <code>InlineResponse2007Data</code>.
     * Subsampled time series data for the notation.
     * @alias module:model/InlineResponse2007Data
     */
    constructor() { 
        
        InlineResponse2007Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007Data} The populated <code>InlineResponse2007Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007Data();

            if (data.hasOwnProperty('range')) {
                obj['range'] = InlineResponse200DataRange.constructFromObject(data['range']);
            }
            if (data.hasOwnProperty('quality')) {
                obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
            }
            if (data.hasOwnProperty('subsamples')) {
                obj['subsamples'] = ApiClient.convertToType(data['subsamples'], [InlineResponse2007DataSubsamples]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse200DataRange} range
 */
InlineResponse2007Data.prototype['range'] = undefined;

/**
 * Quality of the price.
 * @member {module:model/InlineResponse2007Data.QualityEnum} quality
 */
InlineResponse2007Data.prototype['quality'] = undefined;

/**
 * List of summary records. For the attributes first, last, low, high, see attribute `valueUnit` in endpoint `/prices/get` for their unit, except for price type yield, where the `valueUnit` is always `percent` (id=258).
 * @member {Array.<module:model/InlineResponse2007DataSubsamples>} subsamples
 */
InlineResponse2007Data.prototype['subsamples'] = undefined;





/**
 * Allowed values for the <code>quality</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2007Data['QualityEnum'] = {

    /**
     * value: "DLY"
     * @const
     */
    "DLY": "DLY",

    /**
     * value: "EOD"
     * @const
     */
    "EOD": "EOD"
};



export default InlineResponse2007Data;
