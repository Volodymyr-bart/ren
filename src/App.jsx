// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import Person from "./pages/Person/Person";

// const HomePage = lazy(() => import("../pages/Home/Home"));
// const PersonPage = lazy(() => import("../pages/Person/Person"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Person />} />
      </Route>
    </Routes>
  );
}

export default App;
