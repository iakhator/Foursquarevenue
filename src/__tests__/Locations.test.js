import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchLocations from "../components/SearchLocations";

const locations = [ {
        "id": "4e9313198231bf0d17a65375",
        "name": "HCSC OSC",
        "contact": {},
        "location": {
          "address": "955 W Cermak Rd",
          "lat": 41.8499,
          "lng": -87.649064,
          "labeledLatLngs": [
            {
              "label": "display",
              "lat": 41.8499,
              "lng": -87.649064
            }
          ],
          "postalCode": "60608",
          "cc": "US",
          "city": "Chicago",
          "state": "IL",
          "country": "United States",
          "formattedAddress": [
            "955 W Cermak Rd",
            "Chicago, IL 60608",
            "United States"
          ]
        },
        "categories": [
          {
            "id": "4bf58dd8d48988d124941735",
            "name": "Office",
            "pluralName": "Offices",
            "shortName": "Office",
            "icon": {
              "prefix": "https:\/\/ss3.4sqi.net\/img\/categories_v2\/building\/default_",
              "suffix": ".png"
            },
            "primary": true
          }
        ],
      }
];

describe('SearchLocations', () => {
  afterEach(cleanup);
  
  it("content exist ", () => {
    const { getByTestId } = render(<SearchLocations locations={locations} />);
    expect(getByTestId("locations").textContent).toContain(
      locations[0].name
    );
    expect(getByTestId("locations").textContent).toContain(
      locations[0].location.address
    );
  });
})
