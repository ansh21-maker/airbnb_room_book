import { useEffect, useState } from "react";
import { getListing } from "../../api/listing.api";

function Category() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      try {
        const data = await getListing();
        setListings(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Airbnb Listings</h1>

      {listings.map((item) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h3>₹{item.price}</h3>
          <p>{item.location}</p>
          <p>Guests: {item.guests}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;
