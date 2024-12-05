const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const dropdownValue = document.querySelector(".dropdown__value");
dropdown.addEventListener('click', (e) => {
    dropdownList.classList.toggle('dropdown__list_active');
    e.preventDefault();
    dropdownValue.textContent = e.target.textContent;
    e = () => dropdownList.classList.remove('dropdown__list_active');
})
