import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  startIndex: number;
  text: string;
}

const PaginationLink = ({ startIndex, text }: Props) => {
  const router = useRouter();
  const term = router.query.term as string;
  const start = router.query.start as string;
  const isActivePage = Number(start) === startIndex;

  const BASE_URL = `/search?term=${term}&start=${startIndex}`;

  return (
    <Link href={BASE_URL} passHref>
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
