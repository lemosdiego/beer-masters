import Home from "@/sessions/home/Home";
import Styles from "./index.module.css";
import Header from "@/sessions/header/Header";
import About from "@/sessions/about/about";
import Products from "@/sessions/products/products";

export default function Index() {
  return (
    <div className={Styles.container}>
      <Header />
      <Home />
      <About />
      <Products />
    </div>
  );
}
