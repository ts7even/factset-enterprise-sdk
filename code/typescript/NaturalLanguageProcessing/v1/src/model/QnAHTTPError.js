/**
 * Natural Language Processing API
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import QnAErrorSource from './QnAErrorSource';

/**
 * The QnAHTTPError model module.
 * @module model/QnAHTTPError
 */
class QnAHTTPError {
    /**
     * Constructs a new <code>QnAHTTPError</code>.
     * Schema that defines HTTP error(s).
     * @alias module:model/QnAHTTPError
     * @param code {String} HTTP Status Code
     * @param id {String} The unique identifier detailing the error(s)
     * @param title {String} Error title
     */
    constructor(code, id, title) { 
        
        QnAHTTPError.initialize(this, code, id, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, id, title) { 
        obj['code'] = code;
        obj['id'] = id;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>QnAHTTPError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QnAHTTPError} obj Optional instance to populate.
     * @return {module:model/QnAHTTPError} The populated <code>QnAHTTPError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QnAHTTPError();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = QnAErrorSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * HTTP Status Code
 * @member {String} code
 */
QnAHTTPError.prototype['code'] = undefined;

/**
 * Error detail (if any)
 * @member {String} detail
 */
QnAHTTPError.prototype['detail'] = undefined;

/**
 * The unique identifier detailing the error(s)
 * @member {String} id
 */
QnAHTTPError.prototype['id'] = undefined;

/**
 * @member {module:model/QnAErrorSource} source
 */
QnAHTTPError.prototype['source'] = undefined;

/**
 * Error title
 * @member {String} title
 */
QnAHTTPError.prototype['title'] = undefined;






export default QnAHTTPError;
