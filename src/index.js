import "./style.css";

// Show list

const majorNameDivs = document.querySelectorAll(".major-name");

const showDropDownListener = () => {
  const handleHover = (event) => {
    const locationsDiv = event.srcElement.nextElementSibling;
    locationsDiv.classList.remove("hidden");
  };

  majorNameDivs.forEach((div) =>
    div.addEventListener("mouseover", handleHover)
  );
};

// Hide list

const majorDivs = document.querySelectorAll(".major");

const hideDropDownListener = () => {
  const handleMouseOut = (event) => {
    const locationsDiv = event.srcElement.childNodes[3];
    locationsDiv.classList.add("hidden");
  };

  majorDivs.forEach((div) =>
    div.addEventListener("mouseleave", handleMouseOut)
  );
};

showDropDownListener();
hideDropDownListener();
