fetch("https://fakestoreapi.com/products?limit=10")
  .then((response) => {
    return response.json();
  })
  .then((data) => fetchData(data));

function fetchData(usersData) {
  usersData.forEach((item) => {
    const ul = document.querySelector("#lists");
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const card = document.createElement("div");
    const img = document.createElement("img");
    img.src = item.image;
    ul.appendChild(li);
    li.appendChild(card);
    card.append(h2, img, h3, h4);
    console.log(item);
    h2.textContent = "ID:" + " " + item.id;
    h3.textContent = "Title:" + " " + item.title;
    h4.textContent = "Description:" + " " + item.description;
    img.classList.add("w-[300px]", "h-[400px]", "mt-2");
    li.classList.add("flex");

    card.classList.add(
      "bg-white",
      "flex",
      "flex-col",
      "rounded-xl",
      "items-center",
      "p-5",
      "w-[500px]",
      "mt-5"
    );
    h2.classList.add("mt-8", "font-semibold");
    h3.classList.add("mt-5", "text-lg", "font-medium");
  });
}
