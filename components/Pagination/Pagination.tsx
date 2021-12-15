import { useRouter } from "next/router";
import { useMemo } from "react";
import PaginationLink from "./PaginationLink";

const Pagination = ({ totalResult }: { totalResult: string }) => {
  const router = useRouter();
  const currentPage =
    Number(router.query.start) !== null
      ? Number(router.query.start as string)
      : 0;

  const totalPageNumbers = Math.ceil(Number(totalResult) / 10);
  const pageNumbers = totalPageNumbers > 10 ? 10 : totalPageNumbers;

  const getPaginationNumbers = () => {
    const jsxArray = [];
    for (let i = 0; i < pageNumbers; i++) {
      jsxArray.push(
        <PaginationLink startIndex={i * 10} text={`${i + 1}`} key={i} />
      );
    }
    return jsxArray;
  };

  const Paginations = useMemo(() => getPaginationNumbers(), []);

  return (
    <section className="flex justify-center gap-4 py-20">
      {currentPage !== 0 && (
        <PaginationLink
          key={"prev"}
          text="Prev"
          startIndex={currentPage - 10}
        />
      )}
      {Paginations}
      {currentPage !== pageNumbers && (
        <PaginationLink
          key={"next"}
          text="Next"
          startIndex={currentPage + 10}
        />
      )}
    </section>
  );
};

export default Pagination;
