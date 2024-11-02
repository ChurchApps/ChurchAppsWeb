
const observerOptions = {
  rootMargin: '0px 10000px', // Large margins on the X-axis to ignore X-axis changes
};

const runningAnimations = [];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (runningAnimations.includes(entry.target)) return;
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      runningAnimations.push(entry.target);
      setTimeout(() => {
        runningAnimations.forEach((a,i) => {
          if (a===entry.target) runningAnimations.splice(i, 1);
        });
      }, 2000);
    }
    else entry.target.classList.remove('animate');
  });
}, observerOptions);

const setupAnimations = () => {
  const elements = document.querySelectorAll('.animated');
  console.log("ELEMENTS ARE", elements)
  elements.forEach((element) => observer.observe(element));
}

setTimeout(() => {
  setupAnimations();
}, 300);


console.log("Hello from animations.js");
