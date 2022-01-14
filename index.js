// code your solution here

function superbowlWin(array) {
    let foundItem = array.find(element => element.result === "W")
    if (!!foundItem === true) {
    return foundItem.year
    } else {}
}