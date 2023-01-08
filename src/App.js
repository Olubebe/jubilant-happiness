import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./pages/Navbar/Navbar";
import HeroSection from "./pages/HeroSection/HeroSection";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import Account from "./pages/Login/Account";
import Users from "./pages/Users/Users";
import Errorpage from "./pages/ErrorBoundary/Errorpage";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/Login/ProtectedRoute";
import ErrorBoundary from "./pages/ErrorBoundary/ErrorBoundary";
function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=120");
    setLoading(false);
    const data = await response.json();
    setUser(data.results);
    console.log(data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);
  const calculateTotalPages = Math.ceil(user.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="App">
    <ErrorBoundary>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route
              path="/users"
              element={
                <Users
                  totalPages={calculateTotalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  loading={loading}
                  user={currentPosts}
                />
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="*" element={<Errorpage />} />
            
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
