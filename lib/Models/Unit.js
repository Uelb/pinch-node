
/**
 * PinchLib
 *
 * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 06/01/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Unit
 *
 * @constructor
 */
Unit = function (obj) {
    if(!obj) {
        this.reference = null;     
        this.tenantName = null;     
        this.floorNumber = null;     
        this.kind = null;     
        this.frenchFloorNumber = null;     
        //Append to variable dictionary
        this._variableDict['tenantName'] = 'tenant_name';
        this._variableDict['floorNumber'] = 'floor_number';
        this._variableDict['frenchFloorNumber'] = 'french_floor_number';
    } else {
        this.reference = obj.reference;
        this.tenantName = obj.tenant_name;
        this.floorNumber = obj.floor_number;
        this.kind = obj.kind;
        this.frenchFloorNumber = obj.french_floor_number;
        //Append to variable dictionary
        this._variableDict['tenantName'] = 'tenant_name';
        this._variableDict['floorNumber'] = 'floor_number';
        this._variableDict['frenchFloorNumber'] = 'french_floor_number';
    }
};

Unit.prototype = new BaseModel();
Unit.prototype.constructor = Unit;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Unit.prototype.getReference = function() {
    return this.reference;
};

/**
 * Setter for Reference
 * 
 * @param {string} value 
 */
Unit.prototype.setReference = function(value) {
    this.reference = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Unit.prototype.getTenantName = function() {
    return this.tenantName;
};

/**
 * Setter for TenantName
 * 
 * @param {string|null} value 
 */
Unit.prototype.setTenantName = function(value) {
    this.tenantName = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Unit.prototype.getFloorNumber = function() {
    return this.floorNumber;
};

/**
 * Setter for FloorNumber
 * 
 * @param {string|null} value 
 */
Unit.prototype.setFloorNumber = function(value) {
    this.floorNumber = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Unit.prototype.getKind = function() {
    return this.kind;
};

/**
 * Setter for Kind
 * 
 * @param {string|null} value 
 */
Unit.prototype.setKind = function(value) {
    this.kind = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Unit.prototype.getFrenchFloorNumber = function() {
    return this.frenchFloorNumber;
};

/**
 * Setter for FrenchFloorNumber
 * 
 * @param {string|null} value 
 */
Unit.prototype.setFrenchFloorNumber = function(value) {
    this.frenchFloorNumber = value;
};


module.exports = Unit;