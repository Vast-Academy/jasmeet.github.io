document.addEventListener('DOMContentLoaded', function () {
    const courses = document.querySelectorAll('.column-course');
    const sortSelect = document.getElementById('sort_by');

    sortSelect.addEventListener('change', function () {
      const sortBy = this.value;

      if (sortBy === 'priceAsc') {
        sortCoursesByPrice(true);
      } else if (sortBy === 'priceDesc') {
        sortCoursesByPrice(false);
      }
    });

    function sortCoursesByPrice(ascending) {
      const sortedCourses = Array.from(courses).sort((a, b) => {
        const priceA = parseInt(a.querySelector('.actual-price').textContent.replace(/\D/g, ''), 10);
        const priceB = parseInt(b.querySelector('.actual-price').textContent.replace(/\D/g, ''), 10);

        return ascending ? priceA - priceB : priceB - priceA;
      });

      // Remove existing courses
      courses.forEach(course => course.parentNode.removeChild(course));

      // Append sorted courses
      sortedCourses.forEach(course => {
        document.querySelector('.container-course').appendChild(course);
      });
    }
  });