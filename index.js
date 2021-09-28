const express = require('express')
const routerppcos = new express.Router()
const memoPenjualanController = require('../../../../src/controller/Logistic/ppcos/memoPenjualanController')

//Memo Penjualan
routerppcos.get('/memoPenjualan/Search_001/id',memoPenjualanController.memoPenjualanControllerSearch_001)
routerppcos.get('/memoPenjualan/Search_002/id',memoPenjualanController.memoPenjualanControllerSearch_002)
routerppcos.get('/memoPenjualan/Search_MP/id',memoPenjualanController.memoPenjualanControllerSearch_MP)
module.exports = routerppcos


 //Memo Pembelian
routerppcos.get('/memoPenjualan/Search_001/id',memoPenjualanController.memoPenjualanControllerSearch_001)
routerppcos.get('/memoPenjualan/Search_002/id',memoPenjualanController.memoPenjualanControllerSearch_002)
routerppcos.get('/memoPenjualan/Search_MP/id',memoPenjualanController.memoPenjualanControllerSearch_MP)
module.exports = routerppcos
