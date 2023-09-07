import Listing from "./components/Listing/Listing";

export default async function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Listing />
      </div>
    </>
  );
}
