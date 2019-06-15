import React from "react";
import { shallow } from "enzyme";
import { InputBox } from "./InputBox";
import sinon from "sinon";

let [challengerNameAction] = new Array(1).fill(jest.fn());

function shallowSetup() {
  const props = {
    challengerNameAction: challengerNameAction,
  };
  const enzymeWrapper = shallow(<InputBox {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe("Shallow rendered InputBox", () => {
  let wrapper: any, props_: any;
  beforeEach(() => {
    const { enzymeWrapper, props } = shallowSetup();
    wrapper = enzymeWrapper;
    props_ = props;
  });

  
  it("should return false if challenger name have less than 3 characters", () => {
    wrapper.setState({ challengerName: "te" }, () => {
      expect(wrapper.state().challengerNameIsCorrect).toBeFalsy();
    });
  });
  /*

  it("should return true if challenger name have more than 3 characteres and less than 10 characters", () => {
    wrapper.setState({ challengerName: "test" }, () => {
      expect(wrapper.state().challengerNameIsCorrect).toBeTruthy();
    });
  });

  it("should return false if challenger name have more than 10 characters", () => {
    wrapper.setState({ challengerName: "testtesttest" }, () => {
      expect(wrapper.state().challengerNameIsCorrect).toBeFalsy();
    });
  });
  */
});
