// Basic example
$(document).ready(function () {
    $('Product-list').Table({
      "paging": false // false to disable pagination (or any other option)
    });
    $('.Table_length').addClass('bs-select');
  });

  // Basic example
$(document).ready(function () {
    $('Product-list').Table({
      "pagingType": "simple" // "simple" option for 'Previous' and 'Next' buttons only
    });
    $('.Table').addClass('bs-select');
  });