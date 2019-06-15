const express=require('express');


 const app = express();


app.get('/functions/:arr?/:avg?/:size?' , (req , res , next)=>{
    var arr= req.params.arr;
    var splitarr=arr.split(",");
    arr=[];
    var i;
    for(i=0; i<splitarr.length; i++)
         arr[arr.length]=parseInt(splitarr[i],10);
    
    var avg=req.params.avg;
    var size=req.params.size;
    var sum=parseInt(avg,10)*parseInt(size,10);
    var result=method.combinationSum(arr , sum ,parseInt(size,10));
    res.status(200).json({
        arr: result
    })
})
var  res=[] ,r =[];
var method ={
 removeDuplicates:function(a) {
  var i , j , k;
  for(i = 0; i < a.length; i++)
    {
        for(j = i+1; j < a.length; )
        {
            if(a[j] == a[i])
            {
                for(k = j; k < a.length; k++)
                {
                    a[k] = a[k+1];
                }
                a.length--;
            }
            else
            {
                j++;
            }
        }
    }
    
    return a;
  },
 
 findNumbers:function( arr , sum  , i  , size)
{
    
    if (sum < 0)
        return;
    if (sum === 0 && r.length===size)
    {
        
        res[res.length]=r;
        r=[];
        return;
    }
    while (i < arr.length && sum - arr[i] >= 0)
	{

		r[r.length]=arr[i]; 
		method.findNumbers(arr, sum - arr[i], i , size);
		i++;
		r.pop();
	}
   return res;
},

combinationSum:function(arr , sum , size)
{
    res=[]; r=[];
    arr.sort(function(a, b){return a - b});
   
    var newarr=method.removeDuplicates(arr);
   
    method.findNumbers(newarr, sum,  0 , size);
    
    return res;
}
};

exports.data=method;

const portNumber = process.env.PORT || 8000;
app.listen(portNumber, () => {
  console.log(`listening on port ${portNumber}`);
});
