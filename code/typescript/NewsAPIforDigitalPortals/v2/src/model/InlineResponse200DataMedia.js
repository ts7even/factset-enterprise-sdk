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
 * The InlineResponse200DataMedia model module.
 * @module model/InlineResponse200DataMedia
 * @version 0.9.1
 */
class InlineResponse200DataMedia {
    /**
     * Constructs a new <code>InlineResponse200DataMedia</code>.
     * @alias module:model/InlineResponse200DataMedia
     */
    constructor() { 
        
        InlineResponse200DataMedia.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataMedia</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataMedia} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataMedia} The populated <code>InlineResponse200DataMedia</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataMedia();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('caption')) {
                obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
            }
            if (data.hasOwnProperty('alternativeText')) {
                obj['alternativeText'] = ApiClient.convertToType(data['alternativeText'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * URL of the media element. The URL is publicly available and hosted by either the publisher, the distributor, or FactSet.
 * @member {String} url
 */
InlineResponse200DataMedia.prototype['url'] = undefined;

/**
 * MIME type of the data of the media element.
 * @member {String} mimeType
 */
InlineResponse200DataMedia.prototype['mimeType'] = undefined;

/**
 * Caption text that can be displayed with the media element. Empty if no caption is available for this media element.
 * @member {String} caption
 */
InlineResponse200DataMedia.prototype['caption'] = undefined;

/**
 * A short description of the media element that can be shown instead of the media element itself.
 * @member {String} alternativeText
 */
InlineResponse200DataMedia.prototype['alternativeText'] = undefined;

/**
 * Width of the media element in pixels if applicable.
 * @member {Number} width
 */
InlineResponse200DataMedia.prototype['width'] = undefined;

/**
 * Height of the media element in pixels if applicable.
 * @member {Number} height
 */
InlineResponse200DataMedia.prototype['height'] = undefined;






export default InlineResponse200DataMedia;

