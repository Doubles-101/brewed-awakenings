import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "employee") {
            const orders = getOrders()
            let orderCounter = 0

            for (const order of orders) {
                if (order.employeeId === parseInt(clickTarget.dataset.id)) {
                    orderCounter++
                }
            }

            window.alert(`${clickTarget.dataset.name} sold ${orderCounter} products`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
        data-type="employee"
        data-name="${employee.name}"
        data-id="${employee.id}"
        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

