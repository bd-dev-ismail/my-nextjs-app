import Image from "next/image";
import Link from "next/link";


const ErrorPage = () => {
    return (
      <div>
        <Image
          src="/../public/assets/error.webp"
          alt=""
          width={1440}
          height={1000}
        />
        <Link href="/">
          <button className="btn btn-primary">Back To Home</button>
        </Link>
      </div>
    );
};

export default ErrorPage;