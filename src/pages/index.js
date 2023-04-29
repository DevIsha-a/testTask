import Bodywrapper from "../../components/Bodywrapper";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";




export default function Home() {
  return (
   <div className="bg-slate-100">
   
    <Navbar />
    <ContactUs />
    <Footer />
   </div>
  )
}
