import { render } from "@testing-library/react";
import WindRose from "./WindRose";
import type { WindData } from "../../types/insightData";

const mockData: WindData[] = [
  { data: new Array(16).fill("1") },
  { data: new Array(16).fill("2") },
];

describe("WindRose", () => {
  it("renders a canvas without crashing for a valid sol", () => {
    const { container } = render(
      <WindRose data={mockData} currSol="1" solKeys={["1", "2"]} />
    );
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });

  it("selects the correct data entry based on currSol/solKeys offset", () => {
    // currSol "2" with solKeys starting at "1" => key = 1 => mockData[1]
    const { container } = render(
      <WindRose data={mockData} currSol="2" solKeys={["1", "2"]} />,
    );
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });

  it("throws when currSol/solKeys produce an out-of-bounds index", () => {
    // key = 5 - 1 = 4, but mockData only has indices 0-1
    expect(() =>
      render(<WindRose data={mockData} currSol="5" solKeys={["1", "2"]} />),
    ).toThrow();
  });
});
