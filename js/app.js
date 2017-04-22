/*
    Name: Abdul Moiz
    Batch: 4.1 (Bright)
    Roll No.: 5093

    MarkSheet Assignment Using DOM
*/

var st_name = prompt("Enter your Name");
var st_roll_number = prompt("Enter your Roll Number");
var st_age = prompt("Enter your Age");
var st_inst = prompt("Enter your Institute Name");

var marks_html = parseInt(prompt("Enter your marks in HTML5 -- Out of 100"));
var marks_css = parseInt(prompt("Enter your marks in CSS -- Out of 100"));
var marks_js = parseInt(prompt("Enter your marks in JavaScript -- Out of 100"));
var marks_ang_js = parseInt(prompt("Enter your marks in Angular JS -- Out of 100"));
var marks_react_js = parseInt(prompt("Enter your marks in React JS -- Out of 100"));

var total_marks = marks_html + marks_js + marks_css + marks_ang_js + marks_react_js;;
var perc = (total_marks*100)/500;
var remarks;

var grade;

if (perc > 100)
{
    alert("Oops! Some thing went wrong");
}

else if(perc >= 80 && perc <=100)
{
    grade = "A+";
}

else if(perc >= 70 && perc < 80)
{
    grade = "A";
}

else if(perc >= 60 && perc < 70)
{
    grade = "B";
}

else if(perc >= 50 && perc < 60)
{
    grade = "C";
}

else if(perc >= 0 && perc < 50)
{
    grade = "Bad Luck! You are Fail.";
}

else
{
    alert("Oops! Some thing went wrong");
}

if (grade == "A+")
{
    remarks = "Excellent";   
}

else if (grade == "A")
{
    remarks = "Very Good";   
}

else if (grade == "B")
{
    remarks = "Good";   
}

else if (grade == "C")
{
    remarks = "Need More Improvement";   
}

else
{
    remarks = "Poor";   
}

var student_name = document.getElementById('name');
student_name.innerHTML = st_name;

var student_roll_number = document.getElementById('roll_no');
student_roll_number.innerHTML = st_roll_number;

var student_age = document.getElementById('age');
student_age.innerHTML = st_age;

var student_inst = document.getElementById('institute_name');
student_inst.innerHTML = st_inst;

var student_marks_1 = document.getElementById('marks_in_html');
student_marks_1.innerHTML = marks_html;

var student_marks_2 = document.getElementById('marks_in_css');
student_marks_2.innerHTML = marks_css;

var student_marks_3 = document.getElementById('marks_in_js');
student_marks_3.innerHTML = marks_js;

var student_marks_4 = document.getElementById('marks_in_angular');
student_marks_4.innerHTML = marks_ang_js;

var student_marks_5 = document.getElementById('marks_in_react');
student_marks_5.innerHTML = marks_react_js;

var t_marks = document.getElementById('total_marks_sheet');
t_marks.innerHTML = total_marks;

var st_grade = document.getElementById('grade');
st_grade.innerHTML = grade;

var st_remarks = document.getElementById('remarks');
st_remarks.innerHTML = remarks;