import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./App.css";
import FooterSection from "./components/FooterSection";
<<<<<<< HEAD
import FloatingButtons from "./components/FloatingButtons";

=======
>>>>>>> ef290d731f4f369101a3ec91cb596a7c8a3278a1


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {loading ? null : <LandingPage />}
      <FooterSection />
<<<<<<< HEAD
      <FloatingButtons />
=======
>>>>>>> ef290d731f4f369101a3ec91cb596a7c8a3278a1
    </>
  );
}
export default App;