// fill in javascript code here

document.querySelector("form").addEventListener("submit", emprecord);

let emparr = JSON.parse(localStorage.getItem("emparr"));
if (emparr === null) emparr = [];
display(emparr);
function emprecord() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let empid = document.getElementById("employeeID").value;
  let department = document.getElementById("department").value;
  let exp = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mbl").value;

  console.log(name);

  let empobj = {
    name: name,
    empid: empid,
    department: department,
    exp: exp,
    email: email,
    mobile: mobile,
  };
  emparr.push(empobj);
  localStorage.setItem("emparr", JSON.stringify(emparr));
  localStorage.setItem("emparr", JSON.stringify(emparr));
  display(emparr);
  console.log("emparr", emparr);
}

function display(emparr) {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  emparr.forEach(function (elem, index) {
    let tr = document.createElement("tr");
    let nameTag = document.createElement("td");
    nameTag.innerText = elem.name;

    let empidTag = document.createElement("td");
    empidTag.innerText = elem.empid;

    let departmentTag = document.createElement("td");
    departmentTag.innerText = elem.department;

    let emailTag = document.createElement("td");
    emailTag.innerText = elem.email;

    let expTag = document.createElement("td");
    expTag.innerText = elem.exp;

    let mobileTag = document.createElement("td");
    mobileTag.innerText = elem.mobile;

    let delTag = document.createElement("td");
    delTag.innerText = "Delete";
    delTag.addEventListener("click", function () {
      console.log(event.target);
      event.target.parentNode.remove();
    });

    tr.append(
      nameTag,
      empidTag,
      departmentTag,
      expTag,
      emailTag,
      mobileTag,
      delTag
    );
    tbody.append(tr);
  });
}
