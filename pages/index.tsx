import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Form from "@/components/Form";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import PostFeed from "@/components/posts/PostFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header label="Home" />
    <Form placeholder="What's happening now" />
    <PostFeed />

    </>
  );
}
