var currentStatus = "daily";
const dashboardList = document.getElementById("dashboard__list");
const toggles = document.querySelectorAll(".btn");

toggles.forEach((element) => {
  element.addEventListener("click", () => {
    toggles.forEach((item) => {
      if (item.classList.contains("active")) item.classList.remove("active");
    });
    element.classList.toggle("active");
    currentStatus = element.innerText.toString().toLowerCase();
    dashboardList.innerHTML = "";
    getJsonFile();
  });
});

async function getJsonFile() {
  const response = await fetch("./data.json");
  json_data = await response.json();
  displayList(json_data);
}
async function displayList(data) {
  data.map((item) => {
    let title =
      item.title === "Self Care"
        ? "self-care"
        : item.title.toString().toLowerCase();
    let bgClass = title + "-bg";
    var child = document.createElement("div");
    child.classList.add("dashboard__item", bgClass);
    let timeframes = item.timeframes;
    child.innerHTML = `
          <img class="deco-icon" src="./dist/images/icon-${
            item.title === "Self Care" ? "self-care" : item.title
          }.svg" alt=${item.title} />
          <div class="content">
            <section>
              <p class="title">${item.title}</p>
              <img
                class="ellipsis"
                src="./dist/images/icon-ellipsis.svg"
                alt="ellipsis"
              />
            </section>
            <section>
              <p class="hours">${timeframes[currentStatus].current} hrs</p>
              <p class="last-week-hrs">Last Week - ${
                timeframes[currentStatus].previous
              } hrs</p>
            </section>
          </div>
    `;
    dashboardList.appendChild(child);
  });
}

getJsonFile();
