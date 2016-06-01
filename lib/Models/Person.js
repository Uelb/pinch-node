
/**
 * PinchLib
 *
 * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 06/01/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Person
 *
 * @constructor
 */
Person = function (obj) {
    if(!obj) {
        this.firstname = null;     
        this.lastname = null;     
        this.homePhoneNumber = null;     
        this.mobilePhoneNumber = null;     
        this.role = null;     
        //Append to variable dictionary
        this._variableDict['homePhoneNumber'] = 'home_phone_number';
        this._variableDict['mobilePhoneNumber'] = 'mobile_phone_number';
    } else {
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.homePhoneNumber = obj.home_phone_number;
        this.mobilePhoneNumber = obj.mobile_phone_number;
        this.role = obj.role;
        //Append to variable dictionary
        this._variableDict['homePhoneNumber'] = 'home_phone_number';
        this._variableDict['mobilePhoneNumber'] = 'mobile_phone_number';
    }
};

Person.prototype = new BaseModel();
Person.prototype.constructor = Person;

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Person.prototype.getFirstname = function() {
    return this.firstname;
};

/**
 * Setter for Firstname
 * 
 * @param {string|null} value 
 */
Person.prototype.setFirstname = function(value) {
    this.firstname = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Person.prototype.getLastname = function() {
    return this.lastname;
};

/**
 * Setter for Lastname
 * 
 * @param {string} value 
 */
Person.prototype.setLastname = function(value) {
    this.lastname = value;
};

/**
 * The landline phone number of the resident or manager
 *
 * @return {string}
 */
Person.prototype.getHomePhoneNumber = function() {
    return this.homePhoneNumber;
};

/**
 * Setter for HomePhoneNumber
 * 
 * @param {string} value 
 */
Person.prototype.setHomePhoneNumber = function(value) {
    this.homePhoneNumber = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Person.prototype.getMobilePhoneNumber = function() {
    return this.mobilePhoneNumber;
};

/**
 * Setter for MobilePhoneNumber
 * 
 * @param {string} value 
 */
Person.prototype.setMobilePhoneNumber = function(value) {
    this.mobilePhoneNumber = value;
};

/**
 * Caretaker, Resident, Manager, ThirdParty
 *
 * @return {string}
 */
Person.prototype.getRole = function() {
    return this.role;
};

/**
 * Setter for Role
 * 
 * @param {string} value 
 */
Person.prototype.setRole = function(value) {
    this.role = value;
};


module.exports = Person;