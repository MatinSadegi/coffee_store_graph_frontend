import Providing from "./Providing";
import FeaturedProduct from "./FeaturedProduct";
import Menu from "./Menu";
import Offer from "./Offer";
import Reservation from "./Reservation";
import LatestNews from "./latestNews/LatestNews";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className=" mx-auto">
      <Header />
      <Providing />
      <FeaturedProduct />
      <Menu />
      <Offer />
      <LatestNews />
    </main>
  );
}
