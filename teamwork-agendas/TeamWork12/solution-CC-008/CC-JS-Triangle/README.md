<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# JS-CC-008 : Check Triangle

- Determine if a triangle is **equilateral**, **isosceles**, or **scalene** by using `class` structures.

- An equilateral triangle has all three sides the same length.

- An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

- A scalene triangle has all sides of different lengths.

- Note: For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater than or equal to the length of the third side. See Triangle Inequality.

- Dig Deeper: The case where the sum of the lengths of two sides equals that of the third is known as a degenerate triangle - it has zero area and looks like a single line.

⚠️ Please write your own code block to improve your algorithm skills for technical interview.

## Learning Outcomes

At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.

- Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

## Problem Statement

- Write a class and methods that take three number and return:

1. equilateral
1. isosceles
1. scalene
1. Invalid Triangle.

#### JavaScript Solution

```javascript
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  isTriangle() {
    return (
      this.side1 > 0 &&
      this.side2 > 0 &&
      this.side3 > 0 &&
      this.side3 + this.side2 >= this.side1 &&
      this.side1 + this.side3 >= this.side2 &&
      this.side1 + this.side2 >= this.side3
    );
  }
  kind() {
    // Verify it's a valid triangle
    if (this.isTriangle()) {
      // All three sides must be equal
      if (this.side1 === this.side2 &&
          this.side1 === this.side3) {
        return "equilateral";
      }
      // At least two sides must be equal
      if (
        this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3
      ) {
        return "isosceles";
      }
      // If no sides are equal
      return "scalene";
    } else {
      return "Invalid Triangle";
    }
  }
}

result = new Triangle(3, 4, 6);
checkValid = result.isTriangle();
checkKind = result.kind();

console.log("Is it triangle? : " + checkValid);
checkValid && console.log("What kind of triangle? : " + checkKind);
```

#### Python Solution

```python
class TriangleError(Exception):
    pass


class Triangle(object):
    def __init__(self, side1, side2, side3):
        if side1 <= 0 or side2 <= 0 or side3 <= 0:
            raise TriangleError('illegal side')

        max_side = max(side1, side2, side3)
        total_sum = sum([side1, side2, side3])
        sum_of_min_size = total_sum - max_side

        if max_side >= sum_of_min_size:
            raise TriangleError('Triangles Violating Triangle Inequality')

        self.side1 = side1
        self.side2 = side2
        self.side3 = side3

    def kind(self):
        if self.side1 == self.side2 
             and self.side2 == self.side3:
            return 'equilateral'
        elif self.side1 == self.side2 
             or self.side1 == self.side3 
             or self.side2 == self.side3:
            return 'isosceles'
        else:
            return 'scalene'


print(Triangle(3, 4, 5).kind())

```

<center> ⌛ Happy Coding  ✍ </center>
