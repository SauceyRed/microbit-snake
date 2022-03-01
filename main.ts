let itemPositions: string[] = []
basic.forever(function () {
    function replaceAt(str: string, index: number, replacement: string) {
        return str.substr(0, index) + replacement + str.substr(index + replacement.length);
    }
    const itemPos1 = Math.floor(Math.random() * 4);
    const itemPos2 = Math.floor(Math.random() * 4);
    const ledsPos = {
        0: 0,
        1: 2,
        2: 4,
        3: 6,
        4: 8,
        5: 10,
    }
    const ledsOn = `
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `
    replaceAt(ledsOn, ledsPos.itemPos1);
})
