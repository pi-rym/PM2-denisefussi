(() => {
  var t = {
      989: (t) => {
        const e = document.getElementById("films");
        t.exports = (t) => {
          t.forEach((t) => {
            const n = document.createElement("div"),
              r = document.createElement("div");
            r.classList.add("div-movie"),
              (n.innerHTML = `<img src="${t.poster}" alt="${t.title}">`),
              (r.innerHTML = `\n    <h3>${t.title} (${
                t.year
              })</h3>\n    <p><strong>Director:</strong> ${
                t.director
              }</p>\n    <p><strong>Duracion:</strong> ${
                t.duration
              }</p>\n    <p><strong>Genero:</strong> ${t.genre.join(
                ", "
              )}</p>\n    <p><strong>Rate:</strong> ${t.rate}</p>\n    `),
              e.appendChild(n),
              n.appendChild(r);
          });
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var s = (e[r] = { exports: {} });
    return t[r](s, s.exports, n), s.exports;
  }
  (() => {
    const t = n(989);
    $.get("https://students-api.2.us-1.fl0.io/movies", (e, n) => {
      t(e);
    });
  })();
})();
