import { useGlobalContext } from "../context";
import Logo from "./Logo";
import Movies from "./Movies";

const Home = () => {
  const { setInput, input } = useGlobalContext();
  return (
    <>
      <Logo />
      <form
        className="m-auto mt-12 h-12 w-9/12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" w-96 font-sans p-1.5 mt-3 mb-2 border text-lg "
        ></input>
      </form>
      <Movies />
    </>
  );
};

export default Home;
