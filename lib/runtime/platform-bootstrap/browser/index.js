var pm = require('../platform'),
    platform = require('./platform'),
    facade = require('../facade'),
    scion = require('scion');

pm.platform = platform;     //setup platform

//TODO: patch SCION, e.g. with custom <send> implementation

facade.scion = scion;       //extend facade. TODO: mixin better? 

module.exports = facade;