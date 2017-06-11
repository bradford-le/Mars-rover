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

// function commandArray() {
//   var splitCommands = $("#input-box").html();
//   console.log(splitCommands);
//
// }
goForward(myRover);
goForward(myRover);
// commandArray();

// JQUERY
$(document).ready(function() {

$("#forward").click(function() {
  $("#input-box").append("F");
  });
$("#backward").click(function() {
  $("#input-box").append("B");
  });
$("#left").click(function() {
  $("#input-box").append("L");
  });
$("#right").click(function() {
  $("#input-box").append("R");
  });
$("#clear-command").click(function() {
  $("#input-box").text("");
  });
$("button").hover(function() {
  $(this).css("background","#605c5b");
}, function() {$(this).css("background","");
  });
// JQUERY FUNCTIONS
var defaultRow = 9;
var defaultColumn = 0;
var currentRow, currentColumn;

function moveUp() {
  $("#rover").animate({bottom: '+=40px'},'fast');
}
function moveDown() {
  $("#rover").animate({top: '+=40px'}, 'fast');
}
function moveLeft() {
  $("#rover").animate({left: '-=40px'},'fast');
}
function moveRight() {
  $("#rover").animate({right: '-=40px'},'fast');
}

$("#go").click(function() {
  var commandString = $("#input-box").html();
  var commandArray = commandString.split("");
  console.log(commandArray);
  console.log(commandArray.length);
  console.log(myRover.direction);
  for (i=0; i<commandArray.length;i++) {
    console.log(commandArray[i]);
    debugger;
    if (commandArray[i]=="B") {
      switch (myRover.direction) {
        case 'N':
          moveDown();
          break;
        case 'E':
          moveLeft();
          break;
        case 'S':
          moveUp();
          break;
        case 'W':
          moveRight();
          break;
      };
    }
    if (commandArray[i]=="F") {
      switch (myRover.direction) {
        case 'N':
          moveUp();
          break;
        case 'E':
          moveRight();
          break;
        case 'S':
          moveDown();
          break;
        case 'W':
          moveLeft();
          break;
      };
    }
  }
  });
});
