# TunnelbotOpenApi30.FarmApi

All URIs are relative to *https://tunnelbot.swagger.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFarm**](FarmApi.md#addFarm) | **POST** /farm | Add a new farm to the db
[**addPerson**](FarmApi.md#addPerson) | **PUT** /farm/addFarmAccess/{farmId} | Add farm access for an existing person
[**deleteFarm**](FarmApi.md#deleteFarm) | **DELETE** /farm/{farmId} | Deletes a farm
[**findFarmByName**](FarmApi.md#findFarmByName) | **GET** /farm/findByName | Finds a farm by name
[**getFarmById**](FarmApi.md#getFarmById) | **GET** /farm/{farmId} | Find farm by id
[**removePerson**](FarmApi.md#removePerson) | **PUT** /farm/removeFarmAccess/{farmId} | Remove farm access for an existing person
[**updateFarm**](FarmApi.md#updateFarm) | **PUT** /farm | Update an existing farm



## addFarm

> Farm addFarm(farm)

Add a new farm to the db

Add a new farm to the db

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.FarmApi();
let farm = new TunnelbotOpenApi30.Farm(); // Farm | Create a new farm in the db
apiInstance.addFarm(farm, (error, data, response) => {
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
 **farm** | [**Farm**](Farm.md)| Create a new farm in the db | 

### Return type

[**Farm**](Farm.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json


## addPerson

> Farm addPerson(farmId, farm)

Add farm access for an existing person

Add farm access for an existing person

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.FarmApi();
let farmId = 789; // Number | id of farm to return
let farm = new TunnelbotOpenApi30.Farm(); // Farm | Add farm access for an existent person
apiInstance.addPerson(farmId, farm, (error, data, response) => {
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
 **farmId** | **Number**| id of farm to return | 
 **farm** | [**Farm**](Farm.md)| Add farm access for an existent person | 

### Return type

[**Farm**](Farm.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFarm

> deleteFarm(farmId, opts)

Deletes a farm

delete a farm

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.FarmApi();
let farmId = 789; // Number | Farm id to delete
let opts = {
  'apiKey': "apiKey_example" // String | 
};
apiInstance.deleteFarm(farmId, opts, (error, data, response) => {
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
 **farmId** | **Number**| Farm id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findFarmByName

> Farm findFarmByName(opts)

Finds a farm by name

Looks up the farm by name

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.FarmApi();
let opts = {
  'name': "name_example" // String | String for farm name
};
apiInstance.findFarmByName(opts, (error, data, response) => {
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
 **name** | **String**| String for farm name | [optional] 

### Return type

[**Farm**](Farm.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFarmById

> Farm getFarmById(farmId)

Find farm by id

Returns a single farm

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.FarmApi();
let farmId = 789; // Number | id of farm to return
apiInstance.getFarmById(farmId, (error, data, response) => {
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
 **farmId** | **Number**| id of farm to return | 

### Return type

[**Farm**](Farm.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## removePerson

> Farm removePerson(farmId, farm)

Remove farm access for an existing person

Remove farm access for an existing person

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.FarmApi();
let farmId = 789; // Number | id of farm to return
let farm = new TunnelbotOpenApi30.Farm(); // Farm | remove farm access for an existent person
apiInstance.removePerson(farmId, farm, (error, data, response) => {
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
 **farmId** | **Number**| id of farm to return | 
 **farm** | [**Farm**](Farm.md)| remove farm access for an existent person | 

### Return type

[**Farm**](Farm.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json


## updateFarm

> Farm updateFarm(farm)

Update an existing farm

Update an existing farm by ID

### Example

```javascript
import TunnelbotOpenApi30 from 'tunnelbot_open_api_3_0';
let defaultClient = TunnelbotOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: firebase
let firebase = defaultClient.authentications['firebase'];
firebase.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new TunnelbotOpenApi30.FarmApi();
let farm = new TunnelbotOpenApi30.Farm(); // Farm | Update an existent farm
apiInstance.updateFarm(farm, (error, data, response) => {
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
 **farm** | [**Farm**](Farm.md)| Update an existent farm | 

### Return type

[**Farm**](Farm.md)

### Authorization

[firebase](../README.md#firebase)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json

