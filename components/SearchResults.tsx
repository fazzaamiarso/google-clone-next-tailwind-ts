import { ApiResponse } from "../types/ApiResponse";
import Pagination from "./Pagination/Pagination";

interface Props {
  result: ApiResponse;
}

const SearchResults = ({ result }: Props) => {
  return (
    <main className="pt-2 pl-8 w-11/12 max-w-3xl sm:pl-36 md:pl-48 overflow-x-hidden">
      <p className="pb-4 text-gray-500 text-sm">{`
                About ${result.searchInformation.formattedTotalResults} results (${result.searchInformation.formattedSearchTime} seconds)
            `}</p>
      <section className="flex flex-col gap-6 ">
        {result.items?.map((siteData) => {
          return (
            <div className="w-full" key={siteData.link}>
              <div className="group truncate">
                <p className="text-sm truncate">{siteData.formattedUrl}</p>
                <a
                  href={siteData.link}
                  className="text-xl text-blue-700  group-hover:underline "
                >
                  {siteData.title}
                </a>
              </div>
              <p className="text-gray-700">{siteData.snippet}</p>
            </div>
          );
        })}
      </section>
      <Pagination totalResult={result.searchInformation.totalResults} />
    </main>
  );
};

export default SearchResults;
