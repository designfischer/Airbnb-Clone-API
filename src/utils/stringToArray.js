module.exports = {
    stringToArray(string) {
        const splitString = string.split(',')
        const removeSpaces = splitString.map(item => item.trim())
        const finalArray = removeSpaces

        return finalArray
    }
}