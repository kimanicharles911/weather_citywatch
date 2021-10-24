import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App.jsx";
import FormInputComponent from "../components/FormInputComponent.jsx";
import ResultsCardComponent from "../components/ResultsCardComponent.jsx";

describe("Async fetch tests", () => {
  it('check if heading is rendered', () => {
    render(<ResultsCardComponent cityProp='Meru' />)
    expect(screen.getByText(/Results/i)).toBeVisible()
  });

  it("check if a list item is rendered", async () => {
    render(<ResultsCardComponent cityProp='Meru'  />);
    const tempSpanEl = await screen.findByTestId("temp-value-span");
    expect(tempSpanEl).toBeInTheDocument();
  });
});