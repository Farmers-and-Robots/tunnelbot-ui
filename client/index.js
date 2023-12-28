/*
 * Tunnelbot - OpenAPI 3.0
 * This is the API specification for the tunnelbot backend.
 *
 * OpenAPI spec version: 1
 * Contact: info@farmersandrobots.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.51
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {Address} from './model/Address';
import {ApiResponse} from './model/ApiResponse';
import {Device} from './model/Device';
import {DeviceCategory} from './model/DeviceCategory';
import {Devices} from './model/Devices';
import {Farm} from './model/Farm';
import {FarmAssociation} from './model/FarmAssociation';
import {Person} from './model/Person';
import {PersonAssociation} from './model/PersonAssociation';
import {Role} from './model/Role';
import {Tunnel} from './model/Tunnel';
import {Tunnels} from './model/Tunnels';
import {DeviceApi} from './api/DeviceApi';
import {FarmApi} from './api/FarmApi';
import {PeopleApi} from './api/PeopleApi';
import {TunnelApi} from './api/TunnelApi';

/**
* This_is_the_API_specification_for_the_tunnelbot_backend_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TunnelbotOpenApi30 = require('index'); // See note below*.
* var xxxSvc = new TunnelbotOpenApi30.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TunnelbotOpenApi30.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TunnelbotOpenApi30.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TunnelbotOpenApi30.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse,

    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device,

    /**
     * The DeviceCategory model constructor.
     * @property {module:model/DeviceCategory}
     */
    DeviceCategory,

    /**
     * The Devices model constructor.
     * @property {module:model/Devices}
     */
    Devices,

    /**
     * The Farm model constructor.
     * @property {module:model/Farm}
     */
    Farm,

    /**
     * The FarmAssociation model constructor.
     * @property {module:model/FarmAssociation}
     */
    FarmAssociation,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The PersonAssociation model constructor.
     * @property {module:model/PersonAssociation}
     */
    PersonAssociation,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The Tunnel model constructor.
     * @property {module:model/Tunnel}
     */
    Tunnel,

    /**
     * The Tunnels model constructor.
     * @property {module:model/Tunnels}
     */
    Tunnels,

    /**
    * The DeviceApi service constructor.
    * @property {module:api/DeviceApi}
    */
    DeviceApi,

    /**
    * The FarmApi service constructor.
    * @property {module:api/FarmApi}
    */
    FarmApi,

    /**
    * The PeopleApi service constructor.
    * @property {module:api/PeopleApi}
    */
    PeopleApi,

    /**
    * The TunnelApi service constructor.
    * @property {module:api/TunnelApi}
    */
    TunnelApi
};
