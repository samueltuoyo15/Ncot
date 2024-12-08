$(document).ready(function() {
  function setupNewsletterForm(formId, msgId, submitId) {
    $(formId).on('submit', function (e) {
      var form = $(this);
      var msgElement = form.find(msgId);
      var submitBtn = form.find(submitId);

      // Clear previous message and update button text
      msgElement.html('').show();
      submitBtn.html('Processing...').attr('disabled', true);

      // Submit form data using AJAX
      $.ajax({
        url: '../../assets/php/newsletter.php', // Updated to reflect your actual PHP file location
        type: 'post',
        data: form.serialize(),
        success: function (result) {
          msgElement.html(result).fadeIn(); // Display success message

          // Reset form fields
          form[0].reset();

          // Reset button text and enable button
          submitBtn.html('Subscribe').attr('disabled', false);

          // Clear success message after 4 seconds
          setTimeout(function () {
            msgElement.fadeOut('slow'); // Fade out message
          }, 4000); // 4 seconds delay

      },
        error: function () {
          msgElement.html('<span style="color: red;">Error occurred. Please try again later.</span>').fadeIn(); // Display error message if AJAX request fails

          // Reset button text and enable button
          submitBtn.html('Subscribe').attr('disabled', false);
        }
      });

      e.preventDefault(); // Prevent default form submission
    });
  }

  // Setup the newsletter form
  setupNewsletterForm('#newsletter-form', '#msg', '#submit');

});