import { calculateCircleArea } from "../../utils/calculateArea.js";

describe("tests for calculateCircleArea function", () => {
  it("should calculate the area of the circle", () => expect(calculateCircleArea(3)).toBe(28.274333882308138));
});