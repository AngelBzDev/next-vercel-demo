import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">
        This is Home <Link href="/about">El Cielo</Link>
      </h1>
    </MainLayout>
  );
}
