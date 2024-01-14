/**
 * Tunnelbot - OpenAPI 3.0
 * This is the API specification for the tunnelbot backend.
 *
 * The version of the OpenAPI document: 1
 * Contact: info@farmersandrobots.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Tunnel from '../model/Tunnel';

/**
* Tunnel service.
* @module api/TunnelApi
* @version 1
*/
export default class TunnelApi {

    /**
    * Constructs a new TunnelApi. 
    * @alias module:api/TunnelApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTunnel operation.
     * @callback module:api/TunnelApi~addTunnelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tunnel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new tunnel to the db
     * Add a new tunnel to the db
     * @param {module:model/Tunnel} tunnel Create a new tunnel in the db
     * @param {module:api/TunnelApi~addTunnelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tunnel}
     */
    addTunnel(tunnel, callback) {
      let postBody = tunnel;
      // verify the required parameter 'tunnel' is set
      if (tunnel === undefined || tunnel === null) {
        throw new Error("Missing the required parameter 'tunnel' when calling addTunnel");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebase'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Tunnel;
      return this.apiClient.callApi(
        '/tunnels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTunnel operation.
     * @callback module:api/TunnelApi~deleteTunnelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a tunnel
     * delete a tunnel
     * @param {Number} tunnelId Tunnel id to delete
     * @param {Object} opts Optional parameters
     * @param {String} [apiKey] 
     * @param {module:api/TunnelApi~deleteTunnelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTunnel(tunnelId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tunnelId' is set
      if (tunnelId === undefined || tunnelId === null) {
        throw new Error("Missing the required parameter 'tunnelId' when calling deleteTunnel");
      }

      let pathParams = {
        'tunnelId': tunnelId
      };
      let queryParams = {
      };
      let headerParams = {
        'api_key': opts['apiKey']
      };
      let formParams = {
      };

      let authNames = ['firebase'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/tunnels/{tunnelId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTunnelById operation.
     * @callback module:api/TunnelApi~getTunnelByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tunnel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find tunnel by id
     * Returns a single tunnel
     * @param {Number} tunnelId id of tunnel to return
     * @param {module:api/TunnelApi~getTunnelByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tunnel}
     */
    getTunnelById(tunnelId, callback) {
      let postBody = null;
      // verify the required parameter 'tunnelId' is set
      if (tunnelId === undefined || tunnelId === null) {
        throw new Error("Missing the required parameter 'tunnelId' when calling getTunnelById");
      }

      let pathParams = {
        'tunnelId': tunnelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebase'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Tunnel;
      return this.apiClient.callApi(
        '/tunnels/{tunnelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTunnels operation.
     * @callback module:api/TunnelApi~getTunnelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tunnel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the tunnels on a farm
     * Return the tunnels on a farm
     * @param {module:api/TunnelApi~getTunnelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Tunnel>}
     */
    getTunnels(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebase'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Tunnel];
      return this.apiClient.callApi(
        '/tunnels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTunnel operation.
     * @callback module:api/TunnelApi~updateTunnelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tunnel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing tunnel
     * Update an existing tunnel by ID
     * @param {module:model/Tunnel} tunnel Update an existent tunnel
     * @param {module:api/TunnelApi~updateTunnelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tunnel}
     */
    updateTunnel(tunnel, callback) {
      let postBody = tunnel;
      // verify the required parameter 'tunnel' is set
      if (tunnel === undefined || tunnel === null) {
        throw new Error("Missing the required parameter 'tunnel' when calling updateTunnel");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebase'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Tunnel;
      return this.apiClient.callApi(
        '/tunnels', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
