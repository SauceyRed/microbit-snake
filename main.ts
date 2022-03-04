// function spawnItem() {
// if (itemPos) {
// destroyItem(itemPos[0], itemPos[1]);
// }
// const itemPosX: number = Math.floor(Math.random() * 5);
// const itemPosY: number = Math.floor(Math.random() * 5);
// led.plot(itemPosX, itemPosY);
// itemPos = [itemPosX, itemPosY];
// console.log(`Plotted item at position (${itemPos[0]}, ${itemPos[1]})`);
// }

function destroyItem () {
    led.unplot(itemPos[0], itemPos[1])
    console.log(`Unplotted item at position (${itemPos[0]}, ${itemPos[1]})`);
}

let itemPos: number[];
let player = {
    posX: 2,
    posY: 2,
    length: 1,
    direction: 'up',
};
basic.forever(function () {
    while (true) {
        led.plot(player.posX, player.posY)
        console.log(`Plotted player in position (${player.posX.toString()}, ${player.posY.toString()})`);
        const origPosX: number = player.posX;
        const origPosY: number = player.posY;
        if (player.direction == "up") {
            if (player.posY == 0) {
                player.posY = 4;
            }
            else {
                player.posY -= 1;
            }
        } else if (player.direction == "left") {
            if (player.posX == 0) {
                player.posX = 4;
            }
            else {
                player.posX -= 1;
            }
        } else if (player.direction == "down") {
            if (player.posY == 4) {
                player.posY = 0;
            }
            else {
                player.posY += 1;
            }
        } else if (player.direction == "right") {
            if (player.posX == 4) {
                player.posX = 0;
            }
            else {
                player.posX += 1;
            }
        }
        input.onButtonPressed(Button.A, function () {
            const origDir = player.direction;
            if (player.direction == 'up') {
                player.direction = 'left';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
            else if (player.direction == 'left') {
                player.direction = 'down';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
            else if (player.direction == 'down') {
                player.direction = 'right';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
            else if (player.direction == 'right') {
                player.direction = 'up';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
        })
        input.onButtonPressed(Button.B, function () {
            const origDir = player.direction;
            if (player.direction == 'up') {
                player.direction = 'right';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
            else if (player.direction == 'left') {
                player.direction = 'up';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
            else if (player.direction == 'down') {
                player.direction = 'left';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
            else if (player.direction == 'right') {
                player.direction = 'down';
                console.log(`Player direction changed from ${origDir} to ${player.direction}`);
            }
        })
        pause(1000);
        led.unplot(origPosX, origPosY);
        console.log(`Unplotted player at position (${player.posX}, ${player.posY})`);
    }
})
