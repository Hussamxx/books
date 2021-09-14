_____________
const books =[['1','Start with why','Simon Sinek',80.0,13],
['2','But how do it know','J. Clark Scott',59.9,22],
['3','Clean Code','Robert Cecil Martin',50.0,5],
['4','Zero to One','Peter Thiel',45.0,12],
['5','You do not know JS','Kyle Simpson',39.9,9],
]
console.log("Add book id=6");
books.push(['6','ABCD','Hussam','33.9','8']); //الكتب إضافة
console.log(books);
console.log("Rename Book ABCD To Mylife");
books[5][1]='myLife'; //تعديله
console.log(books);
console.log("Delete book id=1");
حذف الكتاب// ;()shift.books
console.log(books);

function search(id,nameBook,author)
{
for(let i = 0; i<books.length; i++)
{
for(let j=0 ; j<books.length ; j++)
{
if (books[i][j]== id || books[i][j]== nameBook || books[i][j]==
author )
{
console.log(books[i]);
break;

}
}
}
}
console.log("search book by id or name book or auther");
search('2')
function Pay(nameBook,Quantity,Balance)
{
for(let i = 0; i<books.length; i++)
{
for(let j=0 ; j<books.length ; j++)
{
if(books[i][j]==nameBook && books[i][4]>=Quantity &&
books[i][3]<=Balance)
{
books[i][4]= books[i][4]-Quantity
console.log(`Name of book:${nameBook}`);
console.log(`Quantity of Book:${Quantity}`);
console.log(`Price of book:${books[i][3]*Quantity}`);
console.log(`Balane:${Balance}`);
}
}
}
}
console.log("print pill");
Pay('myLife',2,100)
console.log(books);