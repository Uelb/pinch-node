
/**
 * PinchLib
 *
 * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 06/01/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Ticket
 *
 * @constructor
 */
Ticket = function (obj) {
    if(!obj) {
        this.id = null;     
        this.name = null;     
        this.description = null;     
        this.contacts = null;     
        this.status = null;     
        this.building = null;     
        this.unit = null;     
        this.access = null;     
        this.agency = null;     
        this.manager = null;     
        this.documents = null;     
    } else {
        this.id = obj.id;
        this.name = obj.name;
        this.description = obj.description;
        this.contacts = obj.contacts.map(function(model){
            return new Person(model);
        });
        this.status = obj.status;
        this.building = new Building(obj.building);
        this.unit = new Unit(obj.unit);
        this.access = obj.access;
        this.agency = obj.agency;
        this.manager = obj.manager;
        this.documents = obj.documents.map(function(model){
            return new Document(model);
        });
    }
};

Ticket.prototype = new BaseModel();
Ticket.prototype.constructor = Ticket;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Ticket.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
Ticket.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Ticket.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
Ticket.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Ticket.prototype.getDescription = function() {
    return this.description;
};

/**
 * Setter for Description
 * 
 * @param {string|null} value 
 */
Ticket.prototype.setDescription = function(value) {
    this.description = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
Ticket.prototype.getContacts = function() {
    return this.contacts;
};

/**
 * Setter for Contacts
 * 
 * @param {array} value 
 */
Ticket.prototype.setContacts = function(value) {
    this.contacts = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Ticket.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 * 
 * @param {string} value 
 */
Ticket.prototype.setStatus = function(value) {
    this.status = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {Building}
 */
Ticket.prototype.getBuilding = function() {
    return this.building;
};

/**
 * Setter for Building
 * 
 * @param {Building} value 
 */
Ticket.prototype.setBuilding = function(value) {
    this.building = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {Unit|null}
 */
Ticket.prototype.getUnit = function() {
    return this.unit;
};

/**
 * Setter for Unit
 * 
 * @param {Unit|null} value 
 */
Ticket.prototype.setUnit = function(value) {
    this.unit = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string|null}
 */
Ticket.prototype.getAccess = function() {
    return this.access;
};

/**
 * Setter for Access
 * 
 * @param {string|null} value 
 */
Ticket.prototype.setAccess = function(value) {
    this.access = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Ticket.prototype.getAgency = function() {
    return this.agency;
};

/**
 * Setter for Agency
 * 
 * @param {string} value 
 */
Ticket.prototype.setAgency = function(value) {
    this.agency = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Ticket.prototype.getManager = function() {
    return this.manager;
};

/**
 * Setter for Manager
 * 
 * @param {string} value 
 */
Ticket.prototype.setManager = function(value) {
    this.manager = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
Ticket.prototype.getDocuments = function() {
    return this.documents;
};

/**
 * Setter for Documents
 * 
 * @param {array} value 
 */
Ticket.prototype.setDocuments = function(value) {
    this.documents = value;
};


module.exports = Ticket;