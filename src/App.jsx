import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import Card from "./components/Card";
function App() {
  return (
    <>
    <nav className="bg-black text-white flex items-center justify-between p-2">
    <div className="items-center gap-8"> Prime Videos</div>
    <div className="items-center w-full">
      <ul className="flex items-center px-6 ">
        <li className="hover:bg-white hover:text-black rounded p-3">Home</li>
        <li className="hover:bg-white hover:text-black rounded p-3">Movies</li>
        <li className="hover:bg-white hover:text-black rounded p-3">Tv Shows</li>
        <li className="hover:bg-white hover:text-black rounded p-3">Live Tv</li>
        <li className="hover:bg-white hover:text-black rounded p-3">Subscription</li>
      </ul>
    </div>
    <div className="flex items-center justify-end gap-4">
      <CiSearch className="text-2xl" />
      <button className="flex gap-2 items-center">EN <FaChevronDown /></button>
      <TbGridDots/>
      <button className="rounded bg-blue-700 p-2">Join Prime</button>
    </div>
    </nav>
    <Card/>
    <section className="bg-[url(./src/assets/images/MLP.jpg)] bg-cover bg-no-repeat h-dvh">
      <div className="text-white bg-linear-to-r from-black to-transparent w-1/2 h-dvh pt-25 pl-15 ">
        <h1 className="text-5xl font-bold">Welcome to Prime Video</h1>
        <p className="font-bold text-xl w-[80%] my-9">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
        <button className=" bg-white rounded-xl text-black text-xl px-4 py-3 w-fit">Sign in to join prime</button>
      </div>
      <div className="">This div is changed in shayak</div>
    </section>
    </>
  )
}

export default App