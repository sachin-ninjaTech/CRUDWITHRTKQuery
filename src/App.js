import AllRoutes from "./Components/AllRoutes";
import { AuthProvider } from "./Contexts/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AllRoutes />;
      </AuthProvider>
    </>
  );
};

export default App;
