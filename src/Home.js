import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div>
      <Banner />
      <div className="home__section">
        <Card
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/01/hotelmemo.jpg"
          title="Entire Homes"
          description="Comfortable private places with rooms for friends & family"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Safe and Sound"
          description="Comfortable private places with rooms for friends & family"
        />
        <Card
          src="https://www.boltinsurance.com/wp-content/uploads/Airbnb-or-Hotel.jpg"
          title="Peaceful & Serene"
          description="Comfortable private places with rooms for friends & family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://i.pinimg.com/originals/a1/7e/cf/a17ecf5a04e7daa2e0ec88adea1c6844.jpg"
          title="Online Experiences"
          description="Comfortable private places with rooms for friends & family"
          price="$400/night"
        />
        <Card
          src="https://travelandleisureindia.in/wp-content/uploads/2018/12/Airbnb-Goa-Homes-Feature.jpg"
          title="Unique stays"
          description="Comfortable private places with rooms for friends & family"
          price="$350/night"
        />
        <Card
          src="https://www.unreservedmedia.com/wp-content/fromEnt/15071/Airbnb%20Vietnam%20Garden%20House.jpg"
          title="Entire Homes"
          description="Comfortable private places with rooms for friends & family"
          price="$290/night"
        />
      </div>
    </div>
  );
}

export default Home;
