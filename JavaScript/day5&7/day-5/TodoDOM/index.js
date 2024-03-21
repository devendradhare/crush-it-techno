document.querySelector("form").addEventListener("submit", myTodo);

//let todoArr = JSON.parse(localStorage.getItem("todoArr"));

function myTodo() {
  event.preventDefault();
  var task = document.querySelector("#task").value;
  var priority = document.querySelector("#priority").value;

  let todoObj = {
    task,
    priority,
  };
  todoArr.push(todoObj);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
  displayTable(todoArr);
}

function displayTable(todoArr) {
  document.querySelector("tbody").innerHTML = "";
  todoArr.map(function (elem, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.task;

    var td2 = document.createElement("td");
    td2.innerText = elem.priority;

    if (elem.priority == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }

    var td3 = document.createElement("td");
    td3.addEventListener("click", function () {
      //  event.target.parentNode.remove();
      rowremove(elem, index);
    });
    td3.innerText = "Delete";
    td3.style.backgroundColor = "red";

    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
  });
}

function rowremove(elem, index) {
  todoArr.splice(index, 1);
  displayTable(todoArr);
}


// let arr = ["a", "b", "c", "d", "e",]
// let b = arr.splice(1, 3)
// console.log(b);
// console.log(arr);

// let a = localStorage.getItem("dfdsfs")
// console.log(a);

