var init = function () {
  $('.administrate-tag-input').selectize({
    delimiter: ',',
    persist: false,
    create: true
  });
}

if (window['Turbolinks']) {
  document.addEventListener('turbolinks:load', init);
} else {
  $(init);
}
