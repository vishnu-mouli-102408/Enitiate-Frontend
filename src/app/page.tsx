import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { cookies } from "next/headers";
import { Posts, getImagesData } from "@/lib/helper";
import NoUser from "@/components/NoUser";

export const fetchPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
      { cache: "force-cache" }
    );
    const data: Posts[] = await response.json();
    const imagesData = await getImagesData();
    const images = imagesData?.map((item) => item.urls);
    if (images) {
      const postsDataWithImages = data.map((post, index) => ({
        ...post,
        imageUrl: images[index],
      }));
      return postsDataWithImages;
    }
  } catch (error) {
    console.error("Error Fetching data", error);
  }
};

export default async function Home() {
  const posts = await fetchPosts();

  const handleOnBannerBtnClick = async () => {
    "use server";
    console.log("Hello Banner Button");
  };

  const cookieStore = cookies();
  const userUID = cookieStore.get("uid");

  if (!userUID?.value) {
    <NoUser />;
  }

  if (!posts) {
    return (
      <h1 className="flex flex-col justify-center items-center">
        No posts found
      </h1>
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
            return (
              <Card
                key={post.id}
                title={post.title}
                imageUrl={post.imageUrl?.small as string}
              />
            );
          })}
      </div>
    </main>
  );
}
