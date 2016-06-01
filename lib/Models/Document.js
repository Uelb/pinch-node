
/**
 * PinchLib
 *
 * This file was automatically generated for Pinch by APIMATIC v2.0 ( https://apimatic.io ) on 06/01/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Document
 *
 * @constructor
 */
Document = function (obj) {
    if(!obj) {
        this.url = null;     
        this.thumbUrl = null;     
        this.id = null;     
        this.name = null;     
        //Append to variable dictionary
        this._variableDict['thumbUrl'] = 'thumb_url';
    } else {
        this.url = obj.url;
        this.thumbUrl = obj.thumb_url;
        this.id = obj.id;
        this.name = obj.name;
        //Append to variable dictionary
        this._variableDict['thumbUrl'] = 'thumb_url';
    }
};

Document.prototype = new BaseModel();
Document.prototype.constructor = Document;

/**
 * Where to retrieve the document
 *
 * @return {string}
 */
Document.prototype.getUrl = function() {
    return this.url;
};

/**
 * Setter for Url
 * 
 * @param {string} value 
 */
Document.prototype.setUrl = function(value) {
    this.url = value;
};

/**
 * If possible, a thumbnail of the document
 *
 * @return {string}
 */
Document.prototype.getThumbUrl = function() {
    return this.thumbUrl;
};

/**
 * Setter for ThumbUrl
 * 
 * @param {string} value 
 */
Document.prototype.setThumbUrl = function(value) {
    this.thumbUrl = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
Document.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int} value 
 */
Document.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Document.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
Document.prototype.setName = function(value) {
    this.name = value;
};


module.exports = Document;