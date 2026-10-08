// Photo: shows photo.jpg if the file exists, otherwise the "F" monogram.
const photo = document.getElementById("photo");
const showPhoto = () => photo.closest(".avatar").classList.add("has-photo");
if (photo.complete && photo.naturalWidth > 0) showPhoto();
photo.addEventListener("load", showPhoto);

// Highlight the top-bar link for the section currently on screen.
const links = document.querySelectorAll(".topbar nav a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));

function setActive(id) {
  links.forEach(a => {
    if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
  }, { rootMargin: "-20% 0px -65% 0px" });
  sections.forEach(s => s && observer.observe(s));
}
setActive("top");
