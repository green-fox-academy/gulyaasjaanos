const zzz : {[key: string ]: any}[] = 
[
    {last: "B", first: "e"},
    {last: "B", first: "b"},
    {last: "A", first: "z"},
    {last: "B", first: "c"},
    {last: "C", first: "a"},
    {last: "D", first: "a"},
    {last: "E", first: "a"},
    {last: "B", first: "d"},
    {last: "B", first: "f"},
    {last: "B", first: "g"}
]

console.log(
    zzz.sort ( (a,b) => a.first.localeCompare(b.first) )
    .sort ( (a,b) => a.last.localeCompare(b.last) )
);