
import axios from 'axios'
import { Link } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5555/";
axios.defaults.withCredentials = true;

const Controllers = () => {
  return (
    <main className="controllers">
      <p className="opening-p">only owners can visit the page</p>
      
      <p>
        Welcome to your management dashboard! Here, you have the tools to
        oversee and enhance your app experience seamlessly
      </p>

      <div className="new-item">
       <Link to='/admin/add'>
       <button className="add">add new Item</button>
       </Link>
       <Link to='/adminMenu'>
       <button className="add">menu</button>
       </Link> 
      </div>
    </main>
  );
};

export default Controllers;
