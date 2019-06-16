import React, { Component } from "react";
import { connect } from "react-redux";
import { challengerName as challengerNameAction } from "../store/action/index";

export interface Props {
  challengerNameAction: any;
}

interface State {
  challengerName: string;
  inputCompleted: boolean;
}

export class InputBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      challengerName: "",
      inputCompleted: false,
    };
    this.challengerNameIsCorrect = this.challengerNameIsCorrect.bind(this);
  }

  challengerNameIsCorrect() {
    const {challengerName} = this.state;
    if (challengerName.length === 0) {
      return null;
    } else if (challengerName.length < 3 || challengerName.length > 10) {
      return false;
    } 
    return true;
  }

  handleInputValue(e: any) {
    const { value } = e.target;
    this.setState({ challengerName: value });
  }

  handleInputSubmit(e: any) {
    let { challengerName } = this.state;
    if (this.challengerNameIsCorrect()) {
      this.props.challengerNameAction(challengerName);
      this.setState({ inputCompleted: true });
    }
  }

  inputAlert() {
    switch (this.challengerNameIsCorrect()) {
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
              className={this.challengerNameIsCorrect() ? "js-active" : "js-inactive"}
              disabled={this.challengerNameIsCorrect() ? false : true}
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
