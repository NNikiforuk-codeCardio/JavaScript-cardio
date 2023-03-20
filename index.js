const submitBtn = document.querySelector(".submit-btn");
const main = document.querySelector(".section-main");
const secondary = document.querySelector(".section-secondary");
const selected = document.querySelector(".selected");

const state = (e) => {
	if (e.target.classList.contains("state")) {
		const value = e.target.innerText;

		submitBtn.addEventListener("click", () => {
			main.classList.add("hidden");
			secondary.classList.add("active");

			selected.textContent = `You selected ${value} out of 5`;
		});
	}
};

document.addEventListener("click", state);
