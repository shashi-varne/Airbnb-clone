import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p> 62 stays &middot; 26 August to 30 August &middot; 2 guests </p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://www.elliman.com/insider/wp-content/uploads/2019/04/ELI040119_RENTALS_Guide_001.jpg"
        location="Private rooms in the middle of NYC"
        title="Stay at the spacious Manhattan Apartments"
        desc="2 guests · 1 bedroom · 1 bed · 1.5 shared Bathrooms · Wifi · Free Parking"
        star={4.8}
        price="$70/night"
        total="$180 total"
      />
      <SearchResult
        img="https://www.apartments.com/images/default-source/default-album/nycstudio.tmb-featuredim.jpg?sfvrsn=ae1c4d25_0"
        location="Private rooms in the middle of NYC"
        title="Stay at the spacious Manhattan Apartments"
        desc="2 guests · 1 bedroom · 1 bed · 1.5 shared Bathrooms · Wifi · Free Parking"
        star={4.8}
        price="$70/night"
        total="$180 total"
      />
      <SearchResult
        img="https://ds2.cityrealty.com/img/2ead425c3db3b9c6937c5f0b85ada3561b9cfe53+736++0+60/45-sutton-place-south-interiors.jpg"
        location="Private rooms in the middle of NYC"
        title="Stay at the spacious Manhattan Apartments"
        desc="2 guests · 1 bedroom · 1 bed · 1.5 shared Bathrooms · Wifi · Free Parking"
        star={4.8}
        price="$70/night"
        total="$180 total"
      />
      <SearchResult
        img="https://i.pinimg.com/originals/92/c1/0c/92c10c1c74a84f885e7a7e28285010b2.jpg"
        location="Private rooms in the middle of NYC"
        title="Stay at the spacious Manhattan Apartments"
        desc="2 guests · 1 bedroom · 1 bed · 1.5 shared Bathrooms · Wifi · Free Parking"
        star={4.8}
        price="$70/night"
        total="$180 total"
      />
      <SearchResult
        img="https://img.buzzfeed.com/buzzfeed-static/static/2016-04/27/14/campaign_images/webdr11/how-to-find-nyc-apartment-2-512-1461782772-1_dblbig.jpg"
        location="Private rooms in the middle of NYC"
        title="Stay at the spacious Manhattan Apartments"
        desc="2 guests · 1 bedroom · 1 bed · 1.5 shared Bathrooms · Wifi · Free Parking"
        star={4.8}
        price="$70/night"
        total="$180 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2cGYPPF3p0Yd9u6hV8pjEMmmKVS1MTPmCFg&usqp=CAU"
        location="Private rooms in the middle of NYC"
        title="Stay at the spacious Manhattan Apartments"
        desc="2 guests · 1 bedroom · 1 bed · 1.5 shared Bathrooms · Wifi · Free Parking"
        star={4.8}
        price="$70/night"
        total="$180 total"
      />
      <SearchResult
        img="https://www.elliman.com/insider/wp-content/uploads/2019/04/ELI040119_RENTALS_Guide_001.jpg"
        location="Private rooms in the middle of NYC"
        title="Stay at the spacious Manhattan Apartments"
        desc="2 guests · 1 bedroom · 1 bed · 1.5 shared Bathrooms · Wifi · Free Parking"
        star={4.8}
        price="$70/night"
        total="$180 total"
      />
    </div>
  );
}

export default SearchPage;
