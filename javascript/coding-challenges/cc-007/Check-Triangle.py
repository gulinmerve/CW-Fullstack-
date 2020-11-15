class TriangleError(Exception):
    pass


class Triangle(object):
    def __init__(self, side1, side2, side3):
        if side1 <= 0 or side2 <= 0 or side3 <= 0:
            raise TriangleError("illegal side")

        max_side = max(side1, side2, side3)
        total_sum = sum([side1, side2, side3])
        sum_of_min_size = total_sum - max_side

        if max_side >= sum_of_min_size:
            raise TriangleError("Triangles Violating Triangle Inequality")

        self.side1 = side1
        self.side2 = side2
        self.side3 = side3

    def kind(self):
        if self.side1 == self.side2 and self.side2 == self.side3:
            return "equilateral"
        elif (
            self.side1 == self.side2
            or self.side1 == self.side3
            or self.side2 == self.side3
        ):
            return "isosceles"
        else:
            return "scalene"


print(Triangle(3, 4, 5).kind())
