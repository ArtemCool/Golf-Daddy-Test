const dropdownMenus = document.querySelectorAll(".dropdown-item");

for ( let i = 1; i <= dropdownMenus.length; i++ ) {
    const currentArrow = document.getElementById(`dropdownArrow-${i}`);
    const dropdownMenu = document.getElementById(`dropdownMenu-${i}`)
    dropdownMenu.addEventListener("click", () => {
        currentArrow.classList.toggle("rotate-180")
    });
}