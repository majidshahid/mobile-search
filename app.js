var mobile={
    iphone:{
        iphone6:{
            name:"iphone6",
            screen:"4.70 inch",
            camera:"8 MPS",
            Price:46899,
            img:'img/iphone6.png',
        },
        iphone7:{
            name:"iphone7",
            screen:"5.8 inch",
            camera:'12mps',
            price:73899,
            img:'img/iphone7.jpg'
        },
        iphone8:{
            name:"iphone8",
            screen:"4.7 inch",
            camera:'12mps',
            price:108610,
            img:'img/iphone8.jpg'
        },
        iphonex:{
            name:"iphoneX",
            screen:"5.8 inch",
            camera:'12mps',
            price:144999,
            img:'img/iphoneX.jpg'
        },
        iphone11:{
            name:"iphone11",
            screen:"6.6 inch",
            camera:'12mps',
            price:156300,
            img:'img/iphone11.jpg'
        },
        iphone12:{
            name:"iphone 12",
            screen:"6.1 inch",
            camera:'12mps',
            price:157400,
            img:'img/iphone12.jpg'
        },
    },
    samsung:{
 s3:{
    name:"s3",
    screen:"4.8 inch",
    camera:'8mps',
    price:34999,
    img:'img/s3.jpg'
 },
 s4:{
    name:"s4",
    screen:"5 inch",
    camera:'13mps',
    price:35999,
    img:'img/s4.jpg'
 },
 s5:{
    name:"s5",
    screen:"5.1 inch",
    camera:'16 mps',
    price:36999,
    img:'img/s5.jpg'
 },
 s6:{
    name:"s6",
    screen:"5.1 inch",
    camera:'16 mps',
    price:42999,
    img:'img/s6.jpg'
 },
 s7:{
    name:"s7",
    screen:"5.1 inch",
    camera:'12 mps',
    price:43999,
    img:'img/s7.jpg'
 },
 s8:{
    name:"s8",
    screen:"5.8 inch",
    camera:'12 mps',
    price:65499,
    img:'img/s8.jpg'
 },
 s9:{
    name:"s9",
    screen:"5.8 inch",
    camera:'16 mps',
    price:91000,
    img:'img/s9.jpg'
 },
 s10:{
    name:"s10",
    screen:"6.1 inch",
    camera:'12 mps',
    price:139999,
    img:'img/s10.jpg'
 },
 s20:{
    name:"s20",
    screen:"6.2 inch",
    camera:'64 mps',
    price:170999,
    img:'img/s20.jpg'
 }
    }

}
// console.log(mobile.iphone.iphone12.img)

// var img=document.getElementById("one");
// img.src=mobile.iphone.iphone12.img

function foo(){
    var a = document.getElementById('brand').value;
   var  brand =a.toLowerCase();
var b= document.getElementById('name').value;
var name=b.toLowerCase();

var img=document.getElementById('img') ;
img.src=mobile[brand][name].img;
// document.getElementById('li').innerHTML= "Name : "  +mobile[brand][name].name;
// document.getElementById('li2').innerHTML= "Screen : "  +mobile[brand][name].screen;
// document.getElementById('li3').innerHTML= "Camera : "  +mobile[brand][name].camera;
// document.getElementById('li4').innerHTML= "Price : "  +mobile[brand][name].price;
// console.log(mobile[brand][name].img)

var ul=document.getElementById('ul');
var li = document.createElement("li");
var litext = document.createTextNode("Name : "+mobile[brand][name].name);
li.appendChild(litext)
ul.appendChild(li)
var li2 = document.createElement("li");
var litext = document.createTextNode("Screen : "  +mobile[brand][name].screen);
li2.appendChild(litext)
ul.appendChild(li2)
var li3 = document.createElement("li");
var litext = document.createTextNode( "Camera : "  +mobile[brand][name].camera);
li3.appendChild(litext)
ul.appendChild(li3)
var li4 = document.createElement("li");
var litext = document.createTextNode("Price : "  +mobile[brand][name].price);
li4.appendChild(litext)
ul.appendChild(li4)
}