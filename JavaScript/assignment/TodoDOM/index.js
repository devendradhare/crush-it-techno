document.querySelector("form").addEventListener("submit", formsubmit);



function formsubmit(event) {
  event.preventDefault();
    //  console.log("hello");
    
    let task_arr = [];

  let taskname = document.getElementById("task").value;
  let priority = document.getElementById("priority").value;
  // console.log(taskname, priority);

  let taskobj = {
    name: taskname,
    pri: priority,
  };
  //console.log(taskobj);
  task_arr.push(taskobj);

  //console.log(task_arr);

  task_arr.forEach(function (el) {
    let tbody = document.getElementById("tbody");

    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = el.name;

      let col2 = document.createElement("td");
      col2.innerText = el.pri

    let col3 = document.createElement("td");
      col3.innerText = "Delete";
      col3.style.backgroundColor = "red"
      col3.addEventListener("click", function (event) {
          // console.log(event.target.parentNode);
          event.target.parentNode.remove();
      })

    row.append(col1, col2, col3);

    tbody.append(row);
  });
}
