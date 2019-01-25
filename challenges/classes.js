// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker{
    constructor(parameter) {
        this.length = parameter.length;
        this.width = parameter.width;
        this.heigth = parameter.heigth;
    }
    volume() {
        return this.length * this.width *this.heigth;
    }
    surfaceArea() {
        return 2*(this.length * this.width +this.length * this.heigth + this.width * this.heigth);
    }
  }

 

  const cuboid = new cuboidMaker({
    length: 4,
    width: 5,
    heigth: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(input) {
        super(input);
    }
    surfaceAreaCube() {
            return (6 *(this.width * this.width));
    }

    
}

const cube = new cubeMaker({
    length: 5,
    width: 5,
    heigth: 5,
});

console.log(cube.volume()); //125
console.log(cube.surfaceAreaCube()); //150