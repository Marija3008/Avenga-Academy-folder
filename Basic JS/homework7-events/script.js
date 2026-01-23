document.getElementById("createBtn").addEventListener("click", function () {

      const rows = document.getElementById("rows").value;
      const cols = document.getElementById("cols").value;

      const container = document.getElementById("tableContainer");
      container.innerHTML = ""; // clear previous table

      const table = document.createElement("table");

      for (let i = 1; i <= rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 1; j <= cols; j++) {
          const td = document.createElement("td");
          td.textContent = `Row-${i} Column-${j}`;
          tr.appendChild(td);
        }

        table.appendChild(tr);
      }

      container.appendChild(table);
    });





    