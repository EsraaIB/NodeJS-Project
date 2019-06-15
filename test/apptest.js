const assert= require('chai').assert;
const method=require('../functions.js');


describe('App' ,function(){

it('removeDuplicates from array' , function(){
   
    let result=method.data.removeDuplicates([1,2,2,2,3,4]).length;
    assert.equal(result , 4 );

});

it('removeDuplicates from empty array' , function(){
   
    let result=method.data.removeDuplicates([]).length;
    assert.equal(result , 0);

});

it('find numbers should get all possible' , function(){
 
    let result=method.data.findNumbers([1,2,3,4] , 15 , 0 , 5);
    assert.equal(result.length , 3 );


});

it('combinationalSum sould sort , remove duplicate and find numbers' , function(){
 let result=method.data.combinationSum([3,2,2,2,1,4], 15 ,5);
 assert.equal(result.length , 3 );
});


});