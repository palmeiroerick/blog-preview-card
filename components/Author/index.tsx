import Image from "next/image";

const Author = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src="/assets/image-avatar.webp" alt="" width={32} height={32} />
      <div className="font-extrabold">Greg Hooper</div>
    </div>
  );
};

export default Author;
