import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
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
import Landing from "./components/Landing";
import Activities from "./components/activities/Activities";
import Events from "./components/events/Events";
import Gallery from "./components/gallery/Gallery";
import MapPage from "./components/getLocation/MapPage";
import Exhibition from "./components/activities/specificpage/Exhibition";
import IndiaArtFair from "./components/activities/specificpage/IndiaArtFair";
import DairyExpo from "./components/activities/specificpage/DairyExpo";
import PupperParty from "./components/activities/specificpage/PupperParty";
import RoseExhibition from "./components/activities/specificpage/RoseExhibition";
import WildLifeTour from "./components/activities/specificpage/WildLifeTour";
import Login from "./components/Login";
import ExpenseTraker from "./components/expenceTraker/ExpenseTraker";
export default function App() {
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
      },
    );
  }, []);

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Landing}></Route>

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

        <Route path="/Galleries" component={Gallery}></Route>
        <Route path="/MapPage" component={MapPage}></Route>
        <Route path="/ExpenseTraker" component={ExpenseTraker}></Route>
        <Route path="/Login" component={Login}></Route>
      </Switch>

      <ScrollToTop />
    </Router>
  );
}
