import "./App.css";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import { UserProvider } from "../client/context/UserContext";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ErrorBoundary from "./base/ErrorBoundary";

function App() {
  return (
    <>
      <UserProvider>
        <Layout>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              }
            />
            {/* <Route path="/sales" element={} /> */}
            {/* <Route path="/reviews" element={} /> */}
          </Routes>
        </Layout>
      </UserProvider>
    </>
  );
}

export default App;
