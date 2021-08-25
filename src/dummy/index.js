import data from "./data.json";

function asyncWait(wait) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), wait);
  });
}




async function getItems() {
  await asyncWait(500);
  return Array.from(data.blogs);
}
let i =-1;
async function getPoll() {
  await asyncWait(500);
if (i<=14) {
  i++
}else{
 i=15;
}
  console.log(i)
  return data.poll[i];
}
export default {
 
  getItems,
  getPoll

};
