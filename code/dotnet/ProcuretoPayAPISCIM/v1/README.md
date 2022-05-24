<img alt="FactSet" src="https://www.factset.com/hubfs/Assets/images/factset-logo.svg" height="56" width="290">

# Procure to Pay API: SCIM client library for .NET

[![Nuget](https://img.shields.io/nuget/v/FactSet.SDK.ProcuretoPayAPISCIM)](https://www.nuget.org/packages/FactSet.SDK.ProcuretoPayAPISCIM)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

FactSet's SCIM API implementation.

This .NET package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.20.0
- Build package: com.factset.sdk.codegen.FactSetCSharpNetCoreClientCodegen

## Requirements

* .NET Standard >= 2.0

## Installation

### .NET CLI

```bash
dotnet add package FactSet.SDK.Utils
dotnet add package FactSet.SDK.ProcuretoPayAPISCIM
```

### NuGet

```bash
nuget install FactSet.SDK.Utils
nuget install FactSet.SDK.ProcuretoPayAPISCIM
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup [.NET Standard 2.0](https://docs.microsoft.com/en-us/dotnet/standard/net-standard?tabs=net-standard-2-0) compatible environment.
3. [Install dependencies](#installation).
4. Run the following:

```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.ProcuretoPayAPISCIM.Api;
using FactSet.SDK.ProcuretoPayAPISCIM.Client;
using FactSet.SDK.ProcuretoPayAPISCIM.Model;

namespace Example
{ 
    public static class FileManagerAuditGetExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.PAEngine.Client.Configuration();

            // Examples for each supported authentication method are below,
            // choose one that satisfies your use case.

            /* (Preferred) OAuth 2.0: FactSetOAuth2 */
            // See https://github.com/FactSet/enterprise-sdk#oauth-20
            // for information on how to create the app-config.json file
            // See https://github.com/FactSet/enterprise-sdk-utils-dotnet#authentication
            // for more information on using the ConfidentialClient class
            ConfidentialClient confidentialClient = await ConfidentialClient.CreateAsync("/path/to/app-config.json");
            config.OAuth2Client = confidentialClient;

            /* Basic authentication: FactSetApiKey */
            // See https://github.com/FactSet/enterprise-sdk#api-key
            // for information how to create an API key
            // config.Username = "USERNAME-SERIAL";
            // config.Password = "API-KEY";

            var apiInstance = new FileManagerAuditApi(config);

            try
            {
                // Get File Manager audit data.
                List<Object> result = apiInstance.FileManagerAuditGet();
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling FileManagerAuditApi.FileManagerAuditGet: " + e.Message );
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }

        }
    }
}
```

### Using a Proxy

To use the API client with a HTTP proxy, setup a `System.Net.WebProxy`

```csharp
Configuration c = new Configuration();
System.Net.WebProxy webProxy = new System.Net.WebProxy("http://myProxyUrl:80/");
webProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;
c.Proxy = webProxy;
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/scim/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FileManagerAuditApi* | [**FileManagerAuditGet**](docs/FileManagerAuditApi.md#filemanagerauditget) | **GET** /FileManagerAudit | Get File Manager audit data.
*GroupsApi* | [**GroupIdGet**](docs/GroupsApi.md#groupidget) | **GET** /Group/{id} | Get a group.
*GroupsApi* | [**GroupIdPatch**](docs/GroupsApi.md#groupidpatch) | **PATCH** /Group/{id} | Patch a group (add, replace, or remove attributes of a group.)
*GroupsApi* | [**GroupIdPut**](docs/GroupsApi.md#groupidput) | **PUT** /Group/{id} | Replace a group.
*GroupsApi* | [**GroupsGet**](docs/GroupsApi.md#groupsget) | **GET** /Groups | Get a list of groups.
*LocationsApi* | [**LocationsGet**](docs/LocationsApi.md#locationsget) | **GET** /Locations | Get a list of locations.
*LocationsApi* | [**LocationsIdGet**](docs/LocationsApi.md#locationsidget) | **GET** /Locations/{id} | Get a location.
*LocationsApi* | [**LocationsIdPatch**](docs/LocationsApi.md#locationsidpatch) | **PATCH** /Locations/{id} | Patch a location (add, replace, or remove attributes of a location.)
*LocationsApi* | [**LocationsIdPut**](docs/LocationsApi.md#locationsidput) | **PUT** /Locations/{id} | Replace a location.
*ProductsApi* | [**ProductsGet**](docs/ProductsApi.md#productsget) | **GET** /Products | Get a list of products.
*ProductsApi* | [**ProductsIdGet**](docs/ProductsApi.md#productsidget) | **GET** /Products/{id} | Get a product.
*SchemasApi* | [**SchemasGet**](docs/SchemasApi.md#schemasget) | **GET** /Schemas | Get a list of schemas.
*SchemasApi* | [**SchemasIdGet**](docs/SchemasApi.md#schemasidget) | **GET** /Schemas/{id} | Get a schema.
*ServerConfigurationApi* | [**ServiceProviderConfigGet**](docs/ServerConfigurationApi.md#serviceproviderconfigget) | **GET** /ServiceProviderConfig | Get server configuration.
*UsersApi* | [**UsersGet**](docs/UsersApi.md#usersget) | **GET** /Users | Get a list of users.
*UsersApi* | [**UsersIdDelete**](docs/UsersApi.md#usersiddelete) | **DELETE** /Users/{id} | Delete a user
*UsersApi* | [**UsersIdGet**](docs/UsersApi.md#usersidget) | **GET** /Users/{id} | Get a user.
*UsersApi* | [**UsersIdPatch**](docs/UsersApi.md#usersidpatch) | **PATCH** /Users/{id} | Patch a user (add, replace, or remove attributes of a user.)
*UsersApi* | [**UsersIdPut**](docs/UsersApi.md#usersidput) | **PUT** /Users/{id} | Replace a user.
*UsersApi* | [**UsersPost**](docs/UsersApi.md#userspost) | **POST** /Users | Create a user.
*VermilionGroupsApi* | [**VermilionGroupsGet**](docs/VermilionGroupsApi.md#vermiliongroupsget) | **GET** /VermilionGroups | Get a list of Vermilion groups.
*VermilionGroupsApi* | [**VermilionGroupsIdGet**](docs/VermilionGroupsApi.md#vermiliongroupsidget) | **GET** /VermilionGroups/{id} | Get a Vermilion group.
*VermilionGroupsApi* | [**VermilionGroupsIdPatch**](docs/VermilionGroupsApi.md#vermiliongroupsidpatch) | **PATCH** /VermilionGroups/{id} | Patch a Vermilion group (add, replace, or remove attributes of a Vermilion group.)
*VermilionGroupsApi* | [**VermilionGroupsIdPut**](docs/VermilionGroupsApi.md#vermiliongroupsidput) | **PUT** /VermilionGroups/{id} | Replace a Vermilion group.
*VermilionUsersApi* | [**VermilionUsersGet**](docs/VermilionUsersApi.md#vermilionusersget) | **GET** /VermilionUsers | Get a list of Vermilion users.
*VermilionUsersApi* | [**VermilionUsersIdDelete**](docs/VermilionUsersApi.md#vermilionusersiddelete) | **DELETE** /VermilionUsers/{id} | Delete a Vermilion user.
*VermilionUsersApi* | [**VermilionUsersIdGet**](docs/VermilionUsersApi.md#vermilionusersidget) | **GET** /VermilionUsers/{id} | Get a Vermilion user.
*VermilionUsersApi* | [**VermilionUsersIdPatch**](docs/VermilionUsersApi.md#vermilionusersidpatch) | **PATCH** /VermilionUsers/{id} | Patch a Vermilion user (add, replace, or remove attributes of a Vermilion user.)
*VermilionUsersApi* | [**VermilionUsersIdPut**](docs/VermilionUsersApi.md#vermilionusersidput) | **PUT** /VermilionUsers/{id} | Replace a Vermilion user.
*VermilionUsersApi* | [**VermilionUsersPost**](docs/VermilionUsersApi.md#vermilionuserspost) | **POST** /VermilionUsers | Create a Vermilion user.


## Documentation for Models

 - [Model.Error](docs/Error.md)
 - [Model.GroupResource](docs/GroupResource.md)
 - [Model.GroupResourceList](docs/GroupResourceList.md)
 - [Model.GroupResourceMembers](docs/GroupResourceMembers.md)
 - [Model.GroupResourceMeta](docs/GroupResourceMeta.md)
 - [Model.GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group](docs/GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group.md)
 - [Model.LocationResource](docs/LocationResource.md)
 - [Model.LocationResourceList](docs/LocationResourceList.md)
 - [Model.LocationResourceMeta](docs/LocationResourceMeta.md)
 - [Model.LocationResourceReference](docs/LocationResourceReference.md)
 - [Model.Patch](docs/Patch.md)
 - [Model.PatchOperations](docs/PatchOperations.md)
 - [Model.PendingProductOrder](docs/PendingProductOrder.md)
 - [Model.ProductResource](docs/ProductResource.md)
 - [Model.ProductResourceList](docs/ProductResourceList.md)
 - [Model.ProductResourceMeta](docs/ProductResourceMeta.md)
 - [Model.ProductResourceReference](docs/ProductResourceReference.md)
 - [Model.Schema](docs/Schema.md)
 - [Model.SchemaAttributes](docs/SchemaAttributes.md)
 - [Model.SchemaList](docs/SchemaList.md)
 - [Model.SchemaSubAttributes](docs/SchemaSubAttributes.md)
 - [Model.ServiceProviderConfig](docs/ServiceProviderConfig.md)
 - [Model.ServiceProviderConfigAuthenticationSchemes](docs/ServiceProviderConfigAuthenticationSchemes.md)
 - [Model.ServiceProviderConfigBulk](docs/ServiceProviderConfigBulk.md)
 - [Model.ServiceProviderConfigChangePassword](docs/ServiceProviderConfigChangePassword.md)
 - [Model.ServiceProviderConfigEtag](docs/ServiceProviderConfigEtag.md)
 - [Model.ServiceProviderConfigFilter](docs/ServiceProviderConfigFilter.md)
 - [Model.ServiceProviderConfigPatch](docs/ServiceProviderConfigPatch.md)
 - [Model.ServiceProviderConfigSort](docs/ServiceProviderConfigSort.md)
 - [Model.UserResource](docs/UserResource.md)
 - [Model.UserResourceGroups](docs/UserResourceGroups.md)
 - [Model.UserResourceList](docs/UserResourceList.md)
 - [Model.UserResourceMeta](docs/UserResourceMeta.md)
 - [Model.UserResourceName](docs/UserResourceName.md)
 - [Model.UserResourcePhoneNumbers](docs/UserResourcePhoneNumbers.md)
 - [Model.UserResourceUrnScimSchemasExtensionCoreFactset10](docs/UserResourceUrnScimSchemasExtensionCoreFactset10.md)
 - [Model.VermilionGroupResource](docs/VermilionGroupResource.md)
 - [Model.VermilionGroupResourceList](docs/VermilionGroupResourceList.md)
 - [Model.VermilionGroupResourceMembers](docs/VermilionGroupResourceMembers.md)
 - [Model.VermilionGroupResourceMeta](docs/VermilionGroupResourceMeta.md)
 - [Model.VermilionUserResource](docs/VermilionUserResource.md)
 - [Model.VermilionUserResourceEmails](docs/VermilionUserResourceEmails.md)
 - [Model.VermilionUserResourceEntitlements](docs/VermilionUserResourceEntitlements.md)
 - [Model.VermilionUserResourceGroups](docs/VermilionUserResourceGroups.md)
 - [Model.VermilionUserResourceList](docs/VermilionUserResourceList.md)
 - [Model.VermilionUserResourceMeta](docs/VermilionUserResourceMeta.md)
 - [Model.VermilionUserResourceName](docs/VermilionUserResourceName.md)
 - [Model.VermilionUserResourcePhoneNumbers](docs/VermilionUserResourcePhoneNumbers.md)
 - [Model.VermilionUserResourcePhotos](docs/VermilionUserResourcePhotos.md)
 - [Model.VermilionUserResourceRoles](docs/VermilionUserResourceRoles.md)


## Documentation for Authorization


### FactSetApiKey

- **Type**: HTTP basic authentication


### FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Contributing

Please refer to the [contributing guide](../../../../CONTRIBUTING.md).

## Copyright

Copyright 2022 FactSet Research Systems Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.