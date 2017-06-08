# Javascript | Mars Rover

## Introduction

We are sending rover to Mars and we need to program its movements so we can send it commands from Earth.

## Exercise

The rover will have initial starting point (x, y) coordinates (ie 0,0)
The rover will have an initial direction (N, E, S, W) to where it is facing
The rover is on a 10 x 10 grid
Implement commands that go forward and backward (f, b)
Implement commands to turn the rover left or right (l, r). The rover just changes the direction it is facing when the user sets this command. It will not move right or left automatically. To make it change its position, the user needs to specify the direction change and then the actual movement.

### Requirements

1) Create an object to represent the rover that has position and direction attributes 2) Create a grid using arrays (hint: do a google search for two-dimensional arrays). 3) Write functions for the various commands 4) Try to call some of those functions and display the new position of the rover.

### Starter Code
```javascript
var Rover = {
  position: [0,0],
  direction: 'N'
}

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
  }
}
goForward(myRover);
```
