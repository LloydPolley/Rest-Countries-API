import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CountryWidget from "./CountryWidget";

describe("CountryWidget", () => {
  const data = {
    name: { common: "Test Country" },
    flags: { svg: "test.svg" },
    population: 1000000,
    region: "Test Region",
    capital: "Test Capital",
  };

  it("renders correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <CountryWidget data={data} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the correct data", () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <CountryWidget data={data} />
      </MemoryRouter>
    );
    const countryWidgetElement = getByTestId("country-widget");
    const linkElement = getByTestId("country-link");
    const populationElement = getByText((content, element) => {
      // Custom text matcher function
      return element.tagName === "P" && content.startsWith("Population:");
    });
    const regionElement = getByText((content, element) => {
      // Custom text matcher function
      return element.tagName === "P" && content.startsWith("Region:");
    });
    const capitalElement = getByText((content, element) => {
      // Custom text matcher function
      return element.tagName === "P" && content.startsWith("Capital:");
    });

    expect(countryWidgetElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", `/${data.name.common}`);
    expect(populationElement).toBeInTheDocument();
    expect(regionElement).toBeInTheDocument();
    expect(capitalElement).toBeInTheDocument();
  });

  it("renders the correct image URL", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <CountryWidget data={data} />
      </MemoryRouter>
    );
    const imageElement =
      getByTestId("country-widget").querySelector(".country__image");
    expect(imageElement).toHaveStyle(
      `background-image: url("${data.flags.svg}")`
    );
  });
});
