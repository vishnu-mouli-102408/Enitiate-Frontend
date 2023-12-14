import Card from "@/components/Card";
import NoUser from "@/components/NoUser";
import { Posts, getImagesData } from "@/lib/helper";
import { cookies } from "next/headers";
import { fetchPostsDataWithImages } from "../actions";

// const fetchAllPosts = async () => {
//   const postsData: Posts[] = await fetchPostsData(100);
// const imagesData = await getImagesData();
// const images = imagesData?.map((item) => item.urls);
// const newData = Array.from({ length: 4 }, () => images).flat();
// const postsDataWithImages = postsData.map((post, index) => ({
//   ...post,
//   imageUrl: newData[index],
// }));
// return postsDataWithImages;
// };

const Posts = async () => {
  const cookieStore = cookies();
  const userUID = cookieStore.get("uid");
  const postsData = await fetchPostsDataWithImages(100);
  // console.log("POSTSDATA", postsData);

  if (!userUID?.value) {
    <NoUser />;
  }

  if (!postsData) {
    return (
      <h1 className="flex flex-col justify-center items-center">
        No posts found
      </h1>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {postsData.length > 0 &&
          postsData.map((post: Posts) => {
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
};

export default Posts;
