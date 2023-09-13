function userClicked(id, element) {
  readUserPosts(id);
  let selectedElements = document.getElementsByClassName("selected");
  for (const element of selectedElements) {
    element.classList.remove("selected");
  }
  element.classList.add("selected");
}
