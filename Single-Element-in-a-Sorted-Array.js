/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n=nums.length
    let l=0
    let h=n-1

    while(h>=l) {
        let mid=Math.floor((l+h)/2)
        if ((nums[mid]!==nums[mid+1]) && (nums[mid]!==nums[mid-1])) {
            return nums[mid]
        }
        
        if((mid%2===0 & nums[mid]===nums[mid+1]) || (mid%2===1 & nums[mid]===nums[mid-1])){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }return -1
    
};
