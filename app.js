let fullname;
let dateofbirth;
let gender;
let phonenumber;
let grade;
let imageurl;
var form = document.getElementById("form");

let students = JSON.parse(localStorage.getItem("students")) || [];

console.log(Array.isArray(students));

// let hotorcold ;
// Add a submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  fullname = document.getElementById("fullname").value;
  dateofbirth = document.getElementById("dateofbirth").value;
  major = document.getElementById("major").value;
  gender = document.getElementById("gender").value;
  imageurl = document.getElementById("imageUrl").value;
  console.log(imageurl);
  phonenumber = document.getElementById("phonenumber").value;
  grade = document.getElementById("grade").value;

  if (gender == 0) {
    gender = "male";
  } else gender = "female";

  const newStudent = new Student(
    fullname,
    dateofbirth,
    gender,
    major,
    imageurl,
    phonenumber
  );

  students.push(newStudent);

  let div_1 = document.createElement("div");
  document.getElementById("student-1").appendChild(div_1);
  let studentName = document.createElement("p");
  let dateOfBirth = document.createElement("p");
  let Gender = document.createElement("p");
  let phoneNumber = document.createElement("p");
  let Major = document.createElement("p");

  div_1.append(studentName, dateOfBirth, Gender, Major, phoneNumber);

  window.localStorage.setItem("students", JSON.stringify(students));

  console.log(localStorage.getItem("students"));

  studentName.textContent = `name : ${fullname}`;
  dateOfBirth.textContent = `date of birth : ${dateofbirth}`;
  Gender.textContent = `gender : ${gender}`;
  phoneNumber.textContent = `phone number : ${phonenumber}`;
  Major.textContent=`major : ${major}`;

  //adding style to the div
  div_1.style.backgroundColor = "green";
  div_1.style.color = "white";
  div_1.style.padding = "10px";
  div_1.style.border = "1px solid black";
  div_1.style.display = "grid";
  div_1.style.alignSelf = "center";
  div_1.style.justifyContent = "center";
  div_1.style.margin = "20px";
});

function Student(fullName, dateOfBirth, gender, major, imageUrl, phoneNumber) {
  this.fullname = fullName;
  this.dateofbirth = dateOfBirth;
  this.gender = gender;
  this.major = major;
  this.imageurl = imageUrl;
  this.phonenumber = phoneNumber;
}

students.forEach(function (object) {
  const div_s = document.createElement("div");
  div_s.innerHTML = `
      <div > 
      <img src="${object.imageurl}" alt="A beautiful image" style=" height: 190px ;     border-radius: 50%; ">
      </div>
      <div>
      <p>Full Name: ${object.fullname}</p>
      <p>date of birth: ${object.dateofbirth}</p>
      <p>Phone Number : ${object.phonenumber}</p>
      <p>Major : ${object.major}</p>
      <div/>
      <hr>
  `;

  //adding style to the div
  div_s.style.backgroundColor = "green";
  div_s.style.color = "white";
  div_s.style.padding = "10px";
  div_s.style.border = "1px solid black";
  div_s.style.display = "flex";
  div_s.style.alignSelf = "center";
  div_s.style.alignItems="center";
  div_s.style.justifyContent = "space-around";
  div_s.style.width="90%";
  div_s.style.margin = "auto";
  div_s.style.marginTop = "20px";
  div_s.style.borderRadius="25px";
  div_s.style.height= "200px";
  div_s.style.gridAutoColumns="true";
  div_s.style.fontSize ="larger";

  document.getElementById("student-1").appendChild(div_s);
});
