import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import MentorMatch from "./MentorMatch";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./App.css";
import ChatMain from "./chat-page/ChatMain";
import ChatPage from "./chat-page/ChatPage"; // Import the new ChatPage component
import logo from "./anchor.png";

const myColorSet = {
  // input
  "--input-background-color": "#FF0000",
  "--input-text-color": "#fff",
  "--input-element-color": "rgb(0, 0, 255)",
  "--input-attach-color": "#fff",
  "--input-send-color": "#fff",
  "--input-placeholder-color": "rgb(255, 255, 255)",

  // message header
  "--message-header-background-color": "#FF0000",
  "--message-header-text-color": "#fff",
  "--message-header-last-active-color": "rgb(0, 0, 255)",
  "--message-header-back-color": "rgb(255, 255, 255)",

  // chat list header
  "--chatlist-header-background-color": "#FF0000",
  "--chatlist-header-text-color": "rgb(255, 255, 255)",
  "--chatlist-header-divider-color": "rgb(0, 128, 0)",

  //chatlist
  "--chatlist-background-color": "rgb(255, 192, 203)",
  "--no-conversation-text-color": "rgb(255, 255, 255)",

  //chat item
  "--chatitem-background-color": "rgb(0, 0, 255)",
  "--chatitem-selected-background-color": "rgb(255, 255, 0)",
  "--chatitem-title-text-color": "#FF0000",
  "--chatitem-content-text-color": "#FF0000",
  "--chatitem-hover-color": "#FF0000",

  //main container
  "--container-background-color": "rgb(255, 192, 203)",

  //loader
  "--loader-color": "rgb(0, 128, 0)",

  //message list
  "--messagelist-background-color": "rgb(0, 0, 255)",
  "--no-message-text-color": "rgb(255, 255, 255)",

  // incoming message
  "--incoming-message-text-color": "rgb(255, 255, 255)",
  "--incoming-message-name-text-color": "rgb(255, 255, 255)",
  "--incoming-message-background-color": "rgb(0, 128, 0)",
  "--incoming-message-timestamp-color": "rgb(255, 255, 255)",
  "--incoming-message-link-color": "#FF0000",

  //outgoing message
  "--outgoing-message-text-color": "#FF0000",
  "--outgoing-message-background-color": "rgb(255, 255, 0)",
  "--outgoing-message-timestamp-color": "#FF0000",
  "--outgoing-message-checkmark-color": "#FF0000",
  "--outgoing-message-loader-color": "#FF0000",
  "--outgoing-message-link-color": "rgb(0, 128, 0)",
};

function MainContent() {
  const location = useLocation();

  return (
    <div className="App">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <svg
            className="navbar-logo"
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="83" height="83" fill="url(#pattern0_161_1489)" />
            <defs>
              <pattern
                id="pattern0_161_1489"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_161_1489"
                  transform="scale(0.0111111)"
                />
              </pattern>
              <image
                id="image0_161_1489"
                width="90"
                height="90"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO3cT2sTQRzG8VHUWt+AUi+lUHpVAh6tfSEKfQ16VK8JggX/1BbUt2FuXhQ8ebFQejClliYtHmrxT6n28JXF36FIsu6um8nM5PnAQmgnv915WJLZCTPOiYiIiMiQAReAZeAA+AasA6vAfJ+2N+x/69b2C/AUmBz2dUaPP8EN8ga4AlwF3ua0Wx11P4IGnAYOyffLjjw/slqj7k/sQRehoP/zo6OolX+eaNwBk8AT+2Irax94rC/DkoBp4L6NQAY5sDbTZevLX4DLwLs+Ib9XwDUDJoAm0LMjez1R93lExpyNSU+lVscL0tIFWsA5FxrS1HKhIU27LjSkaceFhjQ1XWhISzfYL8MiBvUq9jrBCS0gFHQ+BR1ZQOiOzqegIwsI3dH5FHRkAaE7Ot9YB01ausE+GZKmlgsNadp1oSFRLjQkyoWGRLnQkKYdFxrS1HShIS3dYMfRRRTpYYznCo6C9kRBe6KgPVHQnihoTxS0JwraEwXtiYL2xFYshfJk2HOpytaJAA3gHtAGPtn66kN73a7xXO1+9e3cjWjWrIiI1Lfyf8VW/meLzV9kn4U11m9YzX07Yqz/HNjLfl23+e6zde5l8QG4A8xVqDln713LGT2sRVy//C84wPcCQ6pt4CWwCFwDLgLn7bhkf1u0NlnbsmKr36sybPta4cLHXa/KHf1o1FcdoWbVPSseAkejvvoI/AQeAGdKB30i8CngLtAZwgVuArft2Iywfseymaoc8ICtGRZs58Ps8beqPatx/eR+cVZ/HnhmbUKtv2U7OC542e8OmAFuAUvAK2AD+GwfNcc2dv0IvLaO3wRmS9SftfcsW42O1Tz2UP/I+rJhfVuyvs5UDkxEpEaa68inuQ4017FdYSiluQ7pS3MdnmiuY8g014HmOtBcRxGa6xARERERERERcWPrN0p7Uld3PGpVAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
          Pier
        </Link>
        <div className="navbar-items-container">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/contact">
            Resources
          </Link>
          <Link className="navbar-item" to="/signin">
            Mentors
          </Link>
          <Link className="navbar-item" to="/chat">
            Connect
          </Link>
          <Link className="navbar-item" to="/signup">
            Profile
          </Link>
        </div>
        <div className="navbar-item auth-buttons">
          <Link className="navbar-item button-signup" to="/signup">
            Sign Up
          </Link>
          <Link className="navbar-item button-login" to="/signin">
            Log In
          </Link>
        </div>
      </nav>

      {/* Render header only on the Home ("/") route */}

      {location.pathname === "/" && (
        <header className="App-header">
          <h1 className="header-title">Welcome to Anchor</h1>
          <h1 className="header-title">A platform meant for</h1>
          <h1 className="header-title">connecting!</h1>
          {/* <Link to="/mentor-match">
            <button className="cta-button">Find your mentor!</button>
          </Link> */}

          <div className="box">
            <h1>First Time User?</h1>
            <div className="buttons">
              <button className="student-signup">Student Sign-Up</button>
              <button className="mentor-signup">Mentor Sign-Up</button>
            </div>
          </div>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor-match" element={<MentorMatch />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<ChatPage />} />{" "}
        {/* Use the new ChatPage component */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
