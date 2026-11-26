import { useEffect, useState } from "react";

export const Listing = () => {
  const [listing, setListing] = useState([]);

  async function read() {
    try {
      const response = await fetch(
        "http://localhost:9000/api/listing/get-listing",
      );

      const data = await response.json();

      setListing(data.getCard);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    read();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Listings</h2>
      <div className=" container mx-auto grid  grid-cols-6 gap-1">
        {listing.map((list) => (
          <div key={list._id} className=" p-3 ">
            <img
              src={list.image?.url}
              className="w-full h-48 object-cover rounded-2xl "
            />
            <h1>{list.title}</h1>

            <p>₹{list.price} for 2 night</p>
          </div>
        ))}
      </div>
    </div>
  );
};
