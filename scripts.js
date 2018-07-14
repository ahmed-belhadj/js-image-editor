const inputs = document.querySelectorAll(".options input");

function handleInput() {
  const unit = this.dataset.unit || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}
inputs.forEach(input => input.addEventListener("change", handleInput));
inputs.forEach(input => input.addEventListener("mousemove", handleInput));
