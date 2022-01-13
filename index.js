// code your solution here

function superbowlWin(array) {
    let foundItem = (array.find(element => element.result === "W"))
    if (foundItem.result === 'W') {
    return foundItem.year
    }
}