
/**
 * PinchLib
 *
 * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 06/01/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of WebhookType
 *
 * @constructor
 */
WebhookType = function (obj) {
    if(!obj) {
        this.id = null;     
        this.name = null;     
    } else {
        this.id = obj.id;
        this.name = obj.name;
    }
};

WebhookType.prototype = new BaseModel();
WebhookType.prototype.constructor = WebhookType;

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
WebhookType.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int} value 
 */
WebhookType.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
WebhookType.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
WebhookType.prototype.setName = function(value) {
    this.name = value;
};


module.exports = WebhookType;