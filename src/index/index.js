import Home from "@/sessions/home/Home";
import Styles from "./index.module.css";
import Header from "@/sessions/header/Header";
import About from "@/sessions/about/about";
import Products from "@/sessions/products/products";
import Clients from "@/sessions/ Satisfied/Satisfied";
import Location from "@/sessions/Location/Location";
import Contacts from "@/sessions/Contacts/Contacts";

export default function Index() {
  return (
    <div className={Styles.container}>
      <Header />
      <Home />
      <About />
      <Products />
      <Clients />
      <Location />
      <Contacts />
    </div>
  );
}
