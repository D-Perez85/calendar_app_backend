const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'get'
    });
}

const createEvent = async( req, res = response ) => {
    const event = new Event(req.body); 
    console.log(req.body);
try{
    event.user = req.uid; 
    const eventSaved = await event.save(); 
    res.json({
        ok: true,
        msg: eventSaved
    });
    
}catch{
    console.log(error)
    res.status(500).json({
        ok: false,
        msg: 'Contact the admin'
    });
  }
}

const updateEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'update'
    });
}

const deleteEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'delete'
    });
}



module.exports = {getEvents, createEvent, updateEvent, deleteEvent}
