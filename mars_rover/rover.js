var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
  };
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goRight(rover) {
  switch (rover.direction) {
    case 'N':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'N';
			break;
  };
console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);
goBackward(myRover);
goBackward(myRover);

// JQUERY
$(document).ready(function() {
$("#forward").click(function() {
  $("#input-box:text").val("f");
});
})
