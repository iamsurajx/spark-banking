const reactcontroller = require('../controller/react.controller')
const customercontroller = require('../controller/customer.controller')
const express = require('express')
const routes = express.Router()

routes.route('/').get(reactcontroller.reactPage)

// 
routes.route('/customer')
    .post(customercontroller.AddCustomer)
    .get(customercontroller.viewCustomer)

//update
routes.route('/customer/:id')
    .get(customercontroller.SingleViewCustomber)
    .post(customercontroller.transferAmount)
routes.route('/transaction')
    .get(customercontroller.viewCustomerTransaction)

routes.route('/*').get(reactcontroller.reactPage)


module.exports = routes

