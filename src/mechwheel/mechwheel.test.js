import React from "react";
import { Mechwheel } from "..";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Mechwheel />).toJSON();
  expect(tree).toMatchSnapshot();
});
