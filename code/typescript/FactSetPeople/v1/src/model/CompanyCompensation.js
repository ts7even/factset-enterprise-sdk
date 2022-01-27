/**
 * FactSet People API
 * The FactSet People API exposes FactSet data for individuals and their jobs. 
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
 * The CompanyCompensation model module.
 * @module model/CompanyCompensation
 * @version 0.9.0
 */
class CompanyCompensation {
    /**
     * Constructs a new <code>CompanyCompensation</code>.
     * List of executives and their compensation details for the specified company identifier.
     * @alias module:model/CompanyCompensation
     */
    constructor() { 
        
        CompanyCompensation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyCompensation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyCompensation} obj Optional instance to populate.
     * @return {module:model/CompanyCompensation} The populated <code>CompanyCompensation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyCompensation();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('personId')) {
                obj['personId'] = ApiClient.convertToType(data['personId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('salary')) {
                obj['salary'] = ApiClient.convertToType(data['salary'], 'Number');
            }
            if (data.hasOwnProperty('bonus')) {
                obj['bonus'] = ApiClient.convertToType(data['bonus'], 'Number');
            }
            if (data.hasOwnProperty('stockAwards')) {
                obj['stockAwards'] = ApiClient.convertToType(data['stockAwards'], 'Number');
            }
            if (data.hasOwnProperty('optionsAwards')) {
                obj['optionsAwards'] = ApiClient.convertToType(data['optionsAwards'], 'Number');
            }
            if (data.hasOwnProperty('otherCompensation')) {
                obj['otherCompensation'] = ApiClient.convertToType(data['otherCompensation'], 'Number');
            }
            if (data.hasOwnProperty('totalCompensation')) {
                obj['totalCompensation'] = ApiClient.convertToType(data['totalCompensation'], 'Number');
            }
            if (data.hasOwnProperty('nonEquityIncentivePlanComp')) {
                obj['nonEquityIncentivePlanComp'] = ApiClient.convertToType(data['nonEquityIncentivePlanComp'], 'Number');
            }
            if (data.hasOwnProperty('nonQualifiedCompEarnings')) {
                obj['nonQualifiedCompEarnings'] = ApiClient.convertToType(data['nonQualifiedCompEarnings'], 'Number');
            }
            if (data.hasOwnProperty('compensationYear')) {
                obj['compensationYear'] = ApiClient.convertToType(data['compensationYear'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Name of the person
 * @member {String} name
 */
CompanyCompensation.prototype['name'] = undefined;

/**
 * Factset Entity Identifier for the Person
 * @member {String} personId
 */
CompanyCompensation.prototype['personId'] = undefined;

/**
 * The requested Position Title
 * @member {String} title
 */
CompanyCompensation.prototype['title'] = undefined;

/**
 * Salary of the person. Expressed in USD and raw units.
 * @member {Number} salary
 */
CompanyCompensation.prototype['salary'] = undefined;

/**
 * Bonus of the executive during the fiscal year. Expressed in USD and raw units.
 * @member {Number} bonus
 */
CompanyCompensation.prototype['bonus'] = undefined;

/**
 * Stock awards for the person. Expressed in USD and raw units.
 * @member {Number} stockAwards
 */
CompanyCompensation.prototype['stockAwards'] = undefined;

/**
 * Option Awards for the person. Expressed in USD and raw units.
 * @member {Number} optionsAwards
 */
CompanyCompensation.prototype['optionsAwards'] = undefined;

/**
 * All the other compensations which are not explicitly defined as salary, bonus, stock awards, or options awards. Expressed in USD and raw units.
 * @member {Number} otherCompensation
 */
CompanyCompensation.prototype['otherCompensation'] = undefined;

/**
 * The sum of all compensation for the requested person as reported by the company. Expressed in USD and raw units.
 * @member {Number} totalCompensation
 */
CompanyCompensation.prototype['totalCompensation'] = undefined;

/**
 * All the earnings pursuant to awards under non-equity incentive plans. Expressed in USD and raw units.
 * @member {Number} nonEquityIncentivePlanComp
 */
CompanyCompensation.prototype['nonEquityIncentivePlanComp'] = undefined;

/**
 * All the other nonqualified defined contribution which are not tax qualified and other contributions. Expressed in USD and raw units.
 * @member {Number} nonQualifiedCompEarnings
 */
CompanyCompensation.prototype['nonQualifiedCompEarnings'] = undefined;

/**
 * The most recent year of compensation is expressed as 'YYYY' as opposed to 'YYYY-MM-DD' format.
 * @member {String} compensationYear
 */
CompanyCompensation.prototype['compensationYear'] = undefined;

/**
 * Original identifier used for the request.
 * @member {String} requestId
 */
CompanyCompensation.prototype['requestId'] = undefined;






export default CompanyCompensation;
