export const toggleMode = () => {
  console.log(document.body.classList[0]);
  if (document.body.classList[0] === "dark-mode") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
};
