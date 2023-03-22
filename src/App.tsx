import Button from "./components/buttons/mainButton/Button";
import Layout from "./components/layouts/mainLayout/Layout";

function App() {
  return (
    <>
      <Layout>
        <div className="flex gap-2">
          <Button title="Hi" color="secondary" onClick={() => alert("Hiiii")} />
          <Button
            title="Pecgo"
            color="warning"
            onClick={() => alert("Pecgo")}
          />
        </div>
      </Layout>
    </>
  );
}

export default App;
