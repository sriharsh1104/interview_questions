function removeduplicates(arr) {
    return[...new Set(arr)];
}
console.log('removedupilcates', removeduplicates([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,6]))