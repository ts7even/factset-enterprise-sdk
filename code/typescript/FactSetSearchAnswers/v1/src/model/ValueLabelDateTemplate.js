/**
 * FactSet Search Answers API
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApplicationLink from './ApplicationLink';
import Fdc3Context from './Fdc3Context';
import TemplateWithLinks from './TemplateWithLinks';
import ValueLabelDateTemplateAllOf from './ValueLabelDateTemplateAllOf';

/**
 * The ValueLabelDateTemplate model module.
 * @module model/ValueLabelDateTemplate
 * @version 0.9.1
 */
class ValueLabelDateTemplate {
    /**
     * Constructs a new <code>ValueLabelDateTemplate</code>.
     * @alias module:model/ValueLabelDateTemplate
     * @implements module:model/TemplateWithLinks
     * @implements module:model/ValueLabelDateTemplateAllOf
     * @param headline {String} 
     */
    constructor(headline) { 
        TemplateWithLinks.initialize(this, headline);ValueLabelDateTemplateAllOf.initialize(this);
        ValueLabelDateTemplate.initialize(this, headline);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, headline) { 
        obj['headline'] = headline;
    }

    /**
     * Constructs a <code>ValueLabelDateTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValueLabelDateTemplate} obj Optional instance to populate.
     * @return {module:model/ValueLabelDateTemplate} The populated <code>ValueLabelDateTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValueLabelDateTemplate();
            TemplateWithLinks.constructFromObject(data, obj);
            ValueLabelDateTemplateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('headline')) {
                obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
            }
            if (data.hasOwnProperty('footer')) {
                obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
            }
            if (data.hasOwnProperty('fdc3Context')) {
                obj['fdc3Context'] = Fdc3Context.constructFromObject(data['fdc3Context']);
            }
            if (data.hasOwnProperty('applicationLinks')) {
                obj['applicationLinks'] = ApiClient.convertToType(data['applicationLinks'], [ApplicationLink]);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} headline
 */
ValueLabelDateTemplate.prototype['headline'] = undefined;

/**
 * @member {String} footer
 */
ValueLabelDateTemplate.prototype['footer'] = undefined;

/**
 * @member {module:model/Fdc3Context} fdc3Context
 */
ValueLabelDateTemplate.prototype['fdc3Context'] = undefined;

/**
 * @member {Array.<module:model/ApplicationLink>} applicationLinks
 */
ValueLabelDateTemplate.prototype['applicationLinks'] = undefined;

/**
 * @member {String} value
 */
ValueLabelDateTemplate.prototype['value'] = undefined;

/**
 * @member {String} label
 */
ValueLabelDateTemplate.prototype['label'] = undefined;

/**
 * @member {String} date
 */
ValueLabelDateTemplate.prototype['date'] = undefined;


// Implement TemplateWithLinks interface:
/**
 * @member {String} headline
 */
TemplateWithLinks.prototype['headline'] = undefined;
/**
 * @member {String} footer
 */
TemplateWithLinks.prototype['footer'] = undefined;
/**
 * @member {module:model/Fdc3Context} fdc3Context
 */
TemplateWithLinks.prototype['fdc3Context'] = undefined;
/**
 * @member {Array.<module:model/ApplicationLink>} applicationLinks
 */
TemplateWithLinks.prototype['applicationLinks'] = undefined;
// Implement ValueLabelDateTemplateAllOf interface:
/**
 * @member {String} value
 */
ValueLabelDateTemplateAllOf.prototype['value'] = undefined;
/**
 * @member {String} label
 */
ValueLabelDateTemplateAllOf.prototype['label'] = undefined;
/**
 * @member {String} date
 */
ValueLabelDateTemplateAllOf.prototype['date'] = undefined;




export default ValueLabelDateTemplate;

