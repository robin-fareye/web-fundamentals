// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);

  let {limit,skip,total,users}=data;

  // let age=users.reduce((a,b)=>{
  //   a+=b.age;
  //   return a;
  // },1000)

  // console.log(age);

  // let age=users.reduce((a,b)=>{
  //   a+=b.age;
  //   return a;
  // },1000)

  //console.log(age/users.length);

  let obj=users?.map((user)=>({name:user.firstName.concat(user.lastName),age:user.age,w:user?.weight}))
  console.log(obj);

  let filterObject=obj.filter((user)=>{
    return user?.age<=25;
  })
  console.log(filterObject);

  // let weight=filterObject.reduce((a,b)=>{
  //   a.w+=b.w;
  //   a.index++;
  //   return a;
  // },{a:0,index:0})

  // console.log(weight.a);

}


fetchDataFromServer();
