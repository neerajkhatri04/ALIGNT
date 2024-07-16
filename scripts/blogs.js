const blogData = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1610018556010-6a11691bc905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Maximizing Customer Insights with RFM Segmentation: A Step-by-Step Guide",
    description:
      "In the competitive world of business, understanding your customers' buying behaviors is crucial. One highly effective method for gaining this understanding is RFM segmentation.",
    date: "July 15, 2024",
    blogLink: "blogPage2.html",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1667372283545-1261fb5c427a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Transforming Data with DBT: A Comprehensive Guide",
    description:
      "In the world of data analytics, transforming raw data into actionable insights is a crucial step. Data Build Tool (DBT) has emerged as a powerful solution to simplify and enhance this transformation process.",
    date: "December 28, 2019",
    blogLink: "blogPage.html",
  },
  {
    id: 3,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1663838843887-d664812f1a85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver eligibility for free Covid-19 vaccination",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, dolorum eligendi porro aperiam beatae ratione quisquam repudiandae placeat ipsa rem quaerat consectetur facilis dolor aliquam cum consequuntur quis adipisci reiciendis itaque officiis!",
    date: "December 28, 2019",
  },
  {
    id: 4,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1720436921186-8fbf4f1dad35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Driver eligibility for free Covid-19 vaccination",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, dolorum eligendi porro aperiam beatae ratione quisquam repudiandae placeat ipsa rem quaerat consectetur facilis dolor aliquam cum consequuntur quis adipisci reiciendis itaque officiis!",
    date: "December 28, 2019",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Safety protocols for truck drivers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.",
    date: "April 15, 2020",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Health benefits for truck drivers",
    description:
      "Phasellus eleifend neque sit amet velit convallis, a ullamcorper orci dapibus. Integer a eros vel orci gravida blandit.",
    date: "June 12, 2021",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Top 10 truck stops in the USA",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "July 04, 2022",
  },
  {
    id: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The importance of regular truck maintenance",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
    date: "August 19, 2023",
  },
  {
    id: 9,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "New trucking regulations in 2024",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    date: "January 01, 2024",
  },
  {
    id: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "How to manage long-haul trucking fatigue",
    description:
      "Etiam vel neque nec dui mattis luctus. Duis sit amet arcu at diam molestie commodo.",
    date: "February 18, 2023",
  },
  {
    id: 11,
    imgUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovations in truck technology",
    description: "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
    date: "March 10, 2022",
  },
  {
    id: 12,
    imgUrl:
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Benefits of fleet management systems",
    description:
      "Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam.",
    date: "April 25, 2020",
  },
  {
    id: 13,
    imgUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Truck driver fitness tips",
    description:
      "Phasellus eleifend neque sit amet velit convallis, a ullamcorper orci dapibus. Integer a eros vel orci gravida blandit.",
    date: "May 15, 2021",
  },
  {
    id: 14,
    imgUrl:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "How to stay connected on the road",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "June 05, 2021",
  },
  {
    id: 15,
    imgUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The best truck accessories in 2023",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
    date: "July 23, 2023",
  },
  {
    id: 16,
    imgUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The impact of electric trucks",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    date: "August 18, 2023",
  },
  {
    id: 17,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683134105531-42032fc66937?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The future of autonomous trucking",
    description:
      "Etiam vel neque nec dui mattis luctus. Duis sit amet arcu at diam molestie commodo.",
    date: "September 15, 2023",
  },
  {
    id: 18,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683134105531-42032fc66937?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Top 5 truck brands in 2024",
    description: "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
    date: "October 20, 2023",
  },
  {
    id: 19,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683134105531-42032fc66937?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Challenges faced by truck drivers",
    description:
      "Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam.",
    date: "November 10, 2023",
  },
  {
    id: 20,
    imgUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Improving truck driver safety",
    description:
      "Phasellus eleifend neque sit amet velit convallis, a ullamcorper orci dapibus. Integer a eros vel orci gravida blandit.",
    date: "December 25, 2023",
  },
];

const blogCards = document.querySelector("#blog__cards");

let itemsPerPage = 4;
let curPage = 1;

function renderBlogCards() {
  blogCards.innerHTML = "";

  const indexOfLastPage = curPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const curItems = blogData.slice(indexOfFirstPage, indexOfLastPage);

  curItems.forEach((item) => {
    blogCards.innerHTML += ` <div class="blog__card">
              <div class="blog__image__container">
                <a href=${item?.blogLink ? item.blogLink : ""}>
                <img
                  class="blog__image"
                  src=${item.imgUrl}
                  alt="blog-img"
                />
              </a>
              </div>
              <h1 class="blog__title">
                <a href=${item?.blogLink ? item.blogLink : ""}>
                  ${item.title}
                </a>
              </h1>
              <p class="blog__desc">
                ${item.description.slice(0, 100)}...
              </p>
              <p class="blog__date">${item.date}</p>
            </div>`;
  });

  updateButtons();
}

function updateButtons() {
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");

  // Disable the previous button if on the first page
  if (curPage === 1) {
    prevButton.disabled = true;
    prevButton.classList.add("disabled");
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove("disabled");
  }

  // Disable the next button if on the last page
  if (curPage * itemsPerPage >= blogData.length) {
    nextButton.disabled = true;
    nextButton.classList.add("disabled");
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove("disabled");
  }
}

renderBlogCards();

function pagination() {
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");

  const prevBtn = () => {
    if ((curPage - 1) * itemsPerPage) {
      curPage--;
      renderBlogCards();
      document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
    }
  };
  const nextBtn = () => {
    if ((curPage * itemsPerPage) / blogData.length) {
      curPage++;
      renderBlogCards();
      document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
    }
  };

  prevButton.addEventListener("click", prevBtn, false);
  nextButton.addEventListener("click", nextBtn, false);
}

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

pagination();
subscribe();
