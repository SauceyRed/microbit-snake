let itemPositions: string[] = []
basic.forever(function () {
    function replaceAt(str: string, index: number, replacement: string) {
        return str.substr(0, index) + replacement + str.substr(index + replacement.length);
    }
    const itemPosX: number = Math.floor(Math.random() * 4);
    const itemPosY: number = Math.floor(Math.random() * 4);
    //TODO: ledsPos for X and Y instead of current implementation
    const ledsPos: {[key:number]: number} = {
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
    let leds: string = replaceAt(ledsOn, ledsPos[itemPosX], '#');
    leds = replaceAt(leds, ledsPos[itemPosY], '#');
    // leds = images.createImage(leds);
    // basic.showLeds(leds);
})
