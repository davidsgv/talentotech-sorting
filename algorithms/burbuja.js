exports.recursive = function sort(nums){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i + 1]){
            let j = nums[i+1];
            nums[i+1] = nums[i];
            nums[i] = j;
            sort(nums);
        }
    }
    return nums;
}

function recursiveOptimizedHelper(nums, index){
    for(let i = index; i < nums.length - 1; i++){
        if(nums[i] > nums[i + 1]){
            let j = nums[i+1];
            nums[i+1] = nums[i];
            nums[i] = j;
            recursiveOptimizedHelper(nums, i);
        }
    }
    return nums;
}

exports.recursiveOptimized = function sort(nums){
    return recursiveOptimizedHelper(nums, 0)
}

exports.iterative = (nums) =>{
    for(let i = 1; i < nums.length - 1; i++){
        for(j = 0; j < nums.length - i; j++){
            if(nums[i] > nums[j]){
                let aux = nums[i];
                nums[i] = nums[j];
                nums[j] = aux;
            }
        }
    }
    return nums;
}