import clientPromise from "@/app/lib/mongodb";


export async function POST(request) {
  let body = await request.json();
  const client = await clientPromise
  const db = await client.db('bittree')
  const collection = await db.collection('links')

  let doc = await collection.findOne({handle: body.handle})

  if(doc){
    return Response.json({success:false, message: 'Oops! This handle is already taken. Try different handle.' })
  }

  const result = await collection.insertOne(body);

  return Response.json({success:true, message: 'Yeah! Bittree Created successfully. Enjoy!' })
}