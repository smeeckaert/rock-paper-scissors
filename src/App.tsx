import React from "react";
import "./styles/app.scss";

import Game from "./components/Game";

const App: React.FC = () => {
  return (
    <div className="App">
      <Game />
    </div>
  );
};

export default App;
