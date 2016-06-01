
/**
 * PinchLib
 *
 * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 06/01/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Building
 *
 * @constructor
 */
Building = function (obj) {
    if(!obj) {
        this.reference = null;     
        this.name = null;     
        this.address = null;     
        this.zipCode = null;     
        this.city = null;     
        this.country = null;     
        this.latitude = null;     
        this.longitude = null;     
        //Append to variable dictionary
        this._variableDict['zipCode'] = 'zip_code';
    } else {
        this.reference = obj.reference;
        this.name = obj.name;
        this.address = obj.address;
        this.zipCode = obj.zip_code;
        this.city = obj.city;
        this.country = obj.country;
        this.latitude = obj.latitude;
        this.longitude = obj.longitude;
        //Append to variable dictionary
        this._variableDict['zipCode'] = 'zip_code';
    }
};

Building.prototype = new BaseModel();
Building.prototype.constructor = Building;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Building.prototype.getReference = function() {
    return this.reference;
};

/**
 * Setter for Reference
 * 
 * @param {string} value 
 */
Building.prototype.setReference = function(value) {
    this.reference = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Building.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string|null} value 
 */
Building.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Building.prototype.getAddress = function() {
    return this.address;
};

/**
 * Setter for Address
 * 
 * @param {string|null} value 
 */
Building.prototype.setAddress = function(value) {
    this.address = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Building.prototype.getZipCode = function() {
    return this.zipCode;
};

/**
 * Setter for ZipCode
 * 
 * @param {string|null} value 
 */
Building.prototype.setZipCode = function(value) {
    this.zipCode = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Building.prototype.getCity = function() {
    return this.city;
};

/**
 * Setter for City
 * 
 * @param {string|null} value 
 */
Building.prototype.setCity = function(value) {
    this.city = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Building.prototype.getCountry = function() {
    return this.country;
};

/**
 * Setter for Country
 * 
 * @param {string|null} value 
 */
Building.prototype.setCountry = function(value) {
    this.country = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {double|null}
 */
Building.prototype.getLatitude = function() {
    return this.latitude;
};

/**
 * Setter for Latitude
 * 
 * @param {double|null} value 
 */
Building.prototype.setLatitude = function(value) {
    this.latitude = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {double|null}
 */
Building.prototype.getLongitude = function() {
    return this.longitude;
};

/**
 * Setter for Longitude
 * 
 * @param {double|null} value 
 */
Building.prototype.setLongitude = function(value) {
    this.longitude = value;
};


module.exports = Building;