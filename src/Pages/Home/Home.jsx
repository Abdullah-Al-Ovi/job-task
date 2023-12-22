import Banner from "./Banner/Banner"
import Benifits from "./Benifits/Benifits"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"


export const Home = () => {
  return (
    <div className="space-y-7">
      <Navbar></Navbar>
      <Banner></Banner>
      <Benifits></Benifits>
      <Footer></Footer>

    </div>
  )
}
