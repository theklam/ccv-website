

$(function () {
      $.fn.isOnScreen = function(){

          var win = $(window);

          var viewport = {
              top : win.scrollTop(),
              left : win.scrollLeft()
          };
          viewport.right = viewport.left + win.width();
          viewport.bottom = viewport.top + win.height();

          var bounds = this.offset();
          bounds.right = bounds.left + this.outerWidth();
          bounds.bottom = bounds.top + this.outerHeight();

          return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

      };
// table of contents
    $('#TableOfContents > ul').addClass("nav flex-column toc")
                              .attr("id", "toc");
    $('#TableOfContents > ul > li').addClass("nav-item");
    $('#TableOfContents > ul > li > a').addClass("nav-link")
                                       .attr("data-scroll", "");


// toggle menu
    $('.menu-trigger').click(function () {
        $('#menu').toggleClass('menu-visible')
    });

// toggle discourse box

    $('.discourse-trigger').click(function () {
        $('#discourse-box').toggleClass('discourse-visible')
        $('.discourse-trigger > span').toggleClass('fa-caret-left')
        $('.discourse-trigger > span').toggleClass('fa-caret-right')
    });

// Show summary news on hover

    $('.page-summary').addClass('d-none');
    $('.page-box').hover(function () {
        const targetId = $(this).attr('data-target');
        $('.page-summary').addClass('d-none');
        $(`#${targetId}`).removeClass('d-none');
    });


// Add table class
    $('table').addClass('table');
    $('.dark-thead > table > thead').addClass('thead-dark');

// Scroll
    // Add smooth scrolling to all links
    $('.section-nav-link').on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $("input[type='radio']").click(function(){
      var value = $("input[type='radio']:checked").val();
      $('#radioInput').val(value);
      const group = ['group', 'condo']
      if (value == "Add to Group or Condo") {
        $(".group-enable").prop("disabled", false);
      }
      else {
        $(".group-enable").prop("disabled", true);
      }
    });

    $('#checkboxAgree').click(function() {
        $("#textAgree").toggle(this.checked).val("I agree");
    });

    $('.taskTooltip').tooltip({trigger: 'manual'}).tooltip('show');

// Discourse box
    $(document).scroll(function(){
        if ($('#floating-group').isOnScreen()) {
            // The element is visible, do something
            $('#floating-group').removeClass('hidden-start');
            $('#discourse-box').addClass('discourse-visible');
            $('.discourse-trigger > span').removeClass('fa-caret-left');
            $('.discourse-trigger > span').addClass('fa-caret-right');
        } else {
            // The element is NOT visible, do something else
        }
    });


$('.dropdown-toggle').dropdown();

// Image change on hover:
    $('.people-card').mouseenter(function(){
        const bi = $(this).css("background-image")
        const ho = bi.replace("_main", "_hover")
        $(this).css("background-image", ho)
    })
    $('.people-card').mouseleave(function(){
        const ho = $(this).css("background-image")
        const bi = ho.replace("_hover", "_main")
        $(this).css("background-image", bi)
    })
});
