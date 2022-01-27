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
 * The Job model module.
 * @module model/Job
 * @version 0.9.0
 */
class Job {
    /**
     * Constructs a new <code>Job</code>.
     * Basic information about a person&#39;s &#x60;Job&#x60;.
     * @alias module:model/Job
     */
    constructor() { 
        
        Job.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Job} obj Optional instance to populate.
     * @return {module:model/Job} The populated <code>Job</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Job();

            if (data.hasOwnProperty('companyCity')) {
                obj['companyCity'] = ApiClient.convertToType(data['companyCity'], 'String');
            }
            if (data.hasOwnProperty('companyId')) {
                obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('jobEndDate')) {
                obj['jobEndDate'] = ApiClient.convertToType(data['jobEndDate'], 'Date');
            }
            if (data.hasOwnProperty('jobFunctionCode')) {
                obj['jobFunctionCode'] = ApiClient.convertToType(data['jobFunctionCode'], 'String');
            }
            if (data.hasOwnProperty('jobFunctionName')) {
                obj['jobFunctionName'] = ApiClient.convertToType(data['jobFunctionName'], 'String');
            }
            if (data.hasOwnProperty('jobStartDate')) {
                obj['jobStartDate'] = ApiClient.convertToType(data['jobStartDate'], 'Date');
            }
            if (data.hasOwnProperty('jobTitle')) {
                obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
            }
            if (data.hasOwnProperty('personId')) {
                obj['personId'] = ApiClient.convertToType(data['personId'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * City the job is located in.
 * @member {String} companyCity
 */
Job.prototype['companyCity'] = undefined;

/**
 * FactSet Identifier for the company.
 * @member {String} companyId
 */
Job.prototype['companyId'] = undefined;

/**
 * Name of the company.
 * @member {String} companyName
 */
Job.prototype['companyName'] = undefined;

/**
 * Ending date for the Job.
 * @member {Date} jobEndDate
 */
Job.prototype['jobEndDate'] = undefined;

/**
 * Job function code.
 * @member {String} jobFunctionCode
 */
Job.prototype['jobFunctionCode'] = undefined;

/**
 * Description of the job.
 * @member {String} jobFunctionName
 */
Job.prototype['jobFunctionName'] = undefined;

/**
 * Starting date for the Job.
 * @member {Date} jobStartDate
 */
Job.prototype['jobStartDate'] = undefined;

/**
 * Job Title
 * @member {String} jobTitle
 */
Job.prototype['jobTitle'] = undefined;

/**
 * FactSet Entity Identifier for the Person.
 * @member {String} personId
 */
Job.prototype['personId'] = undefined;

/**
 * Original identifier used for the request.
 * @member {String} requestId
 */
Job.prototype['requestId'] = undefined;






export default Job;
