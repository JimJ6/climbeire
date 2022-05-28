// Flipcard on Locations Page:

  const card = document.querySelectorAll('.card-content');
  
  card.forEach((card) => {
       card.addEventListener("click", () => {
            card.classList.toggle("flipped");
       });
  });
  