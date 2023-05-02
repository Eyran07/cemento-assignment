import Table from "../components/Table";
import { tableData } from '../data/tableData';

const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <Table data={tableData} />
        </div>
    );
}

export default Home;
