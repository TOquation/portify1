AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.getElementById('contactForm').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(this); // Collect form data

  try {
    const response = await fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
          // Clear the form after successful submission
      this.reset();
    } else {
      console.log('Failed to submit the form.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
});




