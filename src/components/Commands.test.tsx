import React from "react";
import { shallow } from "enzyme";
import { Commands } from "./Commands";
import { challengerWinCounter } from "../store/action/index";
import { challengerLooseCounter } from "../store/action/index";

function shallowSetup() {
  const props: any = {
    challengerName: "test",
    challengerWinCounter: challengerWinCounter,
    challengerLooseCounter: challengerLooseCounter,
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

  it("should render a unique section", () => {
    expect(wrapper.find("section").length).toEqual(1);
  });

  describe("rock paper scissors cases", () => {
    let compareAction: any;

    beforeEach(() => {
      compareAction = wrapper.instance().compareAction;
    });

    it("should return loose if challenger = rock and computer = paper", () => {
      compareAction("rock", "paper"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("loose");
    });

    it("should return win if challenger = rock and computer = scissors", () => {
      compareAction("rock", "scissors"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("win");
    });

    it("should return tie if challenger = rock and computer = rock", () => {
      compareAction("rock", "rock"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("tie");
    });

    it("should return loose if challenger = paper and computer = scissors", () => {
      compareAction("paper", "scissors"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("loose");
    });

    it("should return win if challenger = paper and computer = rock", () => {
      compareAction("paper", "rock"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("win");
    });

    it("should return tie if challenger = paper and computer = paper", () => {
      compareAction("paper", "paper"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("tie");
    });

    it("should return loose if challenger = scissors and computer = rock", () => {
      compareAction("scissors", "rock"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("loose");
    });

    it("should return win if challenger = scissors and computer = paper", () => {
      compareAction("scissors", "paper"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("win");
    });

    it("should return tie if challenger = scissors and computer = scissors", () => {
      compareAction("scissors", "scissors"); //compareAction(challenger, computer)
      expect(wrapper.state().result).toBe("tie");
    });
  });

  /*describe("state counter", () => {
    let handleResult: any;

    beforeEach(() => {
      handleResult = wrapper.instance().handleResult;

      it("should return +1 if challenger win", () => {
        handleResult("win"); //compareAction(challenger, computer)

        expect(wrapper.state().challengerWinCounter).toBe("tie");
      });
    });
  });
  */
});
