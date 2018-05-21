window.sr = ScrollReveal();
sr.reveal(".navbar-brand", {
  duration: 2000,
  origin: "top"
});
sr.reveal(".logo", {
  duration: 2000,
  origin: "bottom",
  scale: 0.1
});
sr.reveal(".nav-link1", {
  duration: 2000,
  origin: "bottom",
  scale: 0.1
});
sr.reveal(".nav-link2", {
  duration: 2000,
  origin: "bottom",
  scale: 0.1
});
sr.reveal(".nav-link3", {
  duration: 2000,
  origin: "bottom",
  scale: 0.1
});
sr.reveal(".nav-link4", {
  duration: 2000,
  origin: "bottom",
  scale: 0.1
});
sr.reveal(".nav-link5", {
  duration: 2000,
  origin: "bottom",
  scale: 0.1
});
sr.reveal(".car1", {
  duration: 3000,
  origin: "top",
  distance: "300px",
  scale: 0.5
});
sr.reveal(".p1", {
  duration: 2000,
  origin: "right",
  distance: "300px",
  delay: 1000
});
sr.reveal(".button1", {
  duration: 1000,
  origin: "bottom",
  delay: 3000
});

sr.reveal(".card-group", {
  duration: 2000,
  origin: "bottom",
  viewFactor: 0.5,
  distance: "300px"
});

sr.reveal(".ponuda", {
  duration: 2000,
  origin: "top",
  viewFactor: 0.5,
  distance: "300px"
});

sr.reveal(".feat2", {
  duration: 2000,
  origin: "right",
  viewFactor: 0.5
});
sr.reveal(".featP2", {
  duration: 2000,
  origin: "right",
  viewFactor: 0.5
});
sr.reveal(".feat-img2", {
  duration: 2000,
  origin: "left",
  viewFactor: 0.5,
  distance: "300px"
});
sr.reveal(".feat-btn", {
  duration: 2000,
  origin: "bottom",
  viewFactor: 0.5
});

/////////////////////////////////////////////////////////////////////////////////////////////
$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////
$(".carousel").carousel({
  interval: 10000
});
