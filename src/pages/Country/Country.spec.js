import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Country from "./Country";

// Mock the fetchCountryCode function
jest.mock("../../data/rest", () => ({
  fetchCountryCode: jest.fn(() =>
    Promise.resolve([
      { name: "Border Country 1" },
      { name: "Border Country 2" },
    ])
  ),
}));

describe("Country", () => {
  let queryClient;

  beforeAll(() => {
    queryClient = new QueryClient();
  });

  afterAll(() => {
    queryClient.clear();
    queryClient = null;
  });

  it("renders loading spinner when country data is loading", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Country match={{ params: { id: "1" } }} />
      </QueryClientProvider>
    );

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders country data when country data is loaded", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Country match={{ params: { id: "1" } }} />
      </QueryClientProvider>
    );

    await waitFor(() => screen.getByText("Native Name:"));

    expect(screen.getByText("Native Name:")).toBeInTheDocument();
    expect(screen.getByText("Population:")).toBeInTheDocument();
    expect(screen.getByText("Region:")).toBeInTheDocument();
    expect(screen.getByText("Sub Region:")).toBeInTheDocument();
    expect(screen.getByText("Capital:")).toBeInTheDocument();
    expect(screen.getByText("Top Level Domain:")).toBeInTheDocument();
    expect(screen.getByText("Currency:")).toBeInTheDocument();
    expect(screen.getByText("Language:")).toBeInTheDocument();
  });

  it("renders border countries when border country data is loaded", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Country match={{ params: { id: "1" } }} />
      </QueryClientProvider>
    );

    await waitFor(() => screen.getByText("Borders"));

    expect(screen.getByText("Borders")).toBeInTheDocument();
    expect(screen.getByText("Border Country 1")).toBeInTheDocument();
    expect(screen.getByText("Border Country 2")).toBeInTheDocument();
  });
});
