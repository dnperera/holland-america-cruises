import React, { Component } from "react";
export class Itineraries extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main className="container">
        <h1 className="container__heading">Alaska Cruises and Excursions</h1>
        <section className="container__itinerary">
          <h3 className="container__itinerary--heading">
            16 days Inside Passage Of Alaska
          </h3>
          <div className="container__itinerary__summery">
            <div className="container__itinerary--map">
              <img
                src="images/holland-america-alaska-cruise.jpg"
                alt="Holland Ameria Alaska Cruises"
              />
              <a href="#">View Larger Map &#x1f50d;</a>
            </div>
            <div className="container__itinerary--ports">
              <div>Departure Date :</div>
              <div>18 Oct 2018</div>
              <div>
                Ship: <span>ms Zaandam</span>
              </div>
              <div>
                Departs: <span>San Antonio, Chile</span>
              </div>
              <div>
                Arrives: <span>Rio de Jeneiro, Brazil</span>
              </div>
            </div>

            <div className="container__itinerary--pricing">Pricing</div>
          </div>
        </section>
      </main>
    );
  }
}

export default Itineraries;
