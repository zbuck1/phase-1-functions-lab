// Code your solution in this file!
function distanceFromHqInBlocks(bStart) {
    if (bStart > 42)
        return bStart - 42
    else (bStart < 42)
        return 42 - bStart
}

function distanceFromHqInFeet(fStart) {
    if (fStart > 42)
        return (fStart - 42) * 264;
    else (fStart < 42)
        return (42 - fStart) * 264
}

function distanceTravelledInFeet(start, destination) {
    let distance = Math.abs(start - destination) * 264;
    return distance;
}

function calculatesFarePrice(start, destination) {
    distanceFromHqInFeet(start, destination);

    let distance = Math.abs(start - destination) * 264;

    if(distance <= 400) {
        return 0; 
    }
    else if(distance > 400 && distance <= 2000) {
        distance = distance - 400;
        return distance * 0.02;
    }
    else if(distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}