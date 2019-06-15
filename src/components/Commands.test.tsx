import React from "react";
import { shallow } from "enzyme";
import { Commands } from "./Commands";
import sinon from "sinon";

function shallowSetup() {
  const props: any = {
    challengerName: "test",
  };
  const enzymeWrapper = shallow(<Commands {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe("Shallow rendered Commands", () => {
  let wrapper: any, props_: any;
  beforeEach(() => {
    const { enzymeWrapper, props } = shallowSetup();
    wrapper = enzymeWrapper;
    props_ = props;
  });

  it("should render a section", () => {
    expect(wrapper.find("section").length).toEqual(1);
  });

  /*it("should return win if send paper and receive paper", () => {
    expect(wrapper.find("section").length).toEqual(1);
  });
  */
});
