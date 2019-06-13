const express=require('express');
//const router=express.Router();

 /****************/ const app = express();


/** */app.get('/functions/:arr?/:avg?/:size?' , (req , res , next)=>{
    var arr= req.params.arr;
    var splitarr=arr.split(",");
    arr=[];
    var i;
    for(i=0; i<splitarr.length; i++)
         arr[arr.length]=parseInt(splitarr[i],10);
    
    var avg=req.params.avg;
    var size=req.params.size;
    var sum=parseInt(avg,10)*parseInt(size,10);
    var result=combinationSum(arr , sum ,parseInt(size,10));
    res.status(200).json({
        arr: result
    })
})

function removeDuplicates(array) {
    var x ,
        len=array.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[array[x]]=0;
    }
    for (x in obj) {
      out[out.length]=x;
    }
    return out;
  }
 var  res=[] ,r =[];
function findNumbers( arr , sum  , i  , size)
{
    
    if (sum < 0)
        return;
    if (sum === 0 && r.length===size)
    {
        //console.log(r);
        res[res.length]=r;
        r=[];
        return;
    }
    while (i < arr.length && sum - arr[i] >= 0)
	{

		r[r.length]=arr[i]; 
		findNumbers(arr, sum - arr[i], i , size);
		i++;
		r.pop();
	}

}

function combinationSum(arr , sum , size)
{
    res=[]; r=[];
    arr.sort(function(a, b){return a - b});
   
    var newarr=removeDuplicates(arr);
   
    findNumbers(newarr, sum,  0 , size);
    //console.log(res);
    return res;
}
/************************* */
//app.use();



const portNumber = process.env.PORT || 8000;
app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
//module.exports=router;