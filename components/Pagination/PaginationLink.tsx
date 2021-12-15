import Link from "next/link";
import { useRouter } from "next/router";
import { getSearchLink } from "../../utils/linkHelpers";

interface Props {
  startIndex: number;
  text: string;
}

const PaginationLink = ({ startIndex, text }: Props) => {
  const router = useRouter();
  const term = router.query.term as string;
  const start = router.query.start as string;
  const isActivePage = Number(start) === startIndex;

  const SEARCH_URL = getSearchLink(term, startIndex);

  return (
    <Link href={SEARCH_URL} passHref>
      <a
        className={` ${
          isActivePage
            ? "text-black pointer-events-none"
            : "text-blue-500 hover:underline"
        } `}
      >
        {text}
      </a>
    </Link>
  );
};

export default PaginationLink;
