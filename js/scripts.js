
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});


//navbar 
const header = document.getElementById("site-header");
let lastScroll = window.pageYOffset;
function handleScroll() {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
      header.style.transition = "transform 0.5s ease";
      header.style.transform = "translateY(-100%)";
  } else {
      header.style.transition = "transform 0.5s ease";
      header.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;
}
window.addEventListener("scroll", handleScroll);


//horizontal scroll
// Pause scrolling animation on hover
document.addEventListener('DOMContentLoaded', () => {
  const scrollingIcons = document.querySelector('.icons-container');
  const icons = document.querySelectorAll('.scrolling-icons img');

  scrollingIcons.addEventListener('mouseover', () => {
    scrollingIcons.style.animationPlayState = 'paused';
  });

  scrollingIcons.addEventListener('mouseout', () => {
    scrollingIcons.style.animationPlayState = 'running';
  });
});


//reviews
document.addEventListener('DOMContentLoaded', function () {
  const reviews = document.querySelectorAll('.review-section');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  let currentReviewIndex = 0;

  function showReview(index) {
      reviews.forEach((review, idx) => {
          review.classList.remove('active');
          review.classList.remove('inactive');
          if (idx === index) {
              review.classList.add('active');
          } else {
              review.classList.add('inactive');
          }
      });
  }

  prevButton.addEventListener('click', function () {
      currentReviewIndex = (currentReviewIndex > 0) ? currentReviewIndex - 1 : reviews.length - 1;
      showReview(currentReviewIndex);
  });

  nextButton.addEventListener('click', function () {
      currentReviewIndex = (currentReviewIndex < reviews.length - 1) ? currentReviewIndex + 1 : 0;
      showReview(currentReviewIndex);
  });

  showReview(currentReviewIndex);
});



//features
document.querySelectorAll('.feature-h h2').forEach(item => {
  item.addEventListener('click', event => {
    // Remove gradient classes from all headings and links
    document.querySelectorAll('.feature-h h2').forEach(h2 => h2.classList.remove('gradient-text'));
    document.querySelectorAll('.feature-content a').forEach(link => link.classList.remove('gradient-link'));

    // Hide all feature contents and images
    document.querySelectorAll('.feature-content.active').forEach(content => {
      content.classList.remove('active');
      content.style.opacity = 0;
      content.style.maxHeight = '0';
      setTimeout(() => content.style.display = 'none', 500); // Transition duration matches CSS
    });
    document.querySelectorAll('.feature-image img.active').forEach(img => {
      img.classList.remove('active');
      img.style.opacity = 0;
    });

    // Show the clicked feature's content and corresponding image
    const targetId = item.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    const targetImage = document.getElementById('featureImage' + targetId.replace('feature', ''));

    targetContent.style.display = 'block'; // Ensure it's set to block before applying the active class
    setTimeout(() => {
      targetContent.style.maxHeight = '1000px'; // Arbitrarily large value to allow full content to show
      targetContent.style.opacity = 1;
      targetContent.classList.add('active');
    }, 10); // Slight delay to allow the display change to take effect

    setTimeout(() => {
      targetImage.style.opacity = 1;
      targetImage.classList.add('active');
    }, 10); // Slight delay to ensure smooth transition

    // Add gradient classes to the clicked heading and the corresponding "Learn more" link
    item.classList.add('gradient-text');
    targetContent.querySelector('a').classList.add('gradient-link');
  });
});

// Show the first feature's content and image by default
const firstContent = document.querySelector('.feature-content');
const firstImage = document.querySelector('.feature-image img');
firstContent.style.display = 'block';
firstContent.style.maxHeight = '1000px';
firstContent.style.opacity = 1;
firstContent.classList.add('active');
firstImage.style.opacity = 1;
firstImage.classList.add('active');

// Add gradient class to the first heading and the corresponding "Learn more" link by default
document.querySelector('.feature-h h2').classList.add('gradient-text');
firstContent.querySelector('a').classList.add('gradient-link');



//metrics
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.metrics-data');
  const tabElements = document.querySelectorAll('.metrics-tab');

  // Add event listener to each button
  tabs.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons, metric data divs, and tab elements
      tabs.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
      tabElements.forEach(tab => tab.classList.remove('active'));

      // Add 'active' class to the clicked button, corresponding metric data div, and tab element
      button.classList.add('active');
      contents[index].classList.add('active');
      tabElements[index].classList.add('active');
    });
  });

  function activateTab(index) {
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    contents.forEach((content, i) => {
      if (i === index) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    tabElements.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  function calculateThresholds() {
    const sectionHeight = metricsSection.offsetHeight;
    const thirdHeight = sectionHeight / 3;

    thresholds[0] = metricsSection.offsetTop;
    thresholds[1] = thresholds[0] + thirdHeight;
    thresholds[2] = thresholds[1] + thirdHeight;
  }
  calculateThresholds();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', calculateThresholds);
});



// When the user scrolls down, show the button if in the footer section
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var footer = document.getElementById("footer");
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        var footerTop = footer.offsetTop;
        var footerHeight = footer.offsetHeight;
        var windowScrollTop = window.scrollY || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;

        if (windowScrollTop + windowHeight >= footerTop) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
