import "./App.css";
import { ContentWrapper, RootElement } from "my-material-theme-ui-components";
import TopNavBarComponnet from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const Admin = lazy(() => import("./components/Admin"));
  const Calenadar = lazy(() => import("./components/Calendar"));
  return (
    <>
      <Router>
        <RootElement $padding="12px" $flexDirection="row">
          <TopNavBarComponnet isMobile={true} />
          <ContentWrapper $backgroundColor="#ECE8DE">
            <Suspense fallback="loading">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="admin" element={<Admin />} />
                <Route path="/calendar" element={<Calenadar />} />
                <Route path="*" element={<>no Page Found</>} />
              </Routes>
            </Suspense>
          </ContentWrapper>
        </RootElement>
      </Router>
    </>
  );
}

export default App;
