import React, { Component } from "react";
import { connect } from "react-redux";
import { challengerName as challengerNameAction } from "../store/action/index";

export interface Props {
  challengerNameAction: any;
}

interface State {
  challengerName: string;
  challengerNameIsCorrect: any;
  inputCompleted: boolean;
}

export class InputBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      challengerName: "",
      challengerNameIsCorrect: null,
      inputCompleted: false,
    };
  }

  handleInputValue(e: any) {
    const { value } = e.target;
    this.setState({ challengerName: value });
    if (value.length === 0) {
      this.setState({ challengerNameIsCorrect: null });
    } else if (value.length < 3) {
      this.setState({ challengerNameIsCorrect: false });
    } else if (value.length > 10) {
      this.setState({ challengerNameIsCorrect: false });
    } else {
      this.setState({ challengerNameIsCorrect: true });
    }
  }

  handleInputSubmit(e: any) {
    let { challengerName, challengerNameIsCorrect } = this.state;
    if (challengerNameIsCorrect) {
      this.props.challengerNameAction(challengerName);
      this.setState({ inputCompleted: true });
    }
  }

  inputAlert() {
    let { challengerNameIsCorrect } = this.state;
    switch (challengerNameIsCorrect) {
      case true:
        return " js-active ";
      case false:
        return " js-inactive ";

      default:
        return;
    }
  }

  render(): React.ReactNode {
    const {
      challengerName,
      challengerNameIsCorrect,
      inputCompleted,
    } = this.state;

    return (
      <div className="input-box">
        <div
          className={[
            inputCompleted ? "js-animation--leave " : "",
            " input__wrapper",
          ].join(' ')}
        >
          <div className="input__field">
            <input
              type="text"
              value={challengerName}
              placeholder="What's your name ?"
              aria-label="What's your name ?"
              onChange={e => {
                return this.handleInputValue(e);
              }}
              onKeyDown={e => {
                if (e.which === 13 /*Enter key*/) {
                  return this.handleInputSubmit(e);
                }
              }}
            />
            <button
              onClick={e => this.handleInputSubmit(e)}
              className={challengerNameIsCorrect ? "js-active" : "js-inactive"}
              disabled={challengerNameIsCorrect ? false : true}
            >
              OK
            </button>
          </div>
          <div className={[this.inputAlert(), " input__alert"].join(' ')}>
            <i>Between 3 and 10 characters</i>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    challengerNameAction: (challengerName: any) =>
      dispatch(challengerNameAction(challengerName)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(InputBox);
