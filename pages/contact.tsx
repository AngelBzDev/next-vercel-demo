import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <h1 className="title">
        This is Contact <Link href="/">La Tierra</Link>
      </h1>
    </MainLayout>
  );
};

export default Contact;