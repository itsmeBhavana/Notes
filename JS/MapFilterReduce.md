# Map
- To transform the entire array ~ to change the values of every array element
- const arr = [5,1,3,2,6];
- Double - [10,2,6,4,12];
- Triple - [15,3,9,6,18];
- const output = arr.map(double)
- function double(arr){
  return arr*2;
  }
  const binaryOutput = arr.map((x)=> x.toString(2));
  console.log(output);
  console.log(binaryOutput);
  
- const users = [
  {firstName: "Bhavana", lastName: "Matavalam", age: 26},
  {firstName: "Gowtham", lastName: "Kurapati", age: 28}
    ];

    const output=users.map(user=>user.firstName+ " "+user.lastName);
    console.log(output);
# Filter
- To filter the values from an array
- const filterOdd = arr.filter(x=>x%2!==0);
  console.log(filterOdd);

# Reduce
- Is used when you take all the elements of the array and come out of a single value from them.
- tranditionally:
- function findSum(arr) {
  let sum=0;
  for(let i=0;i < arr.length;i++){
    sum=sum+arr[i];
  }
  return sum;
}
console.log(findSum(arr));
- with reduce:
- const output = arr.reduce(function (acc, cur){
  acc=acc+cur;
  return acc;
  },0);
  console.log(output);
  ## Reduce to find max value
  - traditionally:
  - function maxValue(arr){
    let max=0;
    for(let i=0;i< arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;}
  - with reduce:
  - const output = arr.reduce(function(max, cur){
    if(cur>max){
        max=cur;
    }
    return max;
    },0);
    console.log(output(arr));
    ## Number of unique ages
    const ages=users.reduce(function(acc,cur){
    if(acc[cur.age]){
        acc[cur.age]=++acc[cur.age];
    }
    else {
        acc[cur.age]=1;
    }
    return acc;
    },{});
    console.log(ages); 