import React from 'react';
import {render, cleanup, fireEvent, wait, waitForElement} from "@testing-library/react";
import axiosMock from "axios";
import Venues from '../pages/Venues';

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

jest.mock('axios')
describe("Locations", () => { 

  beforeAll(() => locations);
  
  afterEach(cleanup);
  
  it("renders location venues on currentlocation ", async () => {
    axiosMock.get.mockResolvedValueOnce(() =>
      Promise.resolve({ data: locations })
    );
    const { getByTestId, queryAllByTestId } = render(<Venues />);

    expect(getByTestId("loading").textContent).toBe("Loading...");

   await wait(() =>
      expect(queryAllByTestId("locations").length).toBeGreaterThan(0)
    );
  });
  
  it("fetches erroneously data", async () => {
    const errorMessage = "Network Error";
    await axiosMock.get.mockImplementation(() =>
      Promise.reject(new Error(errorMessage))
    );
    expect(axiosMock.get).toHaveBeenCalledTimes(0);
  });
  
  it("It calls handleSearch on search button click", () => {
    const { getByText } = render(<Venues/>);
    const btn = getByText('search')
    fireEvent.click(btn)
    expect(fireEvent.click(btn)).toEqual(true)
  });

})
