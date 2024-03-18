// {46}

let laptop : {
   
    model :  string
    make  :  string
    year  :  number
}={
    model : "Dell",
    make  : "XPS",
    year  : 2021,
};
 console.log ("The detail of a laptop");
 console.log (laptop);

 // {47}  

 let laptops = [{
    model: "Dell", make : "XPS", year : 2021},
{model : "Macbook", make : "Apple", year: 2021

},
];
let [laptop1 , laptop2] = laptops
console.log (laptops);


// {48}


let priceset1 = [ 1200, 1500, 1100];
let priceset2 = [1000, 1300 ,1600];
let combinedprices = [...priceset1, ...priceset2].sort ((a,b) => a-b);
console.log (combinedprices);