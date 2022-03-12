// Create itemPos variable and player object with default values
let itemPos: number[];
let player = {
    posX: 2,
    posY: 2,
    length: 1,
    direction: 'up',
};

// Function to spawn item
function spawnItem() {
    // Checks if item already exists
    if (itemPos) {
        console.log('Item exists');
        // Removes item
        led.unplot(itemPos[0], itemPos[1])
        console.log(`Unplotted item at position (${itemPos[0]}, ${itemPos[1]})`);
    }
    console.log('Item does not exist');
    // Generates random X and Y values
    const itemPosX: number = Math.floor(Math.random() * 5);
    const itemPosY: number = Math.floor(Math.random() * 5);
    // Activates LEDs at coordinates
    led.plot(itemPosX, itemPosY);
    // Records the item's position in the itemPos variable
    itemPos = [itemPosX, itemPosY];
    console.log(`Plotted item at position (${itemPos[0]}, ${itemPos[1]})`);
}

// Function to spawn player
function spawnPlayer() {
    if (player.length == 1) {
        led.plot(player.posX, player.posY);
    } else {
        for (let i = 0; i < player.length; i++) {
            //
        }
    }
}

// Spawns initial item
spawnItem();
console.log('Spawned first item');
// Runs game loop
basic.forever(function () {
    // Checks if player position is the same as item position
    if (player.posX == itemPos[0] && player.posY == itemPos[1]) {
        console.log('Player on item position');
        // Adds point/length to player object
        player.length += 1;
        console.log('Player got 1 point');
        console.log(`Current points: ${player.length}`)
        // Spawns new item
        spawnItem();
    }
    // Activates LED at player coordinates
    led.plot(player.posX, player.posY)
    console.log(`Plotted player in position (${player.posX.toString()}, ${player.posY.toString()})`);
    // Records original positions for player
    const origPosX: number = player.posX;
    const origPosY: number = player.posY;
    // If/else statements to keep track of direction and next player position
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
    // Runs when the A button is pressed, which changes the direction 90° to the left
    input.onButtonPressed(Button.A, function () {
        // Records the player's original direction
        const origDir = player.direction;
        // If/else statements to change player direction
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
    // Runs when the B button is pressed, which changes the direction 90° to the right
    input.onButtonPressed(Button.B, function () {
        // Records the player's original direction
        const origDir = player.direction;
        // If/else statements to change player direction
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
    // Waits 1 second before continuing, crucial for being able to actually play
    pause(1000);
    // Deactivates LED at the player's original position
    led.unplot(origPosX, origPosY);
    console.log(`Unplotted player at position (${player.posX}, ${player.posY})`);
})
