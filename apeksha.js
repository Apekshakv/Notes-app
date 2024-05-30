let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li> <a target='_blank' href='"+ myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems  
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})


if (leadsFromLocalStorage) {
    const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

    myLeads = leadsFromLocalStorage
    renderLeads()
}
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})


