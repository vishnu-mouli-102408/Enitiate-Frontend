import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Link from "next/link";
import { cookies } from "next/headers";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const fetchPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
      { cache: "force-cache" }
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error Fetching data", error);
  }
};

export default async function Home() {
  const posts: Posts[] = await fetchPosts();

  const handleOnBannerBtnClick = async () => {
    "use server";
    console.log("Hello Banner Button");
  };

  const cookieStore = cookies();
  const userUID = cookieStore.get("uid");

  if (!userUID?.value) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-2xl font-bold mb-8">
          User Not Found. Please Login to Continue
        </h1>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Link href="/login">Login here</Link>
        </button>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Banner
        buttonText="View All Posts"
        handleOnClick={handleOnBannerBtnClick}
        title={"Featured Posts"}
        desc={"Discover Various Posts"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.length > 0 &&
          posts.map((post: Posts) => {
            return <Card key={post.id} title={post.title} />;
          })}
      </div>
    </main>
  );
}
