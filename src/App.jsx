// import { lazy } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../src/pages/Home/Home"));
const PersonPage = lazy(() => import("../src/pages/Person/Person"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<PersonPage />} />
      </Route>
    </Routes>
  );
}

export default App;
