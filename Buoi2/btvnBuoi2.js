console.log("Bài tập về nhà buổi 2\n");

function testNum(a){
    let result;
    if(a>0){
        result=`Số ${a} là số dương`
    } else{
        result=`Số ${a} là số dương`
    }
    return result
}
console.log(testNum(-3))
console.log(testNum(8)+"\n")

function getFee(isMember){
    return isMember ? '2.00' : '10.00'
}

console.log("Phí thành viên là: ",getFee(false));

console.log("Phí thành viên là: ",getFee(true));

console.log("Phí thành viên là: "+getFee(null)+"\n");

const expr = 'Cam';
switch (expr) {
    case 'Tao':
        console.log('Oranges are $0.59 a pound. '+"\n");
        break;
    case 'Cam':
    case 'Buoi':
        console.log('Cam và bưởi giá 30,000/kg.'+"\n");
        break;
    default:
        console.log(`Xin lỗi, Chúng tôi không có giá của ${expr}`+"\n")
}

for(let step = 0;step<5;step++){
    console.log('Đi bộ mỗi bước về phía đông, bước thứ ',step+1);
}

let condition = 1;
do{
    console.log("Làm gì đó ở đây");
    condition++;
}while(condition<5);


const dumoProps = (obj,objName) =>{
    let result = "";
    for(const i in obj){
        result += `${objName}.${i} = ${obj[i]}\n`
    }
    console.log(result)
}

const myCar = {make:"Fook",model:"Mustang"}
dumoProps(myCar,"car")



const arr = [4,2,3,5,7,6]
console.log("Độ dài của mảng là: ",arr.length);

const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);

console.log("Mảng array3: ",array3);

const words = ['spray','limit','elite','exuberant','destruction','present'];

const result = words.filter((word) => word.length>6);

console.log(result);
const array = [5,12,8,130,44]

const found = array.find((element) => element>10);
const found2 = array.find((element) => element>100000000);

console.log(found);

console.log(found2);

const map = array.map((x) => x*2)

console.log(map);

map.forEach((element) => console.log(element));



const userList = null 
userList?.map?.(user => console.log("Làm gì đó ở đây"));


const obj1 = {a:'Sometring',b: 42,c: false}

for(const [key,value] of Object.entries(obj1)){
    console.log(`${key}: ${value}`);
}

console.log(Object.keys(obj1));

console.log(Object.values(obj1))