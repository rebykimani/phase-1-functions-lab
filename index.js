// Code your solution in this file!
const scuberHeadquarters =42;
function distanceFromHqInBlocks(pickup){
 const distanceInBlocks = pickup > scuberHeadquarters ? pickup - scuberHeadquarters : scuberHeadquarters - pickup;
return distanceInBlocks;
}
//convert distance in blocks to feet
function distanceFromHqInFeet(pickup) {
   let distanceInBlocks = distanceFromHqInBlocks(pickup);
    return distanceInBlocks * 264;
}
function distanceTravelledInFeet(startingBlock, endingBlock){
    const distanceTravelled = endingBlock > startingBlock ? (endingBlock - startingBlock)* 264 : (startingBlock -endingBlock)* 264;
    return distanceTravelled;
}
function calculatesFarePrice(startingBlock, endingBlock) {
    const distanceCovered =  distanceTravelledInFeet(startingBlock, endingBlock);
    if (distanceCovered < 400){
        return 0;
    }
    else if(distanceCovered > 400 && distanceCovered < 2000) {
        return (distanceCovered - 400) * 0.02;
    }
    else if(distanceCovered > 2000 && distanceCovered < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
