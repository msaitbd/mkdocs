document.addEventListener("DOMContentLoaded", function () {
  const badgeMap = {
    "Boarding Management": { text: "Madrasa", class: "badge-danger" },
  };

  const links = document.querySelectorAll("nav.md-nav a");

  links.forEach((link) => {
    const label = link.textContent.trim();
    if (badgeMap[label]) {
      const badge = document.createElement("span");
      badge.textContent = badgeMap[label].text;
      badge.className = `badge ${badgeMap[label].class}`;
      link.append(" ", badge);
    }
  });
});
