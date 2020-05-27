"use strict";

const $main = document.querySelector("main");
const $section = document.querySelector("section");
const $form = document.querySelector(".control");
const $select = document.querySelector("select");
const $inputText = document.querySelector("input[type='text']");
const $textarea = document.querySelector("textarea");
const $inputNumber = document.querySelector("input[type='number']");
const $submit = document.querySelector("button[type='submit']");
const $delete = document.querySelector("button[type='delete']");

const getTasks = () => {
    fetch("http://localhost:8000/tasks", {
        method: "GEt",
        headers: {
            "Content-Type" : "application/json",
        }})
    .then( response => response.json() )
    .then( (result) => {
        renderOptions(result);
        renderTasks(result);
    })
    .catch( (error) => console.error('Error:', error) );
};

const getSingleTask = async (id) => {
    const response = (await fetch(`http://localhost:8000/tasks/${id}`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        }})).json();
    return response;
};

getTasks();

const renderOptions = (tasks) => {
    while ($select.firstChild) {
        $select.removeChild($select.firstChild);
    }
    let optionArray = [];
    const $option = document.createElement("option");
        $option.value = "new";
        $option.innerHTML = "new";
        optionArray.push($option);
    tasks.forEach( e => {
        const $option = document.createElement("option");
        $option.value = e.id;
        $option.innerHTML = e.id;
        optionArray.push($option);
    })
    $select.append(...optionArray);
};

const renderTasks = (tasks) => {
    while ($section.firstChild) {
        $section.removeChild($section.firstChild);
    }
    let articleArray = [];
    tasks.forEach( e => {
        const $article = document.createElement("article");
        $article.innerHTML = `
            <div>${e.id}</div>
            <input type="text" name="task${e.id}" id="task${e.id}" min-length="3" value="${e.task}" readonly>
            <textarea name="description${e.id}" id="description${e.id}" cols="30" rows="1" min-length="3" readonly>${e.description}</textarea>
            <input type="number" name="urgency${e.id}" id="urgency${e.id}" min="0" max="4" value="${e.urgency}" readonly>
            <input type="checkbox" name="status${e.id}" id="status${e.id}" data-id="${e.id}" ${(e.status === "solved") ? "checked" : ""}>
        `
        articleArray.push($article);
    })
    $section.append(...articleArray);
};

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    if ($select.value === "new") {
        fetch("http://localhost:8000/tasks", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            task: $inputText.value,
            description: $textarea.innerHTML,
            urgency: $inputNumber.value
            })
        })
        .then( () => {
            getTasks();
            $inputText.value = "";
            $textarea.innerHTML = "";
            $textarea.value = "";
            $inputNumber.value = "";
        })
        .catch( (error) => console.error('Error:', error) );
    } else {
        fetch(`http://localhost:8000/tasks/${$select.value}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json",
            "status" : "active"
        },
        body: JSON.stringify({
            task: $inputText.value,
            description: $textarea.value,
            urgency: $inputNumber.value
            })
        })
        .then( () => {
            getTasks();
        })
        .catch( (error) => console.error('Error:', error) );
    }
});

$delete.addEventListener("click", (event) => {
    event.preventDefault();
    if ($select.value !== "new") {
        fetch(`http://localhost:8000/tasks/${$select.value}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json",
        }})
        .then( () => {
            getTasks();
        })
        .catch( (error) => console.error('Error:', error) );
    }
});

$select.addEventListener("change", (event) => {
    if ($select.value === "new") {
        $inputText.value = "";
        $textarea.innerHTML = "";
        $textarea.value = "";
        $inputNumber.value = "";
    } else {
        getSingleTask($select.value)
            .then( (results) => {
                $inputText.value = results.results.task;
                $textarea.innerHTML = results.results.description;
                $textarea.value = results.results.description;
                $inputNumber.value = results.results.urgency;
                console.log(results.results);
            });
    }
});

$section.addEventListener("change", (event) => {
    const marker = (event.target.checked) ? "solved" : "active";
    const id = event.target.dataset.id;
    fetch(`http://localhost:8000/tasks/${id}/${marker}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json",
        }})
        .then( () => {
            getTasks();
        })
        .catch( (error) => console.error('Error:', error) );
});