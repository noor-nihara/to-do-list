$(function () {
    $.getJSON("https://jsonplaceholder.typicode.com/todos", function (data) {
      var entry = "";
  
      $.each(data, function (key, value) {
        entry += "<tr>";
        entry += "<td>" + value.userId + "</td>";
        entry += "<td>" + value.id + "</td>";  
        entry += "<td>" + value.title + "</td>";
        
  
        if (value.completed == false) {
          entry +=
            "<td>" +
            `<input id="task${key}" onclick="checkboxClickedHandler(event)" type="checkbox">` +
            "</td>";
        } else {
          entry += "<td>" + '<input type="checkbox" disabled checked>' + "</td>";
        }
        
  
        entry += "</tr>";
      });
  
      $("#table-body").append(entry);
    });
  });
  
  var count = 0;
  
  function checkboxClickedHandler(event) {
    function promise(e) {
      if (e.target.checked) {
        count += 1;
      } else {
        count -= 1;
      }
      return new Promise(function (resolve, reject) {
        if (count === 5) {
          resolve("Congrats, 5 Tasks have been successfully completed !");
        } else {
          reject(`${5 - count} tasks remaining!`);
        }
      });
    }
  
    promise(event)
      .then((info) => {
        alert(info);
      })
      .catch((err) => console.log(err));
  }