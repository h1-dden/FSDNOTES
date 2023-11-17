const express=require('express')
const router =express.Router()
const {getPeople,newperson,delperson}=require('./controller')

//remove all fn base to people2
router.post('/',getPeople)
router.put('/',newperson)
router.delete('/:id',delperson)


//all this makes our routes folder cleaner
//then we just simply call the controller to main routes
//for routes with same path but different requests we can further chain them

//router.route('/').get(getPeople).put(newperson)
//router.route('/:id').delete(delperson)

module.exports=router