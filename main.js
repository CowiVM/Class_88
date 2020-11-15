var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_height = 30;
block_image_width = 30;

player_image = ""
block_object_image = ""

function player_update() {
    fabric.Image.fromURL("player.png", function (Img){
        player_image = Img;
        player_image.scaleToWidth(150),
        player_image.scaleToHeight(140),
        player_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_image)
    });
}

function block_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img){
        block_object_image = Img;
        block_object_image.scaleToWidth(block_image_width),
        block_object_image.scaleToHeight(block_image_height),
        block_object_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object_image)
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPress = e.keyCode;
    
    console.log("When any key is pressed = " + keyPress);
    
    if(e.shiftKey == true && keyPress == "80") {
        console.log("When shift and p is pressed Increase size")
        block_image_height = block_image_height + 10;
        block_image_width  = block_image_width + 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }
    
    if(e.shiftKey == true && keyPress == "77") {
        console.log("When shift and m is pressed Decrease size")
        block_image_height = block_image_height - 10;
        block_image_width  = block_image_width - 10;
        document.getElementById("current-width").innerHTML = block_image_width;
        document.getElementById("current-height").innerHTML = block_image_height;
    }

    if(keyPress == "38") {
        up();
        console.log("The arrow key that is pressed is the up key")
    }

    if(keyPress == "40") {
        down();
        console.log("The arrow key that is pressed is the down key")
    }

    if(keyPress == "37") {
        left();
        console.log("The arrow key that is pressed is the left key")
    }

    if(keyPress == "39") {
        right();
        console.log("The arrow key that is pressed is the right key")
    }

    if(keyPress == "87") {
        block_update("wall.jpg");
        console.log("The keyboard key that is pressed is the 'w' key")
    }

    if(keyPress == "71") {
        block_update("ground.png");
        console.log("The keyboard key that is pressed is the 'g' key")
    }

    if(keyPress == "76") {
        block_update("light_green.png");
        console.log("The keyboard key that is pressed is the 'l' key")
    }
    
    if(keyPress == "84") {
        block_update("trunk.jpg");
        console.log("The keyboard key that is pressed is the 't' key")
    }
    
    if(keyPress == "82") {
        block_update("roof.jpg");
        console.log("The keyboard key that is pressed is the 'r' key")
    }
    
    if(keyPress == "89") {
        block_update("yellow_wall.png");
        console.log("The keyboard key that is pressed is the 'y' key")
    }
    
    if(keyPress == "68") {
        block_update("dark_green.png");
        console.log("The keyboard key that is pressed is the 'd' key")
    }

    if(keyPress == "85") {
        block_update("unique.png");
        console.log("The keyboard key that is pressed is the 'u' key")
    }
    
    if(keyPress == "67") {
        block_update("cloud.jpg");
        console.log("The keyboard key that is pressed is the 'c' key")
    }
}

function up() {
    if(player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("The current co-ordinates of the Player are = X = " + player_x + " | Y = " + player_y)
        console.log("block_image_height =" + block_image_height)
        canvas.remove(player_image)
        player_update()
    }
}

function down() {
    if(player_y <= 660) {
        player_y = player_y + block_image_height;
        console.log("The current co-ordinates of the Player are = X = " + player_x + " | Y = " + player_y)
        console.log("block_image_height =" + block_image_height)
        canvas.remove(player_image)
        player_update()
    }
}

function left() {
    if(player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("The current co-ordinates of the Player are = X = " + player_x + " | Y = " + player_y)
        console.log("block_image_width =" + block_image_width)
        canvas.remove(player_image)
        player_update()
    }
}

function right() {
    if(player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("The current co-ordinates of the Player are = X = " + player_x + " | Y = " + player_y)
        console.log("block_image_width =" + block_image_width)
        canvas.remove(player_image)
        player_update()
    }
}