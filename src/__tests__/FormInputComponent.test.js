import renderer from "react-test-renderer";
import FormInputComponent from "../components/FormInputComponent.jsx"

it("renders FormInputComponent correctly", () => {
  const tree = renderer
    .create(<FormInputComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* 
I imported renderer to enable test renders of components to be done while generating snapshots.
I imported the FormInputComponent component to be tested.
I define a test block using it. The first paramter of the test block is the test's description and the last parameter is a callback function that executes the snapshot test.

  REFERENCES
  ===========> 
  * I learnt to make snapshots from https://jestjs.io/docs/snapshot-testing
  */