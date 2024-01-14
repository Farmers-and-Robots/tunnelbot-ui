# TunnelbotOpenApi30.PeopleApi

All URIs are relative to *https://tunnelbot.swagger.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPeople**](PeopleApi.md#getPeople) | **GET** /people | Return the people associated with a farm
[**getPersonById**](PeopleApi.md#getPersonById) | **GET** /people/{personId} | Find person by id



## getPeople

> [Person] getPeople()

Return the people associated with a farm

Return the people associated with a farm

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.PeopleApi();
apiInstance.getPeople((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Person]**](Person.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonById

> Person getPersonById(personId)

Find person by id

Returns a single person

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.PeopleApi();
let personId = 789; // Number | id of person to return
apiInstance.getPersonById(personId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **Number**| id of person to return | 

### Return type

[**Person**](Person.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

