// fill in javascript code here

document.querySelector("form").addEventListener("submit", docdata);
let docArr = JSON.parse(localStorage.getItem("docArr"));
if (docArr === null) docArr = [];

function docdata() {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let docid = document.getElementById("docID").value;
  let dept = document.getElementById("dept").value;
  let exp = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mbl = document.getElementById("mbl").value;

  // console.log(name, docid, dept, exp, email, mbl);
  let docobj = {
    docname: name,
    doctorID: docid,
    department: dept,
    experience: exp,
    email: email,
    mobile: mbl,
  };

  docArr.push(docobj);
  localStorage.setItem("docArr", JSON.stringify(docArr));

  // console.log(docArr);
  display(docArr);
}
display(docArr);
function display(docArr) {
  for (let i = 0; i < docArr.length; i++) {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = docArr[i].docname;

    let dociD = document.createElement("td");
    dociD.innerText = docArr[i].doctorID;

    let department = document.createElement("td");
    department.innerText = docArr[i].department;

    let experience = document.createElement("td");
    experience.innerText = docArr[i].experience;

    let email = document.createElement("td");
    email.innerText = docArr[i].email;

    let mobile = document.createElement("td");
    mobile.innerText = docArr[i].mobile;

    let del = document.createElement("td");
    del.innerText = "Delete";
    del.style.backgroundColor = "red";

    del.addEventListener("click", deletef);

    row.append(name, dociD, department, experience, email, mobile, del);

    document.querySelector("tbody").append(row);
  }

  function deletef() {
    // console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
}
