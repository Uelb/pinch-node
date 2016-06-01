/**
  * @module PinchLib
  *  
  * Pinch API
  */

var configuration = require('./configuration'),
    WebhookTypeController = require('./Controllers/WebhookTypeController'),
    WebhookController = require('./Controllers/WebhookController'),
    TicketController = require('./Controllers/TicketController'),
    WebhookType = require('./Models/WebhookType'),
    Webhook = require('./Models/Webhook'),
    Ticket = require('./Models/Ticket'),
    Person = require('./Models/Person'),
    Building = require('./Models/Building'),
    Unit = require('./Models/Unit'),
    Document = require('./Models/Document');


function initializer(){}

//Main functional components of PinchLib
initializer.configuration = configuration;
initializer.WebhookTypeController = WebhookTypeController;
initializer.WebhookController = WebhookController;
initializer.TicketController = TicketController;

//Main Models of PinchLib
initializer.WebhookType = WebhookType;
initializer.Webhook = Webhook;
initializer.Ticket = Ticket;
initializer.Person = Person;
initializer.Building = Building;
initializer.Unit = Unit;
initializer.Document = Document;

module.exports = initializer;