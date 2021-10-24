import renderer from "react-test-renderer";
import ResultsCardComponent from "../components/ResultsCardComponent";

it("renders correctly", () => {
  const tree = renderer
    .create(<ResultsCardComponent cityProp="Abuja" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* REFERENCES
  ===========> 
  * I learnt to make snapshots from https://jestjs.io/docs/snapshot-testing
  */