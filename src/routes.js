const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const BookingController = require('./controllers/BookingController')
const DashboardController = require('./controllers/DashboardController')

const routes = express.Router();
const upload = multer(uploadConfig);

//Rotas de Sessão
routes.post('/sessions', SessionController.store);

//Rotas de Spots
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);

//Rotas de Dashboard
routes.get('/dashboard', DashboardController.show);

module.exports = routes;