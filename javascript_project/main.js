class TODO {
	constructor(form) {
		this.form = form;
		this.input = form.todoInput;
		this.table = document.getElementById("table");
		this.arrayOfTasks = [];
	}

	validate(value, minLength) {
		return value.length > minLength ? true : false;
	}
	onSubmit(e) {
		e.preventDefault();
		if (this.validate(this.input.value, 3)) {
			console.log(this.input.value);
			this.createElement(this.input.value);
		} else {
			alert("Invalid form");
		}
	}
	createElement(value) {
		const trow = document.createElement("tr");
		trow.innerHTML = `<td>${value}</td><td>
        <button class="done" ><i class="fas fa-check"></i></button>
        <button class="del" ><i class="fas fa-ban"></i></button></td>`;

		this.table.appendChild(trow);
		this.onDel(trow);
		this.onDone(trow);
		this.onLocalSet(this.input.value);
	}

	onDel(trow) {
		trow.childNodes[1].childNodes[3].addEventListener("click", (e) => {
			trow.parentNode.removeChild(trow);
		});
	}
	onDone(trow) {
		trow.childNodes[1].childNodes[1].addEventListener("click", (e) => {
			trow.childNodes[0].classList.toggle("stroke");
		});
	}
	onLocalSet(value) {
		this.arrayOfTasks.push(value);
		console.log(this.arrayOfTasks);
		localStorage.setItem("tasks", JSON.stringify(this.arrayOfTasks));
	}
}

let form = new TODO(document.forms.form);

form.form.addEventListener("submit", form.onSubmit.bind(form));
