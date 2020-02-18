const amenityChecked = [];

$('document').ready(function () {
  $('.amenities input').change(function () {
    if ($(this).prop('checked')) {
      amenityChecked.push($(this).attr('data-name'));
    } else {
      const name = $(this).attr('data-name');
      const index = amenityChecked.indexOf(name);
      if (index > -1) {
        amenityChecked.splice(index, 1);
      }
    }
    amenityChecked.sort();
    $('.amenities h4').text(amenityChecked.join(', '));
  });
});
