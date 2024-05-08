import Providing from "./Providing";
import FeaturedProduct from "./FeaturedProduct";
import Menu from "./Menu";

export default function Home() {
  return (
    <main className=" mx-auto">
        <Providing />
        <FeaturedProduct/>
        <Menu/>
    </main>
  );
}
