import Header from "../components/header/Header";
//import List from "../components/bestSeller/List";
import Category from "../components/category/Category";
import About from "../components/aboutUs/about";
import {useState} from'react'
import Offers from "../components/offers/Offers";
import BestSelling from "../components/bestSeller/bestSelling";
// import { Link } from "react-router-dom";
// import { BiCog } from "react-icons/bi";

const Home = ({clickLogin, setClickLogin} ) => {
  const [menu,setMenu] =useState('all')
  return (
    <div>
      <Header clickLogin={clickLogin} setClickLogin={setClickLogin}       />
      <Category menu={menu} setMenu={setMenu} id='menu' />
      <Offers />
      <BestSelling menu={menu} setMenu={setMenu} />
      <About />
    </div>
  )
}


export default Home
