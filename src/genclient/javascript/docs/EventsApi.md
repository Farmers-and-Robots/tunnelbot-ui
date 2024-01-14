# TunnelbotOpenApi30.EventsApi

All URIs are relative to *https://tunnelbot.swagger.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEventById**](EventsApi.md#getEventById) | **GET** /events/{eventId} | Find event by id
[**getEvents**](EventsApi.md#getEvents) | **GET** /events | Return the events associated with a farm



## getEventById

> Event getEventById(eventId)

Find event by id

Returns a single event

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.EventsApi();
let eventId = 789; // Number | id of event to return
apiInstance.getEventById(eventId, (error, data, response) => {
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
 **eventId** | **Number**| id of event to return | 

### Return type

[**Event**](Event.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## getEvents

> [Event] getEvents()

Return the events associated with a farm

Return the events associated with a farm

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.EventsApi();
apiInstance.getEvents((error, data, response) => {
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

[**[Event]**](Event.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

