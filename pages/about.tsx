import Link from "next/link";
import DarkLayout from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <h1 className="title">
        This is About <Link href="/">El Infierno</Link>
      </h1>
    </>
  );
}

About.getLayout = function getLayout(page:JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}