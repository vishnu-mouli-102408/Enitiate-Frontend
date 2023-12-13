import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  const handleOnBannerBtnClick = async () => {
    "use server";
    console.log("Hello Banner Button");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Banner
        buttonText="View All Posts"
        handleOnClick={handleOnBannerBtnClick}
        title={"Featured Posts"}
        desc={"Discover Various Posts"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
