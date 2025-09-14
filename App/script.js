const checkboxes = document.querySelectorAll('.gallery input[type="checkbox"]');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    if (cb.checked) {
      checkboxes.forEach(other => {
        if (other !== cb) other.checked = false;
      });
    }
  });
});
