console.log("fd")

import data from './data.json' assert { type: 'json' };
console.log(data);


function showDatainTable(arr, id) {
    let tbody = document.getElementById(id);
    // console.log(arr);
    tbody.innerHTML = "";
    arr.forEach(obj => {
        tbody.innerHTML += ` <tr>
    <td data-label="ID">${obj.id}</td>
    <td class="nameTd" data-label="Name">
        <img src="${obj.img_src}" alt="">
        <div>${obj.first_name} ${obj.last_name}</div>
    </td>
    <td data-label="Gender">${obj.gender}</td>
    <td data-label="Class">${obj.class}</td>
    <td data-label="Marks">${obj.marks}</td>
    <td  data-label="Passing">${obj.passing ? "passed" : "failed"}</td>
    <td  data-label="Email">${obj.email}</td>
</tr>`;
    });


}
showDatainTable(data, "table_body");
/*
{
    "id": 1,
    "first_name": "Chadwick",
    "last_name": "Ayre",
    "email": "cayre0@cam.ac.uk",
    "gender": "Male",
    "img_src": "https://robohash.org/corporisquiaperiam.png?size=50x50&set=set1",
    "class": 11,
    "marks": 18,
    "passing": false,
    "city": "Moorreesburg"
  },
*/
function demo() {
    console.log(data.length, data[0], data[0].id, data[0].title);
    console.log(data.sort((obj1, obj2) => obj1.first_name - obj2.first_name));
    console.log(Object.entries(data), Object.entries(data)[0], Object.entries(data)[0][1], Object.entries(data)[0][1].first_name);
    let sot_arr = Object.entries(data).sort((a, b) => a[1].first_nam - b[1].first_name);
    console.log(sot_arr);

    console.log(sot_arr[0]);
    console.log(sot_arr[0][1]);//obj

    // data.sort((a, b) => {
    //     if (a.first_name < b.first_name) {
    //       return -1;
    //     } else if (a.first_name > b.first_name) {
    //       return 1;
    //     } else {
    //       return 0;
    //     }
    //   });

    //   console.log( data);



    //  data.sort((a, b) => {
    //         if (a.first_name < b.first_name) {
    //           return 1;
    //         } else if (a.first_name > b.first_name) {
    //           return -1;
    //         } else {
    //           return 0;
    //         }
    //       });

    //       console.log( data);


    //  data.sort((a, b) => {
    //         if (a.marks < b.marks) {
    //           return -1;
    //         } else if (a.marks > b.marks) {
    //           return 1;
    //         } else {
    //           return 0;
    //         }
    //       });

    //       console.log( data);





    //  data.sort((a, b) => {
    //         if (a.class < b.class) {
    //           return -1;
    //         } else if (a.class > b.class) {
    //           return 1;
    //         } else {
    //           return 0;
    //         }
    //       });

    //       console.log( data);


}
// demo();

let sortAtoZBtn = document.getElementById("sortAtoZ");
let sortZtoABTn = document.getElementById("sortZtoA");
let sortBYMarksBtn = document.getElementById("sortBYMarks");
let sortBYPassingBtn = document.getElementById("sortBYPassing");
let sortBYClassBtn = document.getElementById("sortBYClass");
let sortByGenderBtn = document.getElementById("sortByGender");

sortAtoZBtn.addEventListener("click", () => {
    document.getElementById("femaleTable").style.display = "none";

    console.log("sortAtoZBtn");

    data.sort((a, b) => {
        const fullNameA = `${a.first_name} ${a.last_name}`;
        const fullNameB = `${b.first_name} ${b.last_name}`;
        if ( fullNameA< fullNameB) {
            return -1;
        } else if (fullNameA > fullNameB) {
            return 1;
        } else {
            return 0;
        }
    });

    console.log(data);
    showDatainTable(data, "table_body");
})



sortZtoABTn.addEventListener("click", () => {
    document.getElementById("femaleTable").style.display = "none";

    console.log("sortZtoABTn");
    data.sort((a, b) => {
        const fullNameA = `${a.first_name} ${a.last_name}`;
        const fullNameB = `${b.first_name} ${b.last_name}`;
        if (fullNameA < fullNameB) {
            return 1;
        } else if (fullNameA > fullNameB) {
            return -1;
        } else {
            return 0;
        }
    });

    console.log(data);
    showDatainTable(data, "table_body");
})


sortBYMarksBtn.addEventListener("click", () => {
    document.getElementById("femaleTable").style.display = "none";

    console.log("sortBYMarksBtn");
    data.sort((a, b) => {
        if (a.marks < b.marks) {
            return -1;
        } else if (a.marks > b.marks) {
            return 1;
        } else {
            return 0;
        }
    });

    console.log(data);
    showDatainTable(data, "table_body");
})


sortBYClassBtn.addEventListener("click", () => {
    document.getElementById("femaleTable").style.display = "none";

    console.log("sortBYClassBtn");

    data.sort((a, b) => {
        if (a.class < b.class) {
            return -1;
        }
        else if (a.class > b.class) {
            return 1;
        }
        else {
            return 0;
        }
    })

    console.log(data);
    showDatainTable(data, "table_body");
})



sortBYPassingBtn.addEventListener("click", () => {
    document.getElementById("femaleTable").style.display = "none";

    console.log("sortBYPassingBtn")
    let pass_stud = data.filter((obj) => {
        if (obj.passing == true) {
            return true;
        }
        return false;
    })

    console.log(pass_stud)
    showDatainTable(pass_stud, "table_body");
})

sortByGenderBtn.addEventListener("click", () => {

    console.log("sortByGenderBtn")
    let femal_std = [];
    let male_std = [];
    for (let obj of data) {

        if (obj.gender === "Male") {
            male_std.push(obj)
        }
        else if (obj.gender === "Female") {
            femal_std.push(obj)
        }
    }

    console.log(male_std)
    console.log(femal_std)

    showDatainTable(male_std, "table_body");

    document.getElementById("femaleTable").style.display = "table";
    showDatainTable(femal_std, "table_body_femal");

})


document.getElementById("searchbtn").addEventListener("click", () => {

    let searchStr = document.getElementById("searchInp").value;
    searchStr = searchStr.toUpperCase();
    console.log("helll", searchStr)
    handleChange(searchStr);

})

function handleChange(searchStr) {
    let tbody = document.getElementById("table_body");
    let trs = tbody.getElementsByTagName("tr");

    for (let i = 0; i < trs.length; i++) {
        let tds = trs[i].getElementsByTagName("td");

        if (tds[1] || tds[6]) {
            let name = tds[1].textContent.trim() || tds[1].innerText.trim();
            let email = tds[6].textContent.trim() || tds[6].innerText.trim();

            name = name.toUpperCase();
            email = email.toUpperCase();
            // console.log(name,email,"\n")

            if (name.includes(searchStr) || email.includes(searchStr)) {
                trs[i].style.display = "";

            }
            else {
                trs[i].style.display = "none";
            }
        }
    }

}
