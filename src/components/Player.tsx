import React, { Component } from "react";
import { connect } from "react-redux";

export interface Props {
  challengerName: any;
  challengerWinCount: any;
  challengerLooseCount: any;
}

export class Player extends Component<Props> {
  render() {
    let {
      challengerName,
      challengerWinCount,
      challengerLooseCount,
    } = this.props;

    return (
      <footer
        className={[
          challengerName.length > 0 ? "js-animation--enter " : "",
          " player",
        ].join(' ')}
      >
        <div className="player__wrapper">
          <div className="player__presentation">
            May the force be with you{" "}
            <span className="player__name">{challengerName}</span>
          </div>
          <div className="player__count--win">Wins: {challengerWinCount}</div>
          <div className="player__count--loose">
            Defeats: {challengerLooseCount}
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    challengerName: state.challengerName.name,
    challengerWinCount: state.challengerWinCounter.count,
    challengerLooseCount: state.challengerLooseCounter.count,
  };
};

export default connect(mapStateToProps)(Player);
