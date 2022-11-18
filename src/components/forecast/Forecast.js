import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInweek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInweek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInweek)
  );

  console.log(forecastDays);
  return (
    <>
      <label
        className="title"
        style={{ marginLeft: "15px", marginBottom: "10px" }}>
        Daily
      </label>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="group">
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label> Pressure</label>
                  <label> {item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label> Humidity</label>
                  <label> {item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label> {item.clouds.all}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label> {item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label> {item.main.sea__level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Fells like</label>
                  <label> {Math.round(item.main.feels_like)} °C </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
