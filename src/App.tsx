import { Provider } from "react-redux";
import { store } from "./state/store";
import { PackageForm } from "./components/PackageForm/PackageForm";
import { PackageList } from "./components/PackageList/PackageList";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>NPM package search.</h1>
        <p>Bare-bones. Nothing Fancy here.</p>
        <PackageForm />
        <PackageList />
      </Provider>
    </>
  );
}

export default App;
