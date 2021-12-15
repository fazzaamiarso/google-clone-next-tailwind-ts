import type { NextPage } from "next";
import Head from "next/head";
import { ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import SearchForm from "../components/SearchForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Google Clone</title>
        <meta
          name="description"
          content="Clone of goole by Fazza Razaq Amiarso"
        />
      </Head>
      <header className="flex items-center justify-end p-4 space-x-4">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className="text-sm hover:underline">
              Gmail
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:underline">
              Images
            </a>
          </li>
        </ul>
        <ViewGridIcon className="aspect-square w-10  p-2 rounded-full cursor-pointer hover:bg-gray-100 text-gray-500" />
        <Avatar url="/Rengoku.jpeg" />
      </header>
      <SearchForm />
    </>
  );
};

export default Home;
