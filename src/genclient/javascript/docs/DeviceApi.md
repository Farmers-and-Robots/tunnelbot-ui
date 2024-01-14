# TunnelbotOpenApi30.DeviceApi

All URIs are relative to *https://tunnelbot.swagger.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDevice**](DeviceApi.md#addDevice) | **POST** /devices | Add a new device to the db
[**deleteDevice**](DeviceApi.md#deleteDevice) | **DELETE** /devices/{deviceId} | Deletes a device
[**getDeviceById**](DeviceApi.md#getDeviceById) | **GET** /devices/{deviceId} | Find device by id
[**getDevices**](DeviceApi.md#getDevices) | **GET** /devices | Return the devices on a farm
[**updateDevice**](DeviceApi.md#updateDevice) | **PUT** /devices | Update an existing device



## addDevice

> Device addDevice(device)

Add a new device to the db

Add a new device to the db

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.DeviceApi();
let device = new TunnelbotOpenApi30.Device(); // Device | Create a new device in the db
apiInstance.addDevice(device, (error, data, response) => {
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
 **device** | [**Device**](Device.md)| Create a new device in the db | 

### Return type

[**Device**](Device.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDevice

> deleteDevice(deviceId, opts)

Deletes a device

delete a device

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.DeviceApi();
let deviceId = 789; // Number | Device id to delete
let opts = {
  'apiKey': "apiKey_example" // String | 
};
apiInstance.deleteDevice(deviceId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **Number**| Device id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getDeviceById

> Device getDeviceById(deviceId)

Find device by id

Returns a single device

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.DeviceApi();
let deviceId = 789; // Number | id of device to return
apiInstance.getDeviceById(deviceId, (error, data, response) => {
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
 **deviceId** | **Number**| id of device to return | 

### Return type

[**Device**](Device.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## getDevices

> [Device] getDevices()

Return the devices on a farm

Return the devices on a farm

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.DeviceApi();
apiInstance.getDevices((error, data, response) => {
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

[**[Device]**](Device.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDevice

> Device updateDevice(device)

Update an existing device

Update an existing device by ID

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.DeviceApi();
let device = new TunnelbotOpenApi30.Device(); // Device | Update an existent device
apiInstance.updateDevice(device, (error, data, response) => {
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
 **device** | [**Device**](Device.md)| Update an existent device | 

### Return type

[**Device**](Device.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

