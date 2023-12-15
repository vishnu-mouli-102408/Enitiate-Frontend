import Image from "next/image";
import { findPostById } from "@/app/actions";
import Link from "next/link";
import Toast from "@/components/Toast";
const PostDetails = async ({ params }: { params: { id: string } }) => {
  const postData = await findPostById(params.id);

  if (!postData) {
    return (
      <>
        <h1 className="flex justify-center items-center h-screen flex-col text-2xl font-bold">
          No Data found
        </h1>
        <Toast
          status={false}
          message="No data found. Please try again later."
        />
      </>
    );
  }

  return (
    <main className="flex min-h-screen flex-col p-12 bg-cover bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30456.jpg?size=626&ext=jpg&ga=GA1.1.1266420118.1702626864&semt=ais')]">
      <h1 className="text-xl justify-start mb-16 cursor-pointer">
        <Link href="/posts">⬅ Back to Posts</Link>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mb-8">
        <Image
          className="rounded-lg m-auto"
          src={postData.imageUrl?.small as string}
          alt="Images"
          width={400}
          height={400}
        />
        <div className="max-w-md p-6 bg-slate-300 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto">
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
