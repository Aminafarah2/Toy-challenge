// calculate grade //
function calculategrade(marks){
    let grade;
    if (marks >=79 && marks<=100) {
        return 'A';
    //    any marks above 79 will output "A''//
    } else if (marks >=60 && marks <= 79) {
        return 'B';
    //  Marks above 60 to 79 will output "B"
    } else if (marks >=49 && marks <= 59) {
        return 'C';
    //   Marks above 49 to 59 will output "c"
    } else if (marks >=40 && marks <= 49) {
        return 'D';
     //Marks above 40 to 49 will output "D"
    } else {
        return 'E';
        // Marks below 40 will ouput "E"
    }
}
console.log(calculategrade(43))
