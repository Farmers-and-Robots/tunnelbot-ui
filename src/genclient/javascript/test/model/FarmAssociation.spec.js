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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TunnelbotOpenApi30);
  }
}(this, function(expect, TunnelbotOpenApi30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TunnelbotOpenApi30.FarmAssociation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FarmAssociation', function() {
    it('should create an instance of FarmAssociation', function() {
      // uncomment below and update the code to test FarmAssociation
      //var instance = new TunnelbotOpenApi30.FarmAssociation();
      //expect(instance).to.be.a(TunnelbotOpenApi30.FarmAssociation);
    });

    it('should have the property farmId (base name: "farmId")', function() {
      // uncomment below and update the code to test the property farmId
      //var instance = new TunnelbotOpenApi30.FarmAssociation();
      //expect(instance).to.be();
    });

    it('should have the property farmName (base name: "farmName")', function() {
      // uncomment below and update the code to test the property farmName
      //var instance = new TunnelbotOpenApi30.FarmAssociation();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new TunnelbotOpenApi30.FarmAssociation();
      //expect(instance).to.be();
    });

  });

}));
