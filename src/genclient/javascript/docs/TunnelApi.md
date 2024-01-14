# TunnelbotOpenApi30.TunnelApi

All URIs are relative to *https://tunnelbot.swagger.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTunnel**](TunnelApi.md#addTunnel) | **POST** /tunnels | Add a new tunnel to the db
[**deleteTunnel**](TunnelApi.md#deleteTunnel) | **DELETE** /tunnels/{tunnelId} | Deletes a tunnel
[**getTunnelById**](TunnelApi.md#getTunnelById) | **GET** /tunnels/{tunnelId} | Find tunnel by id
[**getTunnels**](TunnelApi.md#getTunnels) | **GET** /tunnels | Return the tunnels on a farm
[**updateTunnel**](TunnelApi.md#updateTunnel) | **PUT** /tunnels | Update an existing tunnel



## addTunnel

> Tunnel addTunnel(tunnel)

Add a new tunnel to the db

Add a new tunnel to the db

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.TunnelApi();
let tunnel = new TunnelbotOpenApi30.Tunnel(); // Tunnel | Create a new tunnel in the db
apiInstance.addTunnel(tunnel, (error, data, response) => {
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
 **tunnel** | [**Tunnel**](Tunnel.md)| Create a new tunnel in the db | 

### Return type

[**Tunnel**](Tunnel.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json


## deleteTunnel

> deleteTunnel(tunnelId, opts)

Deletes a tunnel

delete a tunnel

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.TunnelApi();
let tunnelId = 789; // Number | Tunnel id to delete
let opts = {
  'apiKey': "apiKey_example" // String | 
};
apiInstance.deleteTunnel(tunnelId, opts, (error, data, response) => {
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
 **tunnelId** | **Number**| Tunnel id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTunnelById

> Tunnel getTunnelById(tunnelId)

Find tunnel by id

Returns a single tunnel

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.TunnelApi();
let tunnelId = 789; // Number | id of tunnel to return
apiInstance.getTunnelById(tunnelId, (error, data, response) => {
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
 **tunnelId** | **Number**| id of tunnel to return | 

### Return type

[**Tunnel**](Tunnel.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## getTunnels

> [Tunnel] getTunnels()

Return the tunnels on a farm

Return the tunnels on a farm

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.TunnelApi();
apiInstance.getTunnels((error, data, response) => {
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

[**[Tunnel]**](Tunnel.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTunnel

> Tunnel updateTunnel(tunnel)

Update an existing tunnel

Update an existing tunnel by ID

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.TunnelApi();
let tunnel = new TunnelbotOpenApi30.Tunnel(); // Tunnel | Update an existent tunnel
apiInstance.updateTunnel(tunnel, (error, data, response) => {
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
 **tunnel** | [**Tunnel**](Tunnel.md)| Update an existent tunnel | 

### Return type

[**Tunnel**](Tunnel.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

