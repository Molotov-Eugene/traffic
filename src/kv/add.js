import kv from './kv';
import db from './db';

export default async function handler() {
  const gg = await kv();
 
  console.log(JSON.stringify(db.objects))
  // console.log(JSON.stringify(db.objects))
  // console.log(JSON.stringify(db.images))
  console.log(JSON.stringify(db.cameras))
}

