// 1.2.3
var car1 = new Object();
car1.color = "blue";
car1.maxSpeed = 180;
car1.driver = new Object();
car1.driver.name = "Іван Іванов";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;

// 1.2.4
var car2 = {
    color: "red",
    maxSpeed: 220,
    driver: {
      name: "Іван Іванов",
      category: "B", 
      personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2 
};

// 1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};
  
car1.drive();

// 1.2.6
car2.drive = function() {
    console.log("I can drive anytime");
};
  
car2.drive();

// 1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}
  
// 1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
      name: name,
      nightDriving: nightDriving,
      experience: experience
    };
};

// 1.2.9
Truck.prototype.trip = function() {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      console.log(`Driver ${this.driver.name}`);
      if (this.driver.nightDriving) {
        console.log("drives at night");
      } else {
        console.log("does not drive at night");
      }
      console.log(`and has ${this.driver.experience} years of experience`);
    }
};

// 1.2.10
var truck1 = new Truck("blue", 8000, 85.4, "Mercedes", "Actros");
var truck2 = new Truck("red", 10000, 80.1, "Scania", "R500");

truck1.AssignDriver("Іван Іванов", true, 5);

truck2.AssignDriver("Олександр Олександров", false, 3);

truck1.trip();

truck2.trip();

// 1.2.12
class Square {

// 1.2.13
    constructor(a) {
      this.a = a;
    }

// 1.2.14
    static help() {
        console.log("Квадрат — це геометрична фігура, у якої всі чотири сторони рівні, " +
        "і всі кути прямі (90 градусів). Довжина сторони квадрата позначається як 'a'.");
    }    

// 1.2.15
    length() {
        const perimeter = this.a * 4;
        console.log(`Сума довжин сторін квадрата: ${perimeter}`);
    }

    square() {
        const area = this.a * this.a;
        console.log(`Площа квадрата: ${area}`);
    }

    info() {
        const perimeter = this.a * 4;
        const area = this.a * this.a;
        console.log(`Характеристика квадрата:`);
        console.log(`- Довжина кожної сторони: ${this.a}`);
        console.log(`- Величина кожного кута: 90 градусів`);
        console.log(`- Сума довжин всіх сторін: ${perimeter}`);
        console.log(`- Площа: ${area}`);
    }
}

// 1.2.16
class Rectangle extends Square {
    constructor(a, b) {
      super(a);
      this.b = b;
    }
  
    length() {
      const perimeter = 2 * (this.a + this.b);
      console.log(`Сума довжин сторін прямокутника: ${perimeter}`);
    }
  
    square() {
      const area = this.a * this.b;
      console.log(`Площа прямокутника: ${area}`);
    }
  
    info() {
      const perimeter = 2 * (this.a + this.b);
      const area = this.a * this.b;
      console.log(`Характеристика прямокутника:`);
      console.log(`- Довжина: ${this.a}`);
      console.log(`- Ширина: ${this.b}`);
      console.log(`- Величина кожного кута: 90 градусів`);
      console.log(`- Сума довжин всіх сторін: ${perimeter}`);
      console.log(`- Площа: ${area}`);
    }
}

// 1.2.18
class Rhombus extends Square {
    constructor(a, alpha, beta) {
      super(a);
      this.alpha = alpha;
      this.beta = beta;
    }
  
    static help() {
      console.log("Ромб — це чотирикутник, у якого всі сторони рівні, а протилежні кути рівні.");
    }

    length() {
      const perimeter = 4 * this.a;
      console.log(`Сума довжин сторін ромба: ${perimeter}`);
    }
  
    square() {
      const area = this.a * this.a * Math.sin((this.alpha * Math.PI) / 180);
      console.log(`Площа ромба: ${area.toFixed(2)}`);
    }
  
    info() {
      const perimeter = 4 * this.a;
      const area = this.a * this.a * Math.sin((this.alpha * Math.PI) / 180);
      console.log(`Характеристика ромба:`);
      console.log(`- Довжина кожної сторони: ${this.a}`);
      console.log(`- Тупий кут: ${this.alpha}°`);
      console.log(`- Гострий кут: ${this.beta}°`);
      console.log(`- Сума довжин сторін: ${perimeter}`);
      console.log(`- Площа: ${area.toFixed(2)}`);
    }
}

// 1.2.20
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
      super(a, b);
      this.alpha = alpha;
      this.beta = beta;
    }
  
    static help() {
      console.log("Паралелограм — це чотирикутник, у якого протилежні сторони рівні та паралельні, а протилежні кути рівні.");
    }
  
    length() {
      const perimeter = 2 * (this.a + this.b);
      console.log(`Сума довжин сторін паралелограма: ${perimeter}`);
    }
  
    square() {
      const area = this.a * this.b * Math.sin((this.alpha * Math.PI) / 180);
      console.log(`Площа паралелограма: ${area.toFixed(2)}`);
    }
  
    info() {
      const perimeter = 2 * (this.a + this.b);
      const area = this.a * this.b * Math.sin((this.alpha * Math.PI) / 180);
      console.log(`Характеристика паралелограма:`);
      console.log(`- Довжина: ${this.a}`);
      console.log(`- Ширина: ${this.b}`);
      console.log(`- Тупий кут: ${this.alpha}°`);
      console.log(`- Гострий кут: ${this.beta}°`);
      console.log(`- Сума довжин сторін: ${perimeter}`);
      console.log(`- Площа: ${area.toFixed(2)}`);
    }
}

// 1.2.22
// class Rhombus extends Square {
//     constructor(a, alpha, beta) {
//       super(a);
//       this._alpha = alpha;
//       this._beta = beta;
//     }
  
//     get a() {
//       return this._a;
//     }
  
//     get alpha() {
//       return this._alpha;
//     }
  
//     get beta() {
//       return this._beta;
//     }
  
//     set a(value) {
//       if (value > 0) this._a = value;
//       else console.error("Довжина сторони має бути більше 0!");
//     }
  
//     set alpha(value) {
//       if (value > 0 && value < 180) this._alpha = value;
//       else console.error("Кут має бути в межах (0, 180)!");
//     }
  
//     set beta(value) {
//       if (value > 0 && value < 180) this._beta = value;
//       else console.error("Кут має бути в межах (0, 180)!");
//     }
// }

// 1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24
const square = new Square(4);
square.info();

const rectangle = new Rectangle(6, 9);
rectangle.info();

const rhombus = new Rhombus(5, 120, 60);
rhombus.info();

const parallelogram = new Parallelogram(7, 10, 110, 70);
parallelogram.info();

// 1.2.25
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}
  
const { a, b, c } = Triangular(6, 8, 10);
console.log(`Трикутник зі сторонами: a=${a}, b=${b}, c=${c}`);

// 1.2.26
const triangle1 = Triangular(5, 12, 13);
const triangle2 = Triangular(7, 24, 25);
const triangle3 = Triangular();

console.log("Трикутник 1:", triangle1);
console.log("Трикутник 2:", triangle2);
console.log("Трикутник 3 (за замовчуванням):", triangle3);

// 1.2.27
function PiMultiplier(factor) {
    return function () {
      return Math.PI * factor;
    };
}

// 1.2.28 
const multiplyBy2 = PiMultiplier(2);
const multiplyByTwoThirds = PiMultiplier(2 / 3);
const divideBy2 = PiMultiplier(1 / 2);

console.log("π × 2 =", multiplyBy2());
console.log("π × 2/3 =", multiplyByTwoThirds());
console.log("π ÷ 2 =", divideBy2());

// 1.2.29
function Painter(color) {
    return function (obj) {
      if ("type" in obj) {
        console.log(`Color: ${color}, Type: ${obj.type}`);
      } else {
        console.log("No ‘type’ property occurred!");
      }
    };
}

// 1.2.30
const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

// 1.2.31
const obj1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const obj2 = { type: "Truck", avgSpeed: 90, loadCapacity: 2400 };
const obj3 = { maxSpeed: 180, color: "purple", isCar: true };

console.log("Testing PaintBlue:");
PaintBlue(obj1);
PaintBlue(obj2);
PaintBlue(obj3);

console.log("\nTesting PaintRed:");
PaintRed(obj1);
PaintRed(obj2);
PaintRed(obj3);

console.log("\nTesting PaintYellow:");
PaintYellow(obj1);
PaintYellow(obj2);
PaintYellow(obj3);