import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import MentorMatch from './MentorMatch';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Resources from './components/Resources';
import StudentForm from './StudentForm';
//import logo from './anchor.png';

function MainContent() {
  const location = useLocation();

  return (
    
    <div className="App">
      
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <svg className="navbar-logo" width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="83" height="83" fill="url(#pattern0_161_1489)"/>
            <defs>
            <pattern id="pattern0_161_1489" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_161_1489" transform="scale(0.0111111)"/>
            </pattern>
            <image id="image0_161_1489" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO3cT2sTQRzG8VHUWt+AUi+lUHpVAh6tfSEKfQ16VK8JggX/1BbUt2FuXhQ8ebFQejClliYtHmrxT6n28JXF36FIsu6um8nM5PnAQmgnv915WJLZCTPOiYiIiMiQAReAZeAA+AasA6vAfJ+2N+x/69b2C/AUmBz2dUaPP8EN8ga4AlwF3ua0Wx11P4IGnAYOyffLjjw/slqj7k/sQRehoP/zo6OolX+eaNwBk8AT+2Irax94rC/DkoBp4L6NQAY5sDbTZevLX4DLwLs+Ib9XwDUDJoAm0LMjez1R93lExpyNSU+lVscL0tIFWsA5FxrS1HKhIU27LjSkaceFhjQ1XWhISzfYL8MiBvUq9jrBCS0gFHQ+BR1ZQOiOzqegIwsI3dH5FHRkAaE7Ot9YB01ausE+GZKmlgsNadp1oSFRLjQkyoWGRLnQkKYdFxrS1HShIS3dYMfRRRTpYYznCo6C9kRBe6KgPVHQnihoTxS0JwraEwXtiYL2xFYshfJk2HOpytaJAA3gHtAGPtn66kN73a7xXO1+9e3cjWjWrIiI1Lfyf8VW/meLzV9kn4U11m9YzX07Yqz/HNjLfl23+e6zde5l8QG4A8xVqDln713LGT2sRVy//C84wPcCQ6pt4CWwCFwDLgLn7bhkf1u0NlnbsmKr36sybPta4cLHXa/KHf1o1FcdoWbVPSseAkejvvoI/AQeAGdKB30i8CngLtAZwgVuArft2Iywfseymaoc8ICtGRZs58Ps8beqPatx/eR+cVZ/HnhmbUKtv2U7OC542e8OmAFuAUvAK2AD+GwfNcc2dv0IvLaO3wRmS9SftfcsW42O1Tz2UP/I+rJhfVuyvs5UDkxEpEaa68inuQ4017FdYSiluQ7pS3MdnmiuY8g014HmOtBcRxGa6xARERERERERcWPrN0p7Uld3PGpVAAAAAElFTkSuQmCC"/>
            </defs>
          </svg>
          <span>Pier</span>
        </Link>
        <div className="navbar-items-container">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/resources">Resources</Link>
          <Link className="navbar-item" to="/mentors">Mentors</Link>
          <Link className="navbar-item" to="/connect">Connect</Link>
          <Link className="navbar-item" to="/profile">Profile</Link>
        </div>
        <div className="navbar-item auth-buttons">
          <button className="navbar-item button-signup" type="button" to="/signup">Sign Up</button>
          <button className="navbar-item button-login" type="button" to="/signin">Log In</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentors" element={<MentorMatch />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources/*" element={<Resources />} /> 
        <Route path="/student-form" element={<StudentForm />} /> 

      </Routes>
      <div class="footer-container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-light">&copy; 
              <a href="/" class="mb-3 me-2 mb-md-0 text-body text-decoration-none lh-1">
                <svg className="footer-logo" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="23" height="23" fill="url(#pattern0_161_1489)"/>
                  <defs>
                  <pattern id="pattern0_161_1489" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_161_1489" transform="scale(0.0111111)"/>
                  </pattern>
                  <image id="image0_161_1489" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO3cT2sTQRzG8VHUWt+AUi+lUHpVAh6tfSEKfQ16VK8JggX/1BbUt2FuXhQ8ebFQejClliYtHmrxT6n28JXF36FIsu6um8nM5PnAQmgnv915WJLZCTPOiYiIiMiQAReAZeAA+AasA6vAfJ+2N+x/69b2C/AUmBz2dUaPP8EN8ga4AlwF3ua0Wx11P4IGnAYOyffLjjw/slqj7k/sQRehoP/zo6OolX+eaNwBk8AT+2Irax94rC/DkoBp4L6NQAY5sDbTZevLX4DLwLs+Ib9XwDUDJoAm0LMjez1R93lExpyNSU+lVscL0tIFWsA5FxrS1HKhIU27LjSkaceFhjQ1XWhISzfYL8MiBvUq9jrBCS0gFHQ+BR1ZQOiOzqegIwsI3dH5FHRkAaE7Ot9YB01ausE+GZKmlgsNadp1oSFRLjQkyoWGRLnQkKYdFxrS1HShIS3dYMfRRRTpYYznCo6C9kRBe6KgPVHQnihoTxS0JwraEwXtiYL2xFYshfJk2HOpytaJAA3gHtAGPtn66kN73a7xXO1+9e3cjWjWrIiI1Lfyf8VW/meLzV9kn4U11m9YzX07Yqz/HNjLfl23+e6zde5l8QG4A8xVqDln713LGT2sRVy//C84wPcCQ6pt4CWwCFwDLgLn7bhkf1u0NlnbsmKr36sybPta4cLHXa/KHf1o1FcdoWbVPSseAkejvvoI/AQeAGdKB30i8CngLtAZwgVuArft2Iywfseymaoc8ICtGRZs58Ps8beqPatx/eR+cVZ/HnhmbUKtv2U7OC542e8OmAFuAUvAK2AD+GwfNcc2dv0IvLaO3wRmS9SftfcsW42O1Tz2UP/I+rJhfVuyvs5UDkxEpEaa68inuQ4017FdYSiluQ7pS3MdnmiuY8g014HmOtBcRxGa6xARERERERERcWPrN0p7Uld3PGpVAAAAAElFTkSuQmCC"/>
                  </defs>
                </svg>
              </a>
              2024 Pier
            </span>
          </div>

          <ul class="footer-media nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-light" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                </svg>
            </a></li>
            <li class="ms-3"><a class="text-light" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            </a></li>
            <li class="ms-3"><a class="text-light" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
              </a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <MainContent />
      </Router>
    </ChakraProvider>
  );
}

export default App;
