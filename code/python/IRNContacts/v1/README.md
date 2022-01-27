# fds.sdk.IRNContacts
Allows users to create, update and configure IRN data.

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python >= 3.6

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import fds.sdk.IRNContacts
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import fds.sdk.IRNContacts
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNContacts
from pprint import pprint
from fds.sdk.IRNContacts.api import contact_custom_fields_api
from fds.sdk.IRNContacts.model.contact_custom_field_dto import ContactCustomFieldDto
from fds.sdk.IRNContacts.model.contact_custom_field_list_dto import ContactCustomFieldListDto
from fds.sdk.IRNContacts.model.contact_custom_field_save_dto import ContactCustomFieldSaveDto
from fds.sdk.IRNContacts.model.operation import Operation
from fds.sdk.IRNContacts.model.problem_details import ProblemDetails
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNContacts.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNContacts.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNContacts.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )


# Enter a context with an instance of the API client
with fds.sdk.IRNContacts.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = contact_custom_fields_api.ContactCustomFieldsApi(api_client)
    contact_custom_field_id = "contactCustomFieldId_example" # str | contactCustomFieldId to delete associated record

    try:
        # Delete a contact custom field
        api_instance.v1_contact_custom_fields_contact_custom_field_id_delete(contact_custom_field_id)
    except fds.sdk.IRNContacts.ApiException as e:
        print("Exception when calling ContactCustomFieldsApi->v1_contact_custom_fields_contact_custom_field_id_delete: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.factset.com/research/irn*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ContactCustomFieldsApi* | [**v1_contact_custom_fields_contact_custom_field_id_delete**](docs/ContactCustomFieldsApi.md#v1_contact_custom_fields_contact_custom_field_id_delete) | **DELETE** /v1/contact-custom-fields/{contactCustomFieldId} | Delete a contact custom field
*ContactCustomFieldsApi* | [**v1_contact_custom_fields_contact_custom_field_id_get**](docs/ContactCustomFieldsApi.md#v1_contact_custom_fields_contact_custom_field_id_get) | **GET** /v1/contact-custom-fields/{contactCustomFieldId} | Get a specific Contact custom field&#39;s details
*ContactCustomFieldsApi* | [**v1_contact_custom_fields_contact_custom_field_id_patch**](docs/ContactCustomFieldsApi.md#v1_contact_custom_fields_contact_custom_field_id_patch) | **PATCH** /v1/contact-custom-fields/{contactCustomFieldId} | Edit a contact custom field
*ContactCustomFieldsApi* | [**v1_contact_custom_fields_get**](docs/ContactCustomFieldsApi.md#v1_contact_custom_fields_get) | **GET** /v1/contact-custom-fields | Get all the contact custom fields
*ContactCustomFieldsApi* | [**v1_contact_custom_fields_post**](docs/ContactCustomFieldsApi.md#v1_contact_custom_fields_post) | **POST** /v1/contact-custom-fields | Create a contact custom field
*ContactCustomFieldsApi* | [**v1_contact_custom_fields_reorder_post**](docs/ContactCustomFieldsApi.md#v1_contact_custom_fields_reorder_post) | **POST** /v1/contact-custom-fields/reorder | Reorder contact custom fields
*ContactRelationshipsApi* | [**v1_contact_relationships_contact_relationship_id_delete**](docs/ContactRelationshipsApi.md#v1_contact_relationships_contact_relationship_id_delete) | **DELETE** /v1/contact-relationships/{contactRelationshipId} | Delete a contact relationship
*ContactRelationshipsApi* | [**v1_contact_relationships_contact_relationship_id_get**](docs/ContactRelationshipsApi.md#v1_contact_relationships_contact_relationship_id_get) | **GET** /v1/contact-relationships/{contactRelationshipId} | Get details on a specific contact relationship
*ContactRelationshipsApi* | [**v1_contact_relationships_contact_relationship_id_patch**](docs/ContactRelationshipsApi.md#v1_contact_relationships_contact_relationship_id_patch) | **PATCH** /v1/contact-relationships/{contactRelationshipId} | Update a contact relationship
*ContactRelationshipsApi* | [**v1_contact_relationships_get**](docs/ContactRelationshipsApi.md#v1_contact_relationships_get) | **GET** /v1/contact-relationships | Get all the relationships where the given symbol or contact identifier has been tagged in a relationship
*ContactRelationshipsApi* | [**v1_contact_relationships_post**](docs/ContactRelationshipsApi.md#v1_contact_relationships_post) | **POST** /v1/contact-relationships | Create a contact relationship
*ContactRolesApi* | [**v1_contact_roles_contact_role_id_delete**](docs/ContactRolesApi.md#v1_contact_roles_contact_role_id_delete) | **DELETE** /v1/contact-roles/{contactRoleId} | Delete a contact role
*ContactRolesApi* | [**v1_contact_roles_contact_role_id_put**](docs/ContactRolesApi.md#v1_contact_roles_contact_role_id_put) | **PUT** /v1/contact-roles/{contactRoleId} | Edit a contact role
*ContactRolesApi* | [**v1_contact_roles_get**](docs/ContactRolesApi.md#v1_contact_roles_get) | **GET** /v1/contact-roles | Get list of the contact roles configured in your group
*ContactRolesApi* | [**v1_contact_roles_post**](docs/ContactRolesApi.md#v1_contact_roles_post) | **POST** /v1/contact-roles | Create contact roles
*ContactTypesApi* | [**v1_contact_types_contact_type_id_delete**](docs/ContactTypesApi.md#v1_contact_types_contact_type_id_delete) | **DELETE** /v1/contact-types/{contactTypeId} | Delete a contact type
*ContactTypesApi* | [**v1_contact_types_contact_type_id_put**](docs/ContactTypesApi.md#v1_contact_types_contact_type_id_put) | **PUT** /v1/contact-types/{contactTypeId} | Edit a contact type
*ContactTypesApi* | [**v1_contact_types_get**](docs/ContactTypesApi.md#v1_contact_types_get) | **GET** /v1/contact-types | Get list of the contact types configured in your group
*ContactTypesApi* | [**v1_contact_types_post**](docs/ContactTypesApi.md#v1_contact_types_post) | **POST** /v1/contact-types | Create contact types
*ContactsApi* | [**v1_contacts_contact_id_about_get**](docs/ContactsApi.md#v1_contacts_contact_id_about_get) | **GET** /v1/contacts/{contactId}/about | Get the About field content for a specific contact
*ContactsApi* | [**v1_contacts_contact_id_delete**](docs/ContactsApi.md#v1_contacts_contact_id_delete) | **DELETE** /v1/contacts/{contactId} | Delete a contact
*ContactsApi* | [**v1_contacts_contact_id_events_get**](docs/ContactsApi.md#v1_contacts_contact_id_events_get) | **GET** /v1/contacts/{contactId}/events | Get a contact’s audit history
*ContactsApi* | [**v1_contacts_contact_id_get**](docs/ContactsApi.md#v1_contacts_contact_id_get) | **GET** /v1/contacts/{contactId} | Get all custom field and standard field details on a specific contact
*ContactsApi* | [**v1_contacts_contact_id_patch**](docs/ContactsApi.md#v1_contacts_contact_id_patch) | **PATCH** /v1/contacts/{contactId} | Edit a contact’s standard field and custom field data
*ContactsApi* | [**v1_contacts_contact_id_records_get**](docs/ContactsApi.md#v1_contacts_contact_id_records_get) | **GET** /v1/contacts/{contactId}/records | Get all notes and meetings where a specific contact was tagged
*ContactsApi* | [**v1_contacts_contact_id_relationships_get**](docs/ContactsApi.md#v1_contacts_contact_id_relationships_get) | **GET** /v1/contacts/{contactId}/relationships | Returns a list of a contact’s relationships
*ContactsApi* | [**v1_contacts_get**](docs/ContactsApi.md#v1_contacts_get) | **GET** /v1/contacts | Get list of all contacts in your group along with some of their standard field data
*ContactsApi* | [**v1_contacts_post**](docs/ContactsApi.md#v1_contacts_post) | **POST** /v1/contacts | Create a contact
*PhoneNumberTypesApi* | [**v1_phone_number_types_get**](docs/PhoneNumberTypesApi.md#v1_phone_number_types_get) | **GET** /v1/phone-number-types | Get list of the phone types configured in your group
*PhoneNumberTypesApi* | [**v1_phone_number_types_phone_number_type_id_delete**](docs/PhoneNumberTypesApi.md#v1_phone_number_types_phone_number_type_id_delete) | **DELETE** /v1/phone-number-types/{phoneNumberTypeId} | Delete a phone type
*PhoneNumberTypesApi* | [**v1_phone_number_types_phone_number_type_id_put**](docs/PhoneNumberTypesApi.md#v1_phone_number_types_phone_number_type_id_put) | **PUT** /v1/phone-number-types/{phoneNumberTypeId} | Edit a phone type
*PhoneNumberTypesApi* | [**v1_phone_number_types_post**](docs/PhoneNumberTypesApi.md#v1_phone_number_types_post) | **POST** /v1/phone-number-types | Create a phone type
*RelationshipCategoriesApi* | [**v1_relationship_categories_get**](docs/RelationshipCategoriesApi.md#v1_relationship_categories_get) | **GET** /v1/relationship-categories | Get list of the relationship categories configured in your group
*RelationshipCategoriesApi* | [**v1_relationship_categories_post**](docs/RelationshipCategoriesApi.md#v1_relationship_categories_post) | **POST** /v1/relationship-categories | Create a relationship category
*RelationshipCategoriesApi* | [**v1_relationship_categories_relationship_category_id_delete**](docs/RelationshipCategoriesApi.md#v1_relationship_categories_relationship_category_id_delete) | **DELETE** /v1/relationship-categories/{relationshipCategoryId} | Delete a relationship category
*RelationshipCategoriesApi* | [**v1_relationship_categories_relationship_category_id_put**](docs/RelationshipCategoriesApi.md#v1_relationship_categories_relationship_category_id_put) | **PUT** /v1/relationship-categories/{relationshipCategoryId} | Edit a relationship category
*RelationshipCategoriesApi* | [**v1_relationship_categories_reorder_post**](docs/RelationshipCategoriesApi.md#v1_relationship_categories_reorder_post) | **POST** /v1/relationship-categories/reorder | Reorder relationship categories
*RelationshipsApi* | [**v1_relationships_get**](docs/RelationshipsApi.md#v1_relationships_get) | **GET** /v1/relationships | Get list of the relationships configured in your group
*RelationshipsApi* | [**v1_relationships_post**](docs/RelationshipsApi.md#v1_relationships_post) | **POST** /v1/relationships | Create a relationship type
*RelationshipsApi* | [**v1_relationships_relationship_id_delete**](docs/RelationshipsApi.md#v1_relationships_relationship_id_delete) | **DELETE** /v1/relationships/{relationshipId} | Delete a relationship type
*RelationshipsApi* | [**v1_relationships_relationship_id_put**](docs/RelationshipsApi.md#v1_relationships_relationship_id_put) | **PUT** /v1/relationships/{relationshipId} | Edit a relationship type


## Documentation For Models

 - [AlternativeEmailAddressDto](docs/AlternativeEmailAddressDto.md)
 - [ContactAddressDto](docs/ContactAddressDto.md)
 - [ContactCustomFieldDto](docs/ContactCustomFieldDto.md)
 - [ContactCustomFieldFormulaDto](docs/ContactCustomFieldFormulaDto.md)
 - [ContactCustomFieldListDto](docs/ContactCustomFieldListDto.md)
 - [ContactCustomFieldOptionDto](docs/ContactCustomFieldOptionDto.md)
 - [ContactCustomFieldOptionSaveDto](docs/ContactCustomFieldOptionSaveDto.md)
 - [ContactCustomFieldOptionValueDto](docs/ContactCustomFieldOptionValueDto.md)
 - [ContactCustomFieldSaveDto](docs/ContactCustomFieldSaveDto.md)
 - [ContactCustomFieldType](docs/ContactCustomFieldType.md)
 - [ContactCustomFieldValueDto](docs/ContactCustomFieldValueDto.md)
 - [ContactCustomFieldValueSaveDto](docs/ContactCustomFieldValueSaveDto.md)
 - [ContactDto](docs/ContactDto.md)
 - [ContactEventDto](docs/ContactEventDto.md)
 - [ContactEventUpdateDto](docs/ContactEventUpdateDto.md)
 - [ContactIdNameDto](docs/ContactIdNameDto.md)
 - [ContactPhoneDto](docs/ContactPhoneDto.md)
 - [ContactPhoneSaveDto](docs/ContactPhoneSaveDto.md)
 - [ContactRelationshipDto](docs/ContactRelationshipDto.md)
 - [ContactRelationshipSaveDto](docs/ContactRelationshipSaveDto.md)
 - [ContactRelationshipTwoSidedDto](docs/ContactRelationshipTwoSidedDto.md)
 - [ContactRelationshipTwoSidedSaveDto](docs/ContactRelationshipTwoSidedSaveDto.md)
 - [ContactRoleDto](docs/ContactRoleDto.md)
 - [ContactSaveDto](docs/ContactSaveDto.md)
 - [ContactSummaryDto](docs/ContactSummaryDto.md)
 - [ContactTypeDto](docs/ContactTypeDto.md)
 - [EmployerDto](docs/EmployerDto.md)
 - [FormulaConfigDto](docs/FormulaConfigDto.md)
 - [Operation](docs/Operation.md)
 - [PhoneNumberTypeDto](docs/PhoneNumberTypeDto.md)
 - [ProblemDetails](docs/ProblemDetails.md)
 - [RecordPreviewDto](docs/RecordPreviewDto.md)
 - [RelationshipCategoryDto](docs/RelationshipCategoryDto.md)
 - [RelationshipCategoryIdNameDto](docs/RelationshipCategoryIdNameDto.md)
 - [RelationshipCategoryListDto](docs/RelationshipCategoryListDto.md)
 - [RelationshipCategorySaveDto](docs/RelationshipCategorySaveDto.md)
 - [RelationshipDto](docs/RelationshipDto.md)
 - [RelationshipIdNameDto](docs/RelationshipIdNameDto.md)
 - [RelationshipSaveDto](docs/RelationshipSaveDto.md)
 - [RelationshipSymbolSummaryDto](docs/RelationshipSymbolSummaryDto.md)
 - [RelationshipType](docs/RelationshipType.md)
 - [SymbolType](docs/SymbolType.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Author




## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.IRNContacts.apis and fds.sdk.IRNContacts.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.IRNContacts.api.default_api import DefaultApi`
- `from fds.sdk.IRNContacts.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.IRNContacts
from fds.sdk.IRNContacts.apis import *
from fds.sdk.IRNContacts.models import *
```
