import React, { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Testimonial from "./components/Testimonials/Testimonials";
import scrollreveal from "scrollreveal";
import Camping from "./components/adventures/specificpage/Camping";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hiking from "./components/adventures/specificpage/Hiking";
import CliffJumping from "./components/adventures/specificpage/CliffJumping";
import MountainBiking from "./components/adventures/specificpage/MountainBiking";
import ZipLining from "./components/adventures/specificpage/ZipLining";
import SkyDiving from "./components/adventures/specificpage/SkyDiving";
import Adventures from "./components/adventures/Adventures";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import "antd/dist/antd.css";
import Activities from "./components/activities/Activities";
import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";
import MapPage from "./components/getLocation/MapPage";
import CartPage from "./components/cart/CartPage";
import Exhibition from "./components/activities/specificpage/Exhibition";
import IndiaArtFair from "./components/activities/specificpage/IndiaArtFair";
import DairyExpo from "./components/activities/specificpage/DairyExpo";
import PupperParty from "./components/activities/specificpage/PupperParty";
import RoseExhibition from "./components/activities/specificpage/RoseExhibition";
import WildLifeTour from "./components/activities/specificpage/WildLifeTour";
import Cart from "./components/cart/Cart";
import About from "./components/AboutUs";
import Products from "./components/Products";
import Wishlist from "./components/Wishlist";
import LoginScreen from "./components/Login";
import RegisterScreen from "./components/Register";

let loginUserIndex;
let loginUser;
export default function App() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const [usersState, setusersState] = useState(users);
  const [user, setUser] = useState({});
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        #adventures,
        #testimonials
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );

    //check user is login or not
    loginUserIndex = usersState.findIndex((element) => element.login == true);
    loginUser = usersState[loginUserIndex];
    setUser(loginUser);
  }, [usersState]);
  const handleLogout = () => {
    users[loginUserIndex] = {
      ...users[loginUserIndex],
      login: false,
    };
    console.log({ users, usersState, loginUserIndex });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("email");
    setusersState([...users]);
  };

  const submitLoginHandler = (e, email, password, history) => {
    console.log("click");
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUserIndex = users.findIndex(
      (element) => element.email == email && element.password == password
    );

    if (existingUserIndex != -1) {
      alert("Login Successful");
      users[existingUserIndex] = { ...users[existingUserIndex], login: true };
      setUser(users[existingUserIndex]);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("email",users[existingUserIndex].email)
      setusersState([...users]);
      history.push("/");
    } else {
      alert("Invalid Username or Password");
    }
  };
  return (
    <Router>
      <Navbar loginUser={user} handleLogout={handleLogout} />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Testimonials" component={Testimonial}></Route>
        <Route path="/about" component={About}></Route>
        <Route
          path="/Login"
          render={(props) => (
            <LoginScreen {...props} submitHandler={submitLoginHandler} user={user} />
          )}
        ></Route>
        <Route path="/register" component={RegisterScreen}></Route>

        {/* Adventures Routing Start */}
        <Route path="/Adventures" component={Adventures}></Route>
        <Route path="/Adventure/Camping" component={Camping}></Route>
        <Route path="/Adventure/Hiking" component={Hiking}></Route>
        <Route path="/Adventure/CliffJumping" component={CliffJumping}></Route>
        <Route
          path="/Adventure/MountainBiking"
          component={MountainBiking}
        ></Route>
        <Route path="/Adventure/ZipLining" component={ZipLining}></Route>
        <Route path="/Adventure/SkyDiving" component={SkyDiving}></Route>
        {/* Adventures Routing End */}
        {/* Activities Routing Start */}
        <Route path="/Activities" component={Activities}></Route>
        <Route path="/Activity/Exhibition" component={Exhibition}></Route>
        <Route path="/Activity/IndiaArtFair" component={IndiaArtFair}></Route>
        <Route path="/Activity/DairyExpo" component={DairyExpo}></Route>
        <Route path="/Activity/PupperParty" component={PupperParty}></Route>
        <Route
          path="/Activity/RoseExhibition"
          component={RoseExhibition}
        ></Route>
        <Route path="/Activity/WildLifeTour" component={WildLifeTour}></Route>
        {/* Activities Routing End */}
        {/* Events Routing Start */}
        <Route path="/Events" component={Events}></Route>
        {/* Events Routing End */}
        {/* Gallery Routing Start */}
        <Route path="/Galleries" component={Gallery}></Route>
        {/* <Route
          path="/Gallery/GalleryPupperParty"
          component={GalleryPupperParty}
        ></Route> */}
        <Route path="/MapPage" component={MapPage}></Route>
        <Route path="/CartPage" component={CartPage}></Route>
        <Route path="/Cart" component={Cart}></Route>
      </Switch>
      {/* Events Routing End */}
      <Route path="/Gallery" component={Gallery}></Route>
      <Route path="/MapPage" component={MapPage}></Route>

      <Route path="/Products" component={Products}></Route>
      <Route path="/WishList" component={Wishlist}></Route>

      {/* <SignIn /> */}
      <ScrollToTop />
    </Router>
  );
}
