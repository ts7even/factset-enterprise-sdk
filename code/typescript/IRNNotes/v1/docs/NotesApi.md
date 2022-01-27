# irnnotes.NotesApi

All URIs are relative to *https://api-sandbox.factset.com/research/irn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNote**](NotesApi.md#createNote) | **POST** /v1/notes | Create a note
[**deleteNote**](NotesApi.md#deleteNote) | **DELETE** /v1/notes/{noteId} | Delete a Note
[**getNote**](NotesApi.md#getNote) | **GET** /v1/notes/{noteId} | Get details of a note
[**getNotes**](NotesApi.md#getNotes) | **GET** /v1/notes | Get all the notes in the specified date range filtered on the given identifiers
[**updateNote**](NotesApi.md#updateNote) | **PUT** /v1/notes/{noteId} | Update a note



## createNote

> NewItemDto createNote(opts)

Create a note

### Example

```javascript
const { ApiClient, NotesApi } = require('@factset/sdk-irnnotes');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new NotesApi();
const opts = {
  'xIRNContributorUsername': "xIRNContributorUsername_example", // String | 
  'xIRNContributorSerial': "xIRNContributorSerial_example", // String | 
  'createNoteDto': new irnnotes.CreateNoteDto() // CreateNoteDto | 
};

// Call api endpoint
apiInstance.createNote(opts).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xIRNContributorUsername** | **String**|  | [optional] 
 **xIRNContributorSerial** | **String**|  | [optional] 
 **createNoteDto** | [**CreateNoteDto**](CreateNoteDto.md)|  | [optional] 

### Return type

[**NewItemDto**](NewItemDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: application/json


## deleteNote

> deleteNote(noteId)

Delete a Note

### Example

```javascript
const { ApiClient, NotesApi } = require('@factset/sdk-irnnotes');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new NotesApi();
const noteId = "noteId_example"; // String | 

// Call api endpoint
apiInstance.deleteNote(noteId).then(
  () => {
    console.log('API called successfully.');
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNote

> NoteDto getNote(noteId)

Get details of a note

### Example

```javascript
const { ApiClient, NotesApi } = require('@factset/sdk-irnnotes');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new NotesApi();
const noteId = "noteId_example"; // String | Note Id

// Call api endpoint
apiInstance.getNote(noteId).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| Note Id | 

### Return type

[**NoteDto**](NoteDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotes

> [NoteSummaryDto] getNotes(opts)

Get all the notes in the specified date range filtered on the given identifiers

### Example

```javascript
const { ApiClient, NotesApi } = require('@factset/sdk-irnnotes');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new NotesApi();
const opts = {
  'start': "start_example", // String | StartDate
  'end': "end_example", // String | EndDate
  'identifiers': ["null"], // [String] | Set of identifiers to filter on
  'authors': ["null"], // [String] | Set of authors to filter on
  'subjects': ["null"], // [String] | Set of subjects to filter on
  'recommendations': ["null"], // [String] | Set of recommendations to filter on
  'sentiments': ["null"], // [String] | Set of sentiments to filter on
  'limit': 56, // Number | Limit on the number of notes retrieved
  'offset': 56, // Number | Fetch notes after the offset
  'modifiedSince': "modifiedSince_example", // String | Only return notes which have been modified or created since a particular time
  'filterOnRelatedSymbols': false, // Boolean | Include notes whose related symbols match the identifier filter
  'xIRNIncludeDeleted': false // Boolean | 
};

// Call api endpoint
apiInstance.getNotes(opts).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **String**| StartDate | [optional] 
 **end** | **String**| EndDate | [optional] 
 **identifiers** | [**[String]**](String.md)| Set of identifiers to filter on | [optional] 
 **authors** | [**[String]**](String.md)| Set of authors to filter on | [optional] 
 **subjects** | [**[String]**](String.md)| Set of subjects to filter on | [optional] 
 **recommendations** | [**[String]**](String.md)| Set of recommendations to filter on | [optional] 
 **sentiments** | [**[String]**](String.md)| Set of sentiments to filter on | [optional] 
 **limit** | **Number**| Limit on the number of notes retrieved | [optional] 
 **offset** | **Number**| Fetch notes after the offset | [optional] 
 **modifiedSince** | **String**| Only return notes which have been modified or created since a particular time | [optional] 
 **filterOnRelatedSymbols** | **Boolean**| Include notes whose related symbols match the identifier filter | [optional] [default to false]
 **xIRNIncludeDeleted** | **Boolean**|  | [optional] [default to false]

### Return type

[**[NoteSummaryDto]**](NoteSummaryDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNote

> updateNote(noteId, opts)

Update a note

### Example

```javascript
const { ApiClient, NotesApi } = require('@factset/sdk-irnnotes');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new NotesApi();
const noteId = "noteId_example"; // String | Note Id
const opts = {
  'updateNoteDto': new irnnotes.UpdateNoteDto() // UpdateNoteDto | Note details to update
};

// Call api endpoint
apiInstance.updateNote(noteId, opts).then(
  () => {
    console.log('API called successfully.');
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **String**| Note Id | 
 **updateNoteDto** | [**UpdateNoteDto**](UpdateNoteDto.md)| Note details to update | [optional] 

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: application/json
