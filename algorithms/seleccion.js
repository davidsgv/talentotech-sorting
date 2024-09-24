exports.iterative = (nums) =>{
    for(let i = 0; i < nums.length - 1; i++){
        let minorIndex = i;

        for(j = i+1; j < nums.length; j++){
            if(nums[j]<nums[i]){
                minorIndex = j;
            }
        }

        let aux = nums[i]
        nums[i] = nums[minorIndex]
        nums[minorIndex] = aux;
    }
    return nums;
}