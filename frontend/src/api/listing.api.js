const API_URI = "http://localhost:9000/api/listing/get-listing";

export async function getListing() {
  try {
    const response = await fetch(API_URI);

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to fetch listings");
    }

    return result.data;
  } catch (error) {
    console.log("API ERROR:", error.message);
    throw error;
  }
}
