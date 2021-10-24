import renderer from "react-test-renderer";
import FormInputComponent from "../components/FormInputComponent.jsx"

it("renders FormInputComponent correctly", () => {
  const tree = renderer
    .create(<FormInputComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* REFERENCES
  ===========> 
  * I learnt to make snapshots from https://jestjs.io/docs/snapshot-testing
  */