/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse403 model module.
 * @module model/InlineResponse403
 */
class InlineResponse403 {
    /**
     * Constructs a new <code>InlineResponse403</code>.
     * Response from the health check route in the event of a &#39;fail&#39; status
     * @alias module:model/InlineResponse403
     * @param status {module:model/InlineResponse403.StatusEnum} 
     * @param version {String} Full requested semantic version string
     * @param output {String} Raw error output describing the failure(s)
     */
    constructor(status, version, output) { 
        
        InlineResponse403.initialize(this, status, version, output);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, version, output) { 
        obj['status'] = status;
        obj['version'] = version;
        obj['output'] = output;
    }

    /**
     * Constructs a <code>InlineResponse403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse403} obj Optional instance to populate.
     * @return {module:model/InlineResponse403} The populated <code>InlineResponse403</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse403();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('output')) {
                obj['output'] = ApiClient.convertToType(data['output'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse403.StatusEnum} status
 */
InlineResponse403.prototype['status'] = undefined;

/**
 * Full requested semantic version string
 * @member {String} version
 */
InlineResponse403.prototype['version'] = undefined;

/**
 * Raw error output describing the failure(s)
 * @member {String} output
 */
InlineResponse403.prototype['output'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse403['StatusEnum'] = {

    /**
     * value: "fail"
     * @const
     */
    "fail": "fail"
};



export default InlineResponse403;

