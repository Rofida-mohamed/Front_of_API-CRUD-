$(document).ready(
    function () {
        $(".getdata").click(
            function () {
                $.ajax(
                    {
                        url: "http://localhost:5148/api/Student",
                        success: function (result) {
                            var tbody = document.querySelector("#tbodyDept");
                            result.forEach(std => {

                                var row = document.createElement("tr");

                                var idtd = document.createElement("td");
                                idtd.innerText = std.std_No;
                                row.appendChild(idtd);

                                var nametd = document.createElement("td");
                                nametd.innerText = std.std_Name;
                                row.appendChild(nametd);

                                var imgtd = document.createElement("td");
                                var img = document.createElement("img");
                                img.className = "imgstd";
                                img.src = std.std_Image;
                                imgtd.appendChild(img);
                                row.appendChild(imgtd);

                                var agetd = document.createElement("td");
                                agetd.innerText = std.std_Age;
                                row.appendChild(agetd);

                                var locttd = document.createElement("td");
                                locttd.innerText = std.std_Address;
                                row.appendChild(locttd);

                                var department = document.createElement("td");

                                department.innerText = "Department .: " + std.department.depat_Name + " in loaction " + std.department.depat_Loaction;
                                row.appendChild(department);

                                var Edittd = document.createElement("td");
                                var editbtn = document.createElement("button");
                                editbtn.className = "btn btn-success";
                                editbtn.innerText = "Edit";
                                editbtn.onclick = () => {
                                   
                                    const studentJson = JSON.stringify(std);
                                    
                                    window.location.href = "editStudent.html?student=" + encodeURIComponent(studentJson);

                                }; // Pass the student object to the edit function
                                Edittd.appendChild(editbtn);
                                row.appendChild(Edittd);

                                var Deletetd = document.createElement("td");
                                var delbtn = document.createElement("button");
                                delbtn.className = "btn btn-danger";
                                delbtn.innerText = "Delete";
                                delbtn.onclick = () => {
                                    $.ajax({
                                        method: "DELETE",
                                        url: "http://localhost:5148/api/Student/" + std.std_No,
                                        success: function (result) {
                                            console.log(result);
                                            window.location.reload();
                                        },
                                        error: (e) => {
                                            console.log(e);
                                        }
                                    });
                                };
                                Deletetd.appendChild(delbtn);
                                row.appendChild(Deletetd);


                                tbody.appendChild(row);


                            });
                        }
                    }
                );
            }
        );
    }
    
);

