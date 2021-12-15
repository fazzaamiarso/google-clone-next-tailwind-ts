import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { getSearchLink } from "../utils/linkHelpers";

const SearchPageForm = () => {
  const router = useRouter();
  const searchedValue = router.query.term;
  const [searchValue, setSearchValue] = useState(searchedValue as string);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const clearInputHandler = () => {
    setSearchValue("");
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === "") return;
    router.push(getSearchLink(searchValue));
  };
  const backToHome = () => {
    router.push("/");
  };

  return (
    <form
      className="flex items-center space-x-4 w-full max-w-3xl md:space-x-8"
      onSubmit={submitHandler}
    >
      <div className="cursor-pointer" onClick={backToHome}>
        <Image
          src={
            "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          width={120}
          height={40}
        />
      </div>
      <div className="flex grow items-center py-2 px-5 w-full shadow-md ring-gray-200 ring-1 rounded-3xl">
        <input
          type="text"
          className=" w-full outline-none placeholder-gray-400"
          placeholder="Search Google or type a URL"
          value={searchValue}
          onChange={changeHandler}
        />
        <div className="flex items-center space-x-4">
          {searchValue !== "" && (
            <>
              <XIcon
                className="text-gray-600 w-5 cursor-pointer"
                onClick={clearInputHandler}
              />
              <div className="h-6 w-[1px] bg-gray-300" />
            </>
          )}
          <MicrophoneIcon className="hidden text-blue-400 w-5  sm:block cursor-pointer" />
          <button className="m-0" type="submit">
            <SearchIcon className="text-blue-400 w-5 " />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchPageForm;
