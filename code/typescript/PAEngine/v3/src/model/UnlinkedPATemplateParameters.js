/**
 * PA Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PACalculationColumn from './PACalculationColumn';
import PACalculationGroup from './PACalculationGroup';
import PADateParameters from './PADateParameters';
import PAIdentifier from './PAIdentifier';
import TemplateContentTypes from './TemplateContentTypes';

/**
 * The UnlinkedPATemplateParameters model module.
 * @module model/UnlinkedPATemplateParameters
 * @version 0.9.0
 */
class UnlinkedPATemplateParameters {
    /**
     * Constructs a new <code>UnlinkedPATemplateParameters</code>.
     * @alias module:model/UnlinkedPATemplateParameters
     * @param directory {String} The directory to create an unlinked PA template
     * @param templateTypeId {String} Template type id
     */
    constructor(directory, templateTypeId) { 
        
        UnlinkedPATemplateParameters.initialize(this, directory, templateTypeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, directory, templateTypeId) { 
        obj['directory'] = directory;
        obj['templateTypeId'] = templateTypeId;
    }

    /**
     * Constructs a <code>UnlinkedPATemplateParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnlinkedPATemplateParameters} obj Optional instance to populate.
     * @return {module:model/UnlinkedPATemplateParameters} The populated <code>UnlinkedPATemplateParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnlinkedPATemplateParameters();

            if (data.hasOwnProperty('directory')) {
                obj['directory'] = ApiClient.convertToType(data['directory'], 'String');
            }
            if (data.hasOwnProperty('templateTypeId')) {
                obj['templateTypeId'] = ApiClient.convertToType(data['templateTypeId'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [PAIdentifier]);
            }
            if (data.hasOwnProperty('benchmarks')) {
                obj['benchmarks'] = ApiClient.convertToType(data['benchmarks'], [PAIdentifier]);
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], [PACalculationColumn]);
            }
            if (data.hasOwnProperty('dates')) {
                obj['dates'] = PADateParameters.constructFromObject(data['dates']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [PACalculationGroup]);
            }
            if (data.hasOwnProperty('currencyisocode')) {
                obj['currencyisocode'] = ApiClient.convertToType(data['currencyisocode'], 'String');
            }
            if (data.hasOwnProperty('componentdetail')) {
                obj['componentdetail'] = ApiClient.convertToType(data['componentdetail'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = TemplateContentTypes.constructFromObject(data['content']);
            }
        }
        return obj;
    }


}

/**
 * The directory to create an unlinked PA template
 * @member {String} directory
 */
UnlinkedPATemplateParameters.prototype['directory'] = undefined;

/**
 * Template type id
 * @member {String} templateTypeId
 */
UnlinkedPATemplateParameters.prototype['templateTypeId'] = undefined;

/**
 * Template description
 * @member {String} description
 */
UnlinkedPATemplateParameters.prototype['description'] = undefined;

/**
 * List of accounts
 * @member {Array.<module:model/PAIdentifier>} accounts
 */
UnlinkedPATemplateParameters.prototype['accounts'] = undefined;

/**
 * List of benchmarks
 * @member {Array.<module:model/PAIdentifier>} benchmarks
 */
UnlinkedPATemplateParameters.prototype['benchmarks'] = undefined;

/**
 * List of columns for the PA calculation
 * @member {Array.<module:model/PACalculationColumn>} columns
 */
UnlinkedPATemplateParameters.prototype['columns'] = undefined;

/**
 * @member {module:model/PADateParameters} dates
 */
UnlinkedPATemplateParameters.prototype['dates'] = undefined;

/**
 * List of groupings for the PA calculation
 * @member {Array.<module:model/PACalculationGroup>} groups
 */
UnlinkedPATemplateParameters.prototype['groups'] = undefined;

/**
 * Currency ISO code for calculation.
 * @member {String} currencyisocode
 */
UnlinkedPATemplateParameters.prototype['currencyisocode'] = undefined;

/**
 * PA storage type. It can be GROUPS or TOTALS or SECURITIES.
 * @member {String} componentdetail
 */
UnlinkedPATemplateParameters.prototype['componentdetail'] = undefined;

/**
 * @member {module:model/TemplateContentTypes} content
 */
UnlinkedPATemplateParameters.prototype['content'] = undefined;






export default UnlinkedPATemplateParameters;
