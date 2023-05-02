import Table from "../components/Table";
import { tableData } from "../data/tableData";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Cemento Assignment</h1>
      <Table data={tableData}/>
    </div>
  );
};

export default Home;
