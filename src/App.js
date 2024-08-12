import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import { Suspense, lazy } from "react";
import Loading from "./subComponents/Loading";
import BlogPost from "./components/BlogPost";

// Components (using lazy loading)
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Main />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <AboutPage />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ContactPage />
                  </Suspense>
                }
              />
              <Route
                path="/blog"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <BlogPage />
                  </Suspense>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <BlogPost />
                  </Suspense>
                }
              />{" "}
              <Route
                path="/work"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <WorkPage />
                  </Suspense>
                }
              />
              <Route
                path="/skills"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <MySkillsPage />
                  </Suspense>
                }
              />
              <Route path="*" element={<Main />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
