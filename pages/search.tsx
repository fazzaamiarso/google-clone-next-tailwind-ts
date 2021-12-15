import { ViewGridIcon } from "@heroicons/react/solid";
import { CogIcon } from "@heroicons/react/outline";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Avatar from "../components/Avatar";
import SearchPageForm from "../components/SearchPageForm";
import OptionBar from "../components/SearchOptions/OptionBar";
import { ApiResponse } from "../types/ApiResponse";
import MockResponse from "../MockResponse.json";
import SearchResults from "../components/SearchResults";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";

const Search: NextPage = ({
  searchResults,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isScrollPassHeight = scrollPosition > 200;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Search page</title>
        <meta
          name="description"
          content="Clone of goole by Fazza Razaq Amiarso"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={`sticky top-0 bg-white flex items-center p-4 md:px-10 md:py-6 ${
          isScrollPassHeight ? "shadow-md" : ""
        } `}
      >
        <SearchPageForm />
        <section className="hidden ml-auto space-x-4 lg:flex">
          <CogIcon className="aspect-square w-10 text-gray-500  p-2 rounded-full cursor-pointer hover:bg-gray-200" />
          <ViewGridIcon className="aspect-square text-gray-500 w-10  p-2 rounded-full cursor-pointer hover:bg-gray-200" />
          <Avatar url="/rengoku.jpeg" />
        </section>
      </header>
      <nav className="w-max mx-auto md:mx-0 md:pl-48">
        <OptionBar />
      </nav>
      <div className="w-full h-[1px] bg-gray-300" />
      <SearchResults result={searchResults} />
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const searchTerm = context.query.term;
  const startIndex =
    context.query.start !== null ? Number(context.query.start as string) : 0;

  const query = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`
  );
  const results: ApiResponse = await query.json();

  return {
    props: {
      searchResults: results as ApiResponse,
    },
  };
};
