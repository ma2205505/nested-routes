import React from "react";
import { BrowserRouter as Router, Routes, Route, Link,} from 
"react-router-dom";
import  Home  from "./Home";
import  Contact  from "./Contact";
import  About  from "./About";
import  Services  from "./Services";
import  NotFound  from "./NotFound";
import  Nested  from "./Nested";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Link className="link1" to="/" element="Home">Home</Link>
        <Link className="link1" to="Contact" element="Contact">Contact</Link>
        <Link className="link1" to="About" element="About">About</Link>
        <Link className="link1" to="Services" element="Services">Services</Link>
        <Link className="link1" to="Nested" element="Nested">Nested</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Contact" element={<Contact />}/>
        <Route path="About" element={<About />}/>
        <Route path="Services" element={<Services />}/>
        <Route path="Nested" element={<Nested />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

