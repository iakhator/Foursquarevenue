import React from "react";
import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axiosMock from "axios";
import Locations from "../components/Locations";

const res = 
  {
    groups: [
      {
        type: "Recommended Places",
        name: "recommended",
        items: [
          {
            reasons: {
              count: 2,
              items: [
                {
                  summary: "Lots of people like this place",
                  type: "general",
                  reasonName: "rawLikesReason"
                }
              ]
            },
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
                    prefix:
                      "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
                    suffix: ".png"
                  },
                  primary: true
                }
              ],
              verified: true,
              stats: {
                tipCount: 0,
                usersCount: 0,
                checkinsCount: 0,
                visitsCount: 0
              },
              beenHere: {
                count: 0,
                lastCheckinExpiredAt: 0,
                marked: false,
                unconfirmedCount: 0
              },
              photos: {
                count: 0,
                groups: []
              },
              venuePage: {
                id: "60967254"
              },
              hereNow: {
                count: 0,
                summary: "Nobody here",
                groups: []
              }
            },
            referralId: "e-0-51e4a11c498ed6f7bfaff09f-0"
          }
        ]
      }
    ]
  };

jest.mock("axios");

beforeEach(() => {
  axiosMock.get = jest.fn(() => Promise.resolve({ data: { res } }));
});

afterEach(cleanup);

it("check that props is passed", async () => {
  // const locations = res.groups[0].items
  // act(() => render(<Locations />))
  // console.log();
});
