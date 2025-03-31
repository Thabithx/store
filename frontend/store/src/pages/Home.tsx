import Banner from "../components/Banner"
import Featured from "../components/Featured"
import Title from "../components/Title"

const Home = () => {

   return (
    <>
      <Banner/>
      <div className="px-8 sm:px-16 md:px-32 lg:px-64 py-10"><Title text1={"FEATURED"} text2={"PRODUCTS."}/></div>
      <Featured/>
    </>
  )
}

export default Home