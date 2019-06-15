import React from "react";
import { shallow } from "enzyme";
import Game from "./Game";

function shallowSetup() {
  const props: any = {};
  const enzymeWrapper = shallow(<Game {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe("Shallow rendered Game", () => {
  let wrapper: any, props_: any;
  beforeEach(() => {
    const { enzymeWrapper, props } = shallowSetup();
    wrapper = enzymeWrapper;
    props_ = props;
  });

  it("should render a main", () => {
    expect(wrapper.find("main").length).toEqual(1);
  });
});
