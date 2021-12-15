import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import TabCard from "./TabCard";
import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchForm = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === "") return;
    setSearchValue("");
    router.push(`/search?term=${searchValue}&start=0`);
  };

  return (
    <main className="mt-20 max-w-lg mx-auto">
      <form
        className="flex flex-col items-center space-y-4 "
        onSubmit={searchHandler}
      >
        <div className="grow-0">
          <Image
            src={
              "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }
            width={300}
            height={100}
          />
        </div>
        <div className="flex items-center py-2 px-5 w-full  shadow-lg ring-gray-200 ring-1 rounded-3xl">
          <SearchIcon className="text-gray-600 w-5 mr-3" />
          <input
            type="text"
            className=" w-full outline-none placeholder-gray-400"
            placeholder="Search Google or type a URL"
            value={searchValue}
            onChange={changeHandler}
          />
          <MicrophoneIcon className="text-gray-600 w-5 ml-auto cursor-pointer" />
        </div>
      </form>
      <section className="mt-8 w-full grid grid-cols-2 gap-2">
        <TabCard text=" Shortcut" />
        <TabCard text="Shortcut" />
        <TabCard text="Shortcut" />
        <TabCard text="Shortcut" />
      </section>
    </main>
  );
};

export default SearchForm;
