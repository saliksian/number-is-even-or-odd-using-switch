let number = 12;

switch (true) {
    case (number==0):
        console.log(number+" zero"); 
        break;
    case (number<0):
        console.log("Enter a positive number"); 
        break;
    case (number%2==0):
        console.log(number+" is even");
        
        break;
    case (number%2!==0):
        console.log(number+" is odd"); 
        break;
   
}