import React, { Component } from "react";
import { connect } from "react-redux";
import { challengerWinCounter } from "../store/action/index";
import { challengerLooseCounter } from "../store/action/index";

export interface Props {
  challengerName: string;
  challengerWinCounter: any;
  challengerLooseCounter: any;
}

interface State {
  result: string;
  computerChoice: string;
  challengerChoice: string;
}

export class Commands extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      result: "",
      challengerChoice: "",
      computerChoice: "",
    };
  }

  compareAction: any = (challenger: string, computer: string) => {
    let result: string;
    if (challenger === computer) {
      result = "tie";
    } else if (challenger === "rock") {
      if (computer === "paper") {
        result = "loose";
      } else {
        result = "win";
      }
    } else if (challenger === "paper") {
      if (computer === "scissors") {
        result = "loose";
      } else {
        result = "win";
      }
    } else {
      if (computer === "rock") {
        result = "loose";
      } else {
        result = "win";
      }
    }
    this.handleResult(result);
  };

  displayChallengerCommands() {
    const { challengerName } = this.props;
    if (challengerName.length !== 0) {
      const actions = ["rock", "paper", "scissors"];

      const actionList = actions.map(action => {
        return (
          <div
            className={[
              this.hideAnimationAction(action),
              ` ${action}__wrapper`,
            ].join(' ')}
            onClick={() => this.handleAction(action)}
            key={action.toString()}
          >
            <span role="img" aria-label={`${action} hand`}>
              {this.emojiConverter(action)}
            </span>
          </div>
        );
      });

      return actionList;
    }
  }

  displayComputerCommand() {
    const { challengerName } = this.props;
    const { computerChoice } = this.state;
    if (computerChoice.length !== 0 || !challengerName) {
      return (
        <div className={` ${computerChoice}__wrapper`}>
          <span role="img" aria-label={`${computerChoice} hand`}>
            {this.emojiConverter(computerChoice)}
          </span>
        </div>
      );
    }
  }

  displayResult() {
    const { result } = this.state;
    if (result.length !== 0) {
      switch (result) {
        case "win":
          return (
            <div className="result__wrapper">
              <div className="result__caption">
                You {result} !{" "}
                <span role="img" aria-label="happy face">
                  😊
                </span>
              </div>
            </div>
          );
        case "loose":
          return (
            <div className="result__wrapper">
              <div className="result__caption">
                You {result} ...
                <span role="img" aria-label="mad face">
                  😤
                </span>
              </div>
            </div>
          );
        case "tie":
          return (
            <div className="result__wrapper">
              <div className="result__caption">
                You tied it, try again
                <span role="img" aria-label="embarrassed face">
                  😅
                </span>
              </div>
            </div>
          );
      }
    }
  }

  displayRetry() {
    const { result } = this.state;
    if (result.length !== 0) {
      return (
        <div className="retry__wrapper">
          <button onClick={() => this.handleReset()}>
            Click here to try again
          </button>
        </div>
      );
    }
  }

  emojiConverter(stringInput: string) {
    switch (stringInput) {
      case "rock":
        return "✊";
      case "paper":
        return "✋";
      case "scissors":
        return "✌️";
      default:
        break;
    }
  }

  handleAction(type: string) {
    const { result } = this.state;
    if (result.length === 0) {
      let challengerAction = type;
      let computerAction: any = Math.random().toFixed(2);

      if (computerAction < 0.34) {
        computerAction = "rock";
      } else if (computerAction <= 0.67) {
        computerAction = "paper";
      } else {
        computerAction = "scissors";
      }
      this.setState({
        challengerChoice: challengerAction,
        computerChoice: computerAction,
      });
      this.compareAction(challengerAction, computerAction);
    }
  }

  handleReset() {
    this.setState({ result: "", challengerChoice: "", computerChoice: "" });
  }

  handleResult(result: string) {
    const { challengerWinCounter, challengerLooseCounter } = this.props;
    this.setState({ result });
    if (result === "win") {
      challengerWinCounter();
    } else if (result === "loose") {
      challengerLooseCounter();
    }
  }

  hideAnimationAction(div: string) {
    const { challengerChoice } = this.state;
    if (challengerChoice.length < 1) {
      return "  ";
    } else if (div !== challengerChoice) {
      return " js-hide__animation ";
    } else {
      return " js-choice ";
    }
  }

  render() {
    return (
      <section className="command">
        <div className="computer__command">{this.displayComputerCommand()}</div>
        {this.displayResult()}
        <div className="challenger__command">
          {this.displayChallengerCommands()}
        </div>
        {this.displayRetry()}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    challengerLooseCounter: () => dispatch(challengerLooseCounter()),
    challengerWinCounter: () => dispatch(challengerWinCounter()),
  };
};

const mapStateToProps = (state: any) => {
  return {
    challengerName: state.challengerName.name,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Commands);
