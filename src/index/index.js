import dynamic from "next/dynamic";
import Styles from "./index.module.css";
import Header from "@/sessions/header/Header";
import Products from "@/sessions/products/products";
import About from "@/sessions/About/about";
import Footer from "@/sessions/Footer/Footer";
import Clients from "@/sessions/ Satisfied/Satisfied";
import Home from "@/sessions/home/Home";
import Contacts from "@/sessions/Contacts/Contacts";

const Location = dynamic(() => import("@/sessions/Location/Location"), {
  ssr: false,
});

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
      <Footer />
    </div>
  );
}
