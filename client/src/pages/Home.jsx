import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import h5 from "../photos/honor/h5.jpg";

const Home = () => {
  // const navigate = useNavigate();

  return (
    <div className="ct-home">
      <Hero />
      <div className="ct-records">
        <h2>
          <span>Records</span> & Achievements
        </h2>
        <div className="ct-record--sub">
          <img src={h5} />
          <div className="ct-rAchieve">
            <div>
              <p>
                <span>Pac-12 Leader</span>
              </p>
              <p>
                Punts Inside 20: <span>22</span>
              </p>
            </div>

            <div>
              <p>
                <span>CU Records</span>
              </p>
              <p>
                Punts Inside 10:<span> 12</span>
              </p>
              <p>
                Punts Inside 5: <span>6</span>
              </p>
              <p>
                Season Punting Average: <span>44.5</span> (11th in CU history)
              </p>
              <p>
                Career Punting Average: <span>7th</span> in CU history
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ct-misc">
        <h2>
          miscell<span>aneous</span>
        </h2>
        <div className="ct-misc--div">
          <div>
            <h3>Academic Achievements</h3>
            <p>
              Recognized for academic excellence with distinctions including
              Academic All-District from College Sports Communicators, placement
              on the Pac-12 Academic Honor Roll, and selection to the First Team
              Academic All-Colorado by the Colorado Chapter of the National
              Football Foundation
            </p>
          </div>
          <div>
            <h3>High School Rankings</h3>
            <p>
              In high school rankings, achieved a 3-star prospect star rating
              and was ranked as the No. 7 punter in the class and the No. 4
              player from Australia according to the 247 Composite Rankings
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
