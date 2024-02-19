import { reverseString } from "../../utils/reverseString.js";

describe("tests for reverseString function", () => {
  it("should reverse string", () => expect(reverseString("12345")).toBe("54321"));
});