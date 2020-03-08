import React from "react";
import { render, cleanup} from "@testing-library/react";
import Locations from "../components/Locations";


describe('Locations', () => {
  const locations = [
    {
      venue: {
        id: "51e4a11c498ed6f7bfaff09f",
        name: "CKDigital",
        contact: {},
        location: {
          address: "52 Shipeolu Street, Palmgrove",
          lat: 6.5405898694674915,
          lng: 3.3685517953053443,
          labeledLatLngs: [
            {
              label: "display",
              lat: 6.5405898694674915,
              lng: 3.3685517953053443
            }
          ],
          distance: 2155,
          cc: "NG",
          city: "Lagos",
          state: "Lagos",
          country: "Nigeria",
          formattedAddress: [
            "52 Shipeolu Street, Palmgrove",
            "Lagos",
            "Lagos",
            "Nigeria"
          ]
        },
        categories: [
          {
            id: "52f2ab2ebcbc57f1066b8b36",
            name: "IT Services",
            pluralName: "IT Services",
            shortName: "IT Services",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
              suffix: ".png"
            },
            primary: true
          }
        ]
      }
    }
  ];
  
  afterEach(cleanup);
  
  it("data exists", () => {
    const {getByTestId} = render(<Locations locations={locations}/>);
    expect(getByTestId('locations').textContent).toContain(
      locations[0].venue.name
    );
    expect(getByTestId("locations").textContent).toContain(
      locations[0].venue.location.address
    );
  });
})
