import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Manufacturing from "../components/Manufacturing";
import Quality from "../components/Quality";
import Contact from "./Contact";

function Home() {
return (
<> <Hero />  <About /> <Products /> <Industries /> <WhyChooseUs /> <Manufacturing /> <Quality /> <Contact />
</>
);
}

export default Home;
