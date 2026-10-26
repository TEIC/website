document.querySelectorAll(".we-are-tei-page h1").forEach((heading) => {
  const words = heading.textContent.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return;
  }
  heading.replaceChildren();
  heading.classList.add("we-are-tei-wave");
  heading.style.setProperty("--n", String(words.length));
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "we-are-tei-wave-word";
    span.textContent = word;
    span.style.setProperty("--i", String(index));
    heading.append(span);
  });
});
