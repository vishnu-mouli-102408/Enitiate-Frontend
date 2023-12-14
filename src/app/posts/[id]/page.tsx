import Image from "next/image";
import { findPostById } from "@/app/actions";
import Link from "next/link";
const PostDetails = async ({ params }: { params: { id: string } }) => {
  const postData = await findPostById(params.id);

  if (!postData) {
    return (
      <h1 className="flex flex-col justify-center items-center">
        No Data found
      </h1>
    );
  }

  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="text-xl justify-start mb-16 cursor-pointer">
        <Link href="/posts">⬅ Back to Posts</Link>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mb-8">
        <Image
          className="rounded-t-lg m-auto"
          src={postData.imageUrl?.small as string}
          alt="Images"
          width={400}
          height={400}
        />
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {postData.title}
          </h5>
          {/* <h1 className="text-gray-700">{params.id}</h1> */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {postData.body}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PostDetails;
