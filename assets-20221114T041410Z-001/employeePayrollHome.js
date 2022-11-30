let empPayrollList;

window.addEventListener("DOMContentLoaded", (event) => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem("editEmp");
});
//Template literal
const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem("EmployeePayrollList")
    ? JSON.parse(localStorage.getItem("EmployeePayrollList"))
    : [];
};
const createInnerHtml = () => {
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
  if (empPayrollList.length == 0) return;
  let innerHtml = `${headerHtml}`;
  for (const empPayrollData of empPayrollList) {
    innerHtml = `${innerHtml}
    <tr>
    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
<td>${empPayrollData._name}</td>
<td>${empPayrollData._gender}</td>
<td><div class='dept-label'>${empPayrollData._department[0]}</div>
<div class='dept-label'>${empPayrollData.department[1]}</div></td>
<td>${empPayrollData._salary}</td>
<td>${empPayrollData.startDate}</td>
<td>
<img name="${empPayrollData._id}" onclick="remove(this)" src="./icons/delete-black-18dp.svg" alt="delete">
<img  name="${empPayrollData._id}" onclick="update(this)" src="./icons/create-black-18dp.svg" alt="edit">
</td>
</tr>
    `;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};
