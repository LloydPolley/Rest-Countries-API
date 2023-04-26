import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import CountryList from "./CountryList";

const data = {
  flags: {
    png: "https://flagcdn.com/w320/bb.png",
    svg: "https://flagcdn.com/bb.svg",
    alt: "The flag of Barbados is composed of three equal vertical bands of ultramarine, gold and ultramarine. The head of a black trident is centered in the gold band.",
  },
  name: {
    common: "Barbados",
    official: "Barbados",
    nativeName: {
      eng: {
        official: "Barbados",
        common: "Barbados",
      },
    },
  },
  capital: ["Bridgetown"],
  region: "Americas",
  population: 287371,
};

describe("CountryList", () => {
  const mockData = [
    { ...data, population: 1 },
    { ...data, population: 2 },
    { ...data, population: 3 },
  ];
  it("renders loading state when status is 'loading'", () => {
    render(
      <MemoryRouter>
        <CountryList data={mockData} status="loading" />
      </MemoryRouter>
    );

    const loadingElement = screen.getByTestId("loading-element");
    expect(loadingElement).toBeInTheDocument();
  });

  it("renders 'No matches' when data status is 404", () => {
    render(
      <MemoryRouter>
        <CountryList data={{ status: 404 }} />
      </MemoryRouter>
    );

    const noMatchesElement = screen.getByText("No matches");
    expect(noMatchesElement).toBeInTheDocument();
  });

  it("renders CountryWidgets for each country in data", () => {
    render(
      <MemoryRouter>
        <CountryList data={mockData} status="loaded" />
      </MemoryRouter>
    );

    const countryElements = screen.getAllByTestId("country-widget");
    expect(countryElements).toHaveLength(mockData.length);
  });

  //   it("increases amount on clicking the 'plus' icon", () => {
  //     render(
  //       <MemoryRouter>
  //         <CountryList data={mockData} status="loaded" />
  //       </MemoryRouter>
  //     );

  //     const amountElement = screen.getByTestId("amount-element");
  //     const plusIconElement = screen.getByTestId("plus-icon");

  //     fireEvent.click(plusIconElement);

  //     expect(amountElement).toHaveTextContent("8");
  //   });
});
