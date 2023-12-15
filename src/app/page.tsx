import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { cookies } from "next/headers";
import { Posts, getImagesData } from "@/lib/helper";
import { fetchPostsDataWithImages } from "./actions";
import Toast from "@/components/Toast";
import Landing from "@/components/Landing";

// const fetchPosts = async () => {
//   try {
//     const data: Posts[] = await fetchPostsData(10);
//     const imagesData = await getImagesData();
//     const images = imagesData?.map((item) => item.urls);
//     if (images) {
//       const postsDataWithImages = data.map((post, index) => ({
//         ...post,
//         imageUrl: images[index],
//       }));
//       return postsDataWithImages;
//     }
//   } catch (error) {
//     console.error("Error Fetching data", error);
//   }
// };

export default async function Home() {
  const posts = await fetchPostsDataWithImages(12);
  // console.log("POSTS", posts);

  const cookieStore = cookies();
  const userUID = cookieStore.get("uid");

  if (!userUID?.value) {
    return (
      <>
        <Landing />
      </>
    );
  }

  if (!posts) {
    return (
      <>
        <h1 className="flex flex-col justify-center items-center">
          No posts found
        </h1>
        <Toast
          status={false}
          message="No data found. Please try again later."
        />
      </>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-cover bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30456.jpg?size=626&ext=jpg&ga=GA1.1.1266420118.1702626864&semt=ais')]">
      <Banner
        buttonText="View All Posts"
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
                hrefRoute={`/posts/${post.id.toString()}`}
              />
            );
          })}
      </div>
    </main>
  );
}
