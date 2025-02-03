import { HashRouter, Route, Routes, Link } from "react-router-dom";

import { Home } from "./Pages/Home";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
