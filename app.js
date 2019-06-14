function showContactInfo() {
    $('.main-content .content-wrap').children().hide();
    $('#contactinfo').fadeIn();
    $('.main-content').addClass("align-center");
    $('.main-content').removeClass("clear-padding");
    $('#projects-button').click(function() {
      navAnimation('#1');
      showProjects();
    })
  }
  
  function showProjects() {
    $('.main-content .content-wrap').children().hide();
    $('.projects-wrap').fadeIn();
    $('.main-content').addClass("clear-padding");
    $('.main-content').removeClass("align-center");
  }
  
  function showAbout() {
    $('.main-content .content-wrap').children().hide();
    $('#about').fadeIn();
    $('.main-content').removeClass("clear-padding");
    $('.main-content').addClass("align-center");
  }
  
  // creates li for each nav item
  function createNav() {
    var content = ["About", "Projects", "Contact"];
    content.forEach(function(item, i) {
      var liItem = $("<li><a id='" + content.indexOf(item) +
        "' class='nav-link'>" + item + "</a></li>");
      $('.nav-list').append(liItem);
      liItem.click(function() {
        navRouter(liItem);
      });
    });
  }

  // attaches click event for each mobileNav item
  function attachMobileNavClick() {
    const mobileNavLinks = $('.mobileNav .menu li');
    mobileNavLinks.each(function(i, item) {
      $(item).click(function() {
        navRouter($(this));
      })
    })
  }
  
  // animates and handles show/hide of content
  function navRouter(i) {
    if (i.text() === "Contact") {
      navAnimation('#0');
      showContactInfo();
    } else if (i.text() === "Projects") {
      navAnimation('#1');
      showProjects();
    } else {
      navAnimation('#2');
      showAbout();
    }
    toggleMenu();
  }
  
  function navAnimation(selection) {
    if (selection === '#0') {
      $('#0').addClass('nav-link-open');
      $('#1, #2').removeClass('nav-link-open');
    } else if (selection === '#1') {
      $('#1').addClass('nav-link-open');
      $('#0, #2').removeClass('nav-link-open');
    } else {
      $('#2').addClass('nav-link-open');
      $('#0, #1').removeClass('nav-link-open');
    }
  }

/**
 * function that will be called when the menu is clicked
 * @param {*} event 
 */
  function toggleMenu(event) {
    $('.mobileNav').toggle(100);
  }

  $(function() {
    var year = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = '&copy; Roxanna Shahpouri ' + year;
    createNav();
    navAnimation('#0');
    showAbout();
    $('body').fadeIn().css({
      'display': 'block'
    });
    $('.hamburger').on('click',toggleMenu);
    attachMobileNavClick();
  });