var twoSum=(nums, target)=>{
    var map ={}
    
    for (var i=0; i<nums.length; i++){
          var value = nums[i];
          console.log("value", value)
       var complementPair = target-value;
        if(map[complementPair] !==undefined){
            return [map[complementPair], i];
        }else{
            map[value]=i;
            console.log(" map[value]", map[value])
            
        }
    }
   
}


console.log(twoSum([3,2,4,7,5,9], 12));

  