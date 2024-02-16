import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
import UserContext from "./contexts/UserContext.js";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./app/store.js"

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Mohit Kumar",
    };

    setUserName(data.name);
  }, []);

  return (
    // we can write many context provider as needed not just one,
    //  and even we can pass different to each of them
    <Provider store={store} >
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
