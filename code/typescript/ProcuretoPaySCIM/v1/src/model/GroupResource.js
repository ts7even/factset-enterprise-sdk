/**
 * FactSet SCIM API
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GroupResourceMembers from './GroupResourceMembers';
import GroupResourceMeta from './GroupResourceMeta';
import GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group from './GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group';

/**
 * The GroupResource model module.
 * @module model/GroupResource
 * @version 0.20.0
 */
class GroupResource {
    /**
     * Constructs a new <code>GroupResource</code>.
     * @alias module:model/GroupResource
     */
    constructor() { 
        
        GroupResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupResource} obj Optional instance to populate.
     * @return {module:model/GroupResource} The populated <code>GroupResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupResource();

            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [GroupResourceMembers]);
            }
            if (data.hasOwnProperty('urn:scim:schemas:extension:FactSet:EnterpriseHosting:1.0:Group')) {
                obj['urn:scim:schemas:extension:FactSet:EnterpriseHosting:1.0:Group'] = GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group.constructFromObject(data['urn:scim:schemas:extension:FactSet:EnterpriseHosting:1.0:Group']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = GroupResourceMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} schemas
 */
GroupResource.prototype['schemas'] = undefined;

/**
 * @member {String} id
 */
GroupResource.prototype['id'] = undefined;

/**
 * @member {String} externalId
 */
GroupResource.prototype['externalId'] = undefined;

/**
 * A human-readable name for the Group.
 * @member {String} displayName
 */
GroupResource.prototype['displayName'] = undefined;

/**
 * A description for the Group.
 * @member {String} description
 */
GroupResource.prototype['description'] = undefined;

/**
 * A list of members of the Group.
 * @member {Array.<module:model/GroupResourceMembers>} members
 */
GroupResource.prototype['members'] = undefined;

/**
 * @member {module:model/GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group} urn:scim:schemas:extension:FactSet:EnterpriseHosting:1.0:Group
 */
GroupResource.prototype['urn:scim:schemas:extension:FactSet:EnterpriseHosting:1.0:Group'] = undefined;

/**
 * @member {module:model/GroupResourceMeta} meta
 */
GroupResource.prototype['meta'] = undefined;






export default GroupResource;
