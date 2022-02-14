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
import InlineResponse20042DataAssetClass from './InlineResponse20042DataAssetClass';
import InlineResponse20042DataNsin from './InlineResponse20042DataNsin';
import InlineResponse20042DataType from './InlineResponse20042DataType';

/**
 * The InlineResponse20042Data model module.
 * @module model/InlineResponse20042Data
 * @version 0.9.1
 */
class InlineResponse20042Data {
    /**
     * Constructs a new <code>InlineResponse20042Data</code>.
     * Set of basic data for the instrument.
     * @alias module:model/InlineResponse20042Data
     */
    constructor() { 
        
        InlineResponse20042Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20042Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20042Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20042Data} The populated <code>InlineResponse20042Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20042Data();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('isin')) {
                obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
            }
            if (data.hasOwnProperty('nsin')) {
                obj['nsin'] = InlineResponse20042DataNsin.constructFromObject(data['nsin']);
            }
            if (data.hasOwnProperty('assetClass')) {
                obj['assetClass'] = InlineResponse20042DataAssetClass.constructFromObject(data['assetClass']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], [InlineResponse20042DataType]);
            }
        }
        return obj;
    }


}

/**
 * Name of the instrument.
 * @member {String} name
 */
InlineResponse20042Data.prototype['name'] = undefined;

/**
 * Short name of the instrument.
 * @member {String} shortName
 */
InlineResponse20042Data.prototype['shortName'] = undefined;

/**
 * International Securities Identification Number of the instrument.
 * @member {String} isin
 */
InlineResponse20042Data.prototype['isin'] = undefined;

/**
 * @member {module:model/InlineResponse20042DataNsin} nsin
 */
InlineResponse20042Data.prototype['nsin'] = undefined;

/**
 * @member {module:model/InlineResponse20042DataAssetClass} assetClass
 */
InlineResponse20042Data.prototype['assetClass'] = undefined;

/**
 * Instrument type as defined by FactSet Digital Solutions. Instrument types are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18).
 * @member {Array.<module:model/InlineResponse20042DataType>} type
 */
InlineResponse20042Data.prototype['type'] = undefined;






export default InlineResponse20042Data;

