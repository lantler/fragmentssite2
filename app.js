$(document).foundation()
$('.breadcrumb-counter-nav-item').click(function () {
  $('.breadcrumb-counter-nav-item').removeClass('current');
  $(this).addClass('current');
});

// NOTE: SEARCH//
$(document).foundation();

$(function() {
  $('.search')
    .bind('click', function(event) {
      $(".search-field").toggleClass("expand-search");

      // if the search field is expanded, focus on it
      if ($(".search-field").hasClass("expand-search")) {
        $(".search-field").focus();
      }
    })


// NOTE: keyword replacements

    (function($) {
      var players = $("body");
      players.html(players.html().replace(/blind fighting/ig, '1234'));
    })

    (function($) {
      var players = $("body");
      players.html(players.html().replace(/blind/ig, '<a href="http://jquery.com">blind</a>'));
    })

    (function($) {
      var players = $("body");
      players.html(players.html().replace(/1234/ig, '<a href="http://1234.com">blind fighting</a>'));
    })
});
