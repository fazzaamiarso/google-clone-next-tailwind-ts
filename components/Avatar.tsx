const Avatar = ({ url }: { url: string }) => {
  return (
    <img
      src={url}
      loading="lazy"
      className="object-cover w-10 rounded-full aspect-square cursor-pointer  hover:ring-4 hover:ring-gray-200"
    />
  );
};

export default Avatar;
