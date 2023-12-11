import "../style/style.scss";
import { IDog } from "./models/IDog";
import { generateDogs } from "./services/axiosServices";

const generateButton = document.getElementById("generateButton");

generateButton?.addEventListener("click", async () => {
  const dogs = await generateDogs();

  createHtmlForDogGenerator(dogs);

  console.log(dogs);
});

const createHtmlForDogGenerator = (dogs: IDog[]) => {
  const dogGeneratorContainer = document.getElementById(
    "dogGeneratorContainer"
  );
  if (dogGeneratorContainer) {
    dogGeneratorContainer.innerHTML = "";
  }

  dogs.forEach((dog) => {
    const imageContainer = document.createElement("img");
    imageContainer.className = "dogImage";
    imageContainer.setAttribute("src", dog.url);
    dogGeneratorContainer?.appendChild(imageContainer);
  });
};
