import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import { Suspense, lazy } from "react";
import Loading from "./subComponents/Loading";
import BlogPost from "./components/BlogPost";
import PageTransition from "./subComponents/pageTransition";

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
              <Route path="/" element={<Main />} />
              <Route
                path="/about"
                element={
                  <PageTransition direction="bottom">
                    <AboutPage />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition direction="top">
                    <ContactPage />
                  </PageTransition>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageTransition direction="right">
                    <BlogPage />
                  </PageTransition>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <PageTransition direction="right">
                    <BlogPost />
                  </PageTransition>
                }
              />{" "}
              <Route
                path="/work"
                element={
                  <PageTransition direction="left">
                    <WorkPage />
                  </PageTransition>
                }
              />
              <Route
                path="/skills"
                element={
                  <PageTransition direction="bottom">
                    <MySkillsPage />
                  </PageTransition>
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
