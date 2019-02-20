printAllEmployees = () => {
    fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(employees => employees.json())
        .then(parsedEmployees => {
            // console.log(parsedEmployees)
            parsedEmployees.forEach(employee => {
                console.log(employee)
                document.querySelector("#employeeContainer").innerHTML += `<article class="employee">
        <header class="employee__name">
            <h1>${employee.name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${employee.department.name} department
        </section>
            <section class="employee__computer">
            Currently using a ${employee.computer.brand} ${employee.computer.model}
        </section>
        </article><br>`
            })
        })
}

printAllEmployees()



