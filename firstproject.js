var flakers = ["flourish" , "bag" , "shirt" , "cloth"];

    flakers[0] = "flourish";
    flakers[1] = "bag";
    flakers[2] = "shirt";
    flakers[3] = "cloth";

document.getElementById('lemonade').innerHTML =flakers[2] + " " + flakers[3];


function crowny (){

a = 12;

b =25;

c =19;
document.write(a+b*c);}

crowny();

const riveria = ["kernel" , "itolo" , "adebisi" , "johnson"];

const callallriveria = riveria.slice(1);

document.getElementById('paragraph').innerHTML = callallriveria;



const shark = [];

shark[0] = "crayfish";
shark[1] = "catfish";
shark[2] = "mudfish";
shark[3] = "mudskipper";

let position = shark.indexOf("catfish") +1;

document.getElementById('empty').innerHTML= position;


var macaroni ="yoruba";
    document.getElementById('empty_1').innerHTML=macaroni;


    const other = ["freshyo" , "mr viju" ,"alive juice" , "coke"];

    other.splice(2,3,"banana" , "orange");

    document.getElementById('other_1').innerHTML=other;


    const fruits_2 = ["grape" , "guava" ,"paw-paw" , "star-apple"];

    let position_1 = fruits_2.lastIndexOf("paw-paw") +1;

    document.getElementById('fruity').innerHTML="paw-paw is found in position" +" " +position_1;
    var cars = ["range-rover" , "jaguar" , "bentley"];

  let nameofcars = cars.includes("bentley");

  if(nameofcars !=""){
    alert(nameofcars);
  }
  else{
    alert("not found");
  }


  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.find(myfunction);
  function myfunction(value,index,array){
    return value < 25 ;
  }

  


  var people = ["gideon", "zendi", "ayo", "bayo"]

  let allpeople = people.sort();
  
  document.getElementById('people').innerHTML=allpeople;

  people.reverse();
  document.getElementById('super').innerHTML=allpeople;

  var months = ["jan", "feb" ,"march" ,"april" ,"may"];

  var allmonths = months.toSorted();

  document.getElementById('calendar').innerHTML=allmonths;



var phones = ["redmi" , "iphone", "tecno", "infinix"];
phones.includes("redmi");
document.getElementById('gadgets').innerHTML=phones;



  