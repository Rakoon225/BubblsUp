//*Отрисовка отзывов
const feedback_container =
  document.querySelector(`.swiper-wrapper`);
feedbacks.forEach((feedback) => {
  feedback_container.innerHTML += `
  <div class="swiper-slide">
	<div class="b5-card">
		<span class="b5-name">${feedback.name}</span>
		<div class="hr"></div>
		<p class="description description-rait">${feedback.text}</p>
	</div>
  </div>
	`;
});
