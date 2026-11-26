//get request
async function getListing() {

  const res=await fetch("http://localhost:9000/api/listing/get-listing");

  if(!res.ok)throw new Error("Request failed");
  return res.json();
  
  
}