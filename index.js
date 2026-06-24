const form = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  successMessage.textContent = `Добро пожаловать, ${user.name}! Вы успешно зарегистрированы.`;
  form.reset();

  setTimeout(() => (successMessage.textContent = ""), 4000);
});

const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const comment = document.getElementById("comment").value;

  const review = { name, comment };
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  savedReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(savedReviews));

  addReviewToPage(review, savedReviews.length - 1);
  reviewForm.reset();
});
