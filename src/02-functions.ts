import {Friend, Colleague } from './myTypes'
import { friends,colleagues } from './01-basics'
function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f: Friend[]): string[]  {
    let olderFriends: string[] = []
    f.forEach((friend)=>{olderFriends.push(older(friend))}) 
    return olderFriends
}

console.log(allOlder(friends))


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));


function addColleague(clCur: Colleague[],clName: string, clDepartment: string, clEmail: string){
  const highEx = highestExtension(clCur).contact.extension
  const clNew = {name: clName, department: clDepartment, contact: { email: clEmail, extension: (highEx + 1) }}
  clCur.push(clNew)
}


addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
