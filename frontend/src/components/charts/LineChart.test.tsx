import { render } from "@testing-library/react";
import LineChart from "./LineChart";
import type { WeatherData } from "../../types/insightData";

const mockData: WeatherData = {
  avData: { label: "Average", data: ["1", "2", "3"] },
  mnData: { label: "Min", data: ["0", "1", "2"] },
  mxData: { label: "Max", data: ["2", "3", "4"] },
};

describe("LineChart", () => {
  it("renders a canvas without crashing", () => {
    const { container } = render(
      <LineChart data={mockData} solKeys={["1", "2", "3"]} />,
    );
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });

  it("renders with empty solKeys without crashing", () => {
    const { container } = render(<LineChart data={mockData} solKeys={[]} />);
    expect(container.querySelector("canvas")).toBeInTheDocument();
  });
});
