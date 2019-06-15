import React from "react";
import { shallow } from "enzyme";
import { Player } from "./Player";

function shallowSetup() {
  const props: any = {
    challengerName: "test",
  };
  const enzymeWrapper = shallow(<Player {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe("Player", () => {
  let wrapper: any, props_: any;
  beforeEach(() => {
    const { enzymeWrapper, props } = shallowSetup();
    wrapper = enzymeWrapper;
    props_ = props;
  });

  it("should render a footer", () => {
    expect(wrapper.find("footer").length).toEqual(1);
  });
});
