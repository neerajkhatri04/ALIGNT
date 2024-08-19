// const blogData = [
//   {
//     id: 1,
//     imgUrl: "../images/topic1-image.jpeg",
//     title:
//       "Maximizing Customer Insights with RFM Segmentation: A Step-by-Step Guide",
//     description:
//       "In the competitive world of business, understanding your customers' buying behaviors is crucial. One highly effective method for gaining this understanding is RFM segmentation.",
//     date: "July 15, 2024",
//     blogLink: "topic1.html",
//   },
//   {
//     id: 2,
//     imgUrl: "../images/topic2-image.png",
//     title: "Transforming Data with DBT: A Comprehensive Guide",
//     description:
//       "In the world of data analytics, transforming raw data into actionable insights is a crucial step. Data Build Tool (DBT) has emerged as a powerful solution to simplify and enhance this transformation process.",
//     date: "December 28, 2019",
//     blogLink: "topic2.html",
//   },
// ];

const blogCards = document.querySelector("#blog__cards");

let itemsPerPage = 4;
let curPage = 1;

// function renderBlogCards() {
//   blogCards.innerHTML = "";

//   const indexOfLastPage = curPage * itemsPerPage;
//   const indexOfFirstPage = indexOfLastPage - itemsPerPage;
//   const curItems = blogData.slice(indexOfFirstPage, indexOfLastPage);

//   curItems.forEach((item) => {
//     blogCards.innerHTML += ` <div class="blog__card">
//               <div class="blog__image__container">
//                 <a href=${item?.blogLink ? item.blogLink : ""}>
//                 <img
//                   class="blog__image"
//                   src=${item.imgUrl}
//                   alt="blog-img"
//                 />
//               </a>
//               </div>
//               <h1 class="blog__title">
//                 <a href=${item?.blogLink ? item.blogLink : ""}>
//                   ${item.title}
//                 </a>
//               </h1>
//               <p class="blog__desc">
//                 ${item.description.slice(0, 100)}...
//               </p>
//               <p class="blog__date">${item.date}</p>
//             </div>`;
//   });
// }

// updateButtons();
// function updateButtons() {
//   const prevButton = document.getElementById("prev-btn");
//   const nextButton = document.getElementById("next-btn");

//   // Disable the previous button if on the first page
//   if (curPage === 1) {
//     prevButton.disabled = true;
//     prevButton.classList.add("disabled");
//   } else {
//     prevButton.disabled = false;
//     prevButton.classList.remove("disabled");
//   }

//   // Disable the next button if on the last page
//   if (curPage * itemsPerPage >= blogData.length) {
//     nextButton.disabled = true;
//     nextButton.classList.add("disabled");
//   } else {
//     nextButton.disabled = false;
//     nextButton.classList.remove("disabled");
//   }
// }

// renderBlogCards();

// function pagination() {
//   const prevButton = document.getElementById("prev-btn");
//   const nextButton = document.getElementById("next-btn");

//   const prevBtn = () => {
//     if ((curPage - 1) * itemsPerPage) {
//       curPage--;
//       renderBlogCards();
//       document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const nextBtn = () => {
//     if ((curPage * itemsPerPage) / blogData.length) {
//       curPage++;
//       renderBlogCards();
//       document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   prevButton.addEventListener("click", prevBtn, false);
//   nextButton.addEventListener("click", nextBtn, false);
// }

function subscribe() {
  const subBtn = document.querySelector(".subBtn");
  const successText = document.querySelector(".successText");

  //Add style on button click
  subBtn.addEventListener("click", () => {
    successText.style.color = "gray";
    subBtn.innerHTML = "Thanks for subscribing";
    setTimeout(() => {
      successText.style.color = "transparent";
    }, 2000);
  });
}

let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
  const links = gsap.utils.toArray("li a");

  links.forEach((link) => {
    let linkTl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.5 },
    });

    const headingStart = link.querySelector(".primary");
    const headingEnd = link.querySelector(".secondary");
    const date = link.querySelector(".date");
    const lineDash = link.querySelector(".line2");

    linkTl
      .to(headingStart, {
        yPercent: -200,
      })
      .to(
        headingEnd,
        {
          yPercent: -150,
        },
        "<"
      )
      .to(
        lineDash,
        {
          scaleX: 2,
        },
        "<"
      )
      .to(
        date,
        {
          y: 0,
        },
        "<"
      );

    linkTl.pause();

    link.addEventListener("mouseenter", () => {
      linkTl.play();
    });
    link.addEventListener("mouseleave", () => {
      linkTl.reverse();
    });
  });
});

// pagination();
subscribe();
