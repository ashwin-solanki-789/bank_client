import { Navigate, Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import PrivateRoute from "./components/Auth/PrivateRoute";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Overview from "./components/Dashboard/Overview";

function App() {
  return (
    <Routes>
      <Route path={paths.home} element={<Navigate to={paths.auth.signIn} />} />
      <Route path={paths.auth.signIn} element={<SignIn />} />
      <Route path={paths.auth.signUp} element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path={paths.dashboard.overview} element={<Overview />} />
      </Route>
    </Routes>
  );
}

export default App;
