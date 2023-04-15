import Navbar from "./Components/Navbar";
import Center from "./Components/Center";
import Data from "./Components/Data";
import Nav2 from "./Components/Nav2";
export default function App() {
  const centerData = Data.map((items) => {
    return <Center key={items.id} items={items} />;
  });
  return (
    <>
      <Navbar />
      <section>{centerData}</section>
      <Nav2 />
    </>
  );
}
