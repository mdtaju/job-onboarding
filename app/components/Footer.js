import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-white">
        <div className="w-full max-w-[1500px] mx-auto px-5 flex items-center justify-center flex-col text-center py-5 bg-white border-t-2 border-gray-200 mt-20">
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="h-[32px]" />
          </Link>
          <div className="text-not-black mb-2.5 mt-3">© 2022 Job Sparkle</div>
          <div>Some information if needed cause this is important</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
