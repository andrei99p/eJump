document.addEventListener("DOMContentLoaded", function() {
    var data = `A1,B1,C1
                A1,B1,C2
                A1,B1,C3
                A1,B2,C4
                A1,B2,C5
                A1,B3,C6
                A2,B4,C7
                A2,B5,C8
                A2,B5,C9
                A3,B6,C10`;

    function populateTable(data) {
        var table = document.getElementById("dataTable");

        var rows = data.split("\n");

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i].split(",");

            var newRow = table.insertRow();

            for (var j = 0; j < row.length; j++) {
                var cell = newRow.insertCell(j);

                cell.innerHTML = row[j];
            }
        }
    }

    populateTable(data);

    window.filterTable = function() {
        var selectA = document.getElementById("selectA");
        var selectB = document.getElementById("selectB");
        var selectC = document.getElementById("selectC");

        var selectedA = selectA.value;
        var selectedB = selectB.value;
        var selectedC = selectC.value;

        var table = document.getElementById("dataTable");
        var rows = table.getElementsByTagName("tr");

        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName("td");
            var showRow = true;

            if (
                (selectedA && cells[0].innerHTML.trim().indexOf(selectedA) === -1) ||
                (selectedB && cells[1].innerHTML.trim().indexOf(selectedB) === -1) ||
                (selectedC && cells[2].innerHTML.trim().indexOf(selectedC) === -1)
            ) {
                showRow = false;
            }

            rows[i].style.display = showRow ? "" : "none";
        }

        updateSelectOptions();
    };

    function updateSelectOptions() {
        var table = document.getElementById("dataTable");
        var rows = table.getElementsByTagName("tr");

        var uniqueValuesA = new Set();
        var uniqueValuesB = new Set();
        var uniqueValuesC = new Set();

        for (var i = 0; i < rows.length; i++) {
            if (rows[i].style.display !== "none") {
                var cells = rows[i].getElementsByTagName("td");
                uniqueValuesA.add(cells[0].innerHTML.trim());
                uniqueValuesB.add(cells[1].innerHTML.trim());
                uniqueValuesC.add(cells[2].innerHTML.trim());
            }
        }

        updateOptions(document.getElementById("selectA"), Array.from(uniqueValuesA).sort());
        updateOptions(document.getElementById("selectB"), Array.from(uniqueValuesB).sort());
        updateOptions(document.getElementById("selectC"), Array.from(uniqueValuesC).sort());
    }

    function updateOptions(selectElement, options) {
        selectElement.innerHTML = "";

        var defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Toate";
        selectElement.appendChild(defaultOption);

        for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.value = options[i];
            option.text = options[i];
            selectElement.appendChild(option);
        }
    };
});