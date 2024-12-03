function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("hidden");
}

function selectOption(text, imgSrc) {
  document.getElementById(
    "selected-option"
  ).innerHTML = `<img src="${imgSrc}" class="w-5 h-5 rounded-sm mr-2">`;
  document.getElementById("dropdown-options").classList.add("hidden");
}

function selectOptionSearch(text, imgSrc) {
  document.getElementById(
    "selected-cate"
  ).innerHTML = `<img src="${imgSrc}"><span class="md:inline hidden">${text}</span><i class="fa-solid fa-sort-down"></i>`;
  document
    .getElementById("dropdown-cate-search-options")
    .classList.add("hidden");
}

window.addEventListener("click", (event) => {
  const dropdownMappings = [
    { containerId: "dropdown-container", dropdownId: "dropdown-options" },
    {
      containerId: "dropdown-cate-search",
      dropdownId: "dropdown-cate-search-options",
    },
  ];

  dropdownMappings.forEach(({ containerId, dropdownId }) => {
    const container = document.getElementById(containerId);
    const dropdown = document.getElementById(dropdownId);

    if (container && dropdown && !container.contains(event.target)) {
      dropdown.classList.add("hidden");
    }
  });
});

const openSearch = () => {
  const el = document.getElementById("search");
  el.classList.toggle("!flex");
};

const openMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  console.log("🚀 ~ openSearch ~ el:", mobileMenu)
  mobileMenu.classList.toggle("-translate-x-0");
};

const addEventSubmenu = () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const mobileMenu = document.getElementById("mobile-menu");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const submenu = item.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("open");
      }
    });
  });
  
  document.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('-translate-x-full')) {
      mobileMenu.classList.add('-translate-x-full');
    }
  });
}

const gotoTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const input = document.getElementById('search-input')
const inputSearch = document.getElementById('search-result')
const btnClear = document.getElementById('clear-search')

input.addEventListener("input", function (event) {
  changeInputSearch(event.target.value)
});

const changeInputSearch = (val = '') => {
  if (val) {
    inputSearch.classList.add('!block');
    btnClear.classList.add('!block')
  } else {
    inputSearch.classList.remove('!block')
    btnClear.classList.remove('!block')
  }
}

const onBlur = () => {
  inputSearch.classList.remove('!block')
}
const clearSearch = () => {
  input.value = '';
  btnClear.classList.remove('!block')
}

addEventSubmenu();
