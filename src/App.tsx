import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "./lib/User";
import { Alert, Spin } from "antd";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";

function App() {
  const [user, loading, error] = useIdToken(auth);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/auth");
    }
  }, [user]);

  if (loading) {
    return <Spin />;
  }
  if (error) {
    return (
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
      />
    );
  }

  return (
    <UserContext.Provider value={{ isAuthorized: user !== null, user }}>
      <div className="App">
        <header className="App-header">
          <Outlet />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
