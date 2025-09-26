import { colleagues, friends } from './01-basics'
import {Friend, Colleague, ColleagueHistory } from './myTypes'

//function older(f: Friend) : string {
//     f.age += 1
//     return `${f.name} is now ${f.age}` 
//}

function allOlder(friends: Friend[]) : string[] {
   return friends.map(friends => (`${friends.name} is now ${friends.age + 1}`).toString())
}

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1]
}

function addColleague(cs: Colleague[], name: string, department: string, email: string): Colleague {
    const highestExtension: number = cs.length > 0
    ? cs.reduce((max, c) => Math.max(max, c.contact.extension), cs[0].contact.extension)
    : 0;

    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highestExtension + 1,
        }
       
    }

    cs.push(newColleague)

    return newColleague
}

//console.log(older(friends[0]))
//console.log(allOlder(friends))
console.log(highestExtension(colleagues.current))
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

