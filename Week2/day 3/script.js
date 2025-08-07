const data = [
  {
    title: "Royal Cheese Burger with extra Fries",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
    link: "GBP 23.10",
    img: "./image/1.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/2.png",
  },
  {
    title: "The classics for 3",
     desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/3.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/4.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/5.png",
  },
  {
    title: "The classics for 3",
     desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/6.png",
  },
];
const data1 = [
  {
    title: "Royal Cheese Burger with extra Fries",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
    link: "GBP 23.10",
    img: "./image/a1.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a2.png",
  },
  {
    title: "The classics for 3",
     desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a3.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a4.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a5.png",
  },
  {
    title: "The classics for 3",
     desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a6.png",
  },
];
const data2 = [
  {
    title: "Royal Cheese Burger with extra Fries",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
    link: "GBP 23.10",
    img: "./image/b1.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b2.png",
  },
  {
    title: "The classics for 3",
     desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b3.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b4.png",
  },
  {
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b5.png",
  },
  {
    title: "The classics for 3",
     desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b6.png",
  },
];
const container = document.getElementById("boxContainer");

data.forEach(item => {
  const div = document.createElement("div");
  div.className = "box";
  div.innerHTML = `
   <div class="flex items-center justify-between rounded-xl p-4 gap-6 shadow-[0_0_20px_4px_rgba(74,66,66,0.4)] max-w-md mx-auto">

  <!-- Text Content -->
  <div class="w-48 h-32 flex flex-col justify-between">
    <h1 class="font-semibold text-[1.2rem] leading-tight">${item.title}</h1>
    <p class="font-normal text-[.7rem]">${item.desc}</p>
    <h1 class="font-semibold text-[1rem] mt-3">${item.link}</h1>
  </div>

  <!-- Image Box -->
  <div class="relative w-[8rem] h-[7rem]">
    <img src="${item.img}" alt="Big Image" class="rounded-xl w-full h-full object-cover" />
    
    <!-- Add Button Overlay -->
    <div class="absolute bottom-0 right-0 w-[3rem] h-[3rem] bg-white rounded-tl-3xl flex items-center justify-center shadow-md">
      <img src="./image/add.png" alt="Small Image" class="w-8 h-8" />
    </div>
  </div>

</div>
  `;
  container.appendChild(div);
});
const container1 = document.getElementById("boxContainer1");

data1.forEach(item => {
  const div = document.createElement("div");
  div.className = "box";
  div.innerHTML = `
    <div class="flex items-center justify-between rounded-xl p-4 gap-6 shadow-[0_0_20px_4px_rgba(74,66,66,0.4)] max-w-md mx-auto">

  <!-- Text Content -->
  <div class="w-48 h-32 flex flex-col justify-between">
    <h1 class="font-semibold text-[1.2rem] leading-tight">${item.title}</h1>
    <p class="font-normal text-[.7rem]">${item.desc}</p>
    <h1 class="font-semibold text-[1rem] mt-3">${item.link}</h1>
  </div>

  <!-- Image Box -->
  <div class="relative w-[8rem] h-[7rem]">
    <img src="${item.img}" alt="Big Image" class="rounded-xl w-full h-full object-cover" />
    
    <!-- Add Button Overlay -->
    <div class="absolute bottom-0 right-0 w-[3rem] h-[3rem] bg-white rounded-tl-3xl flex items-center justify-center shadow-md">
      <img src="./image/add.png" alt="Small Image" class="w-8 h-8" />
    </div>
  </div>

</div>

  `;
  container1.appendChild(div);
});
const container2 = document.getElementById("boxContainer2");

data2.forEach(item => {
  const div = document.createElement("div");
  div.className = "box";
  div.innerHTML = `
    <div class="flex items-center justify-between rounded-xl p-4 gap-6 shadow-[0_0_20px_4px_rgba(74,66,66,0.4)] max-w-md mx-auto">

  <!-- Text Content -->
  <div class="w-48 h-32 flex flex-col justify-between">
    <h1 class="font-semibold text-[1.2rem] leading-tight">${item.title}</h1>
    <p class="font-normal text-[.7rem]">${item.desc}</p>
    <h1 class="font-semibold text-[1rem] mt-3">${item.link}</h1>
  </div>

  <!-- Image Box -->
  <div class="relative w-[8rem] h-[7rem]">
    <img src="${item.img}" alt="Big Image" class="rounded-xl w-full h-full object-cover" />
    
    <!-- Add Button Overlay -->
    <div class="absolute bottom-0 right-0 w-[3rem] h-[3rem] bg-white rounded-tl-3xl flex items-center justify-center shadow-md">
      <img src="./image/add.png" alt="Small Image" class="w-8 h-8" />
    </div>
  </div>

</div>


  `;
  container2.appendChild(div);
});




document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.getElementById('scrollContainer');
  const boxes = document.querySelectorAll('.max-w-md');
  
  // More accurate width calculation
  const boxStyle = window.getComputedStyle(boxes[0]);
  const boxWidth = boxes[0].offsetWidth + 
                  parseInt(boxStyle.marginLeft) + 
                  parseInt(boxStyle.marginRight);

  let isScrolling = false;

  function scrollLeft() {
    if (isScrolling) return;
    isScrolling = true;
    
    const newPos = scrollContainer.scrollLeft - boxWidth;
    
    if (newPos <= 0) {
      // Scroll to end if at start
      scrollContainer.scrollTo({
        left: scrollContainer.scrollWidth,
        behavior: 'smooth'
      });
    } else {
      scrollContainer.scrollTo({
        left: newPos,
        behavior: 'smooth'
      });
    }
    
    setTimeout(() => { isScrolling = false; }, 500);
  }

  function scrollRight() {
    if (isScrolling) return;
    isScrolling = true;
    
    const newPos = scrollContainer.scrollLeft + boxWidth;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    if (newPos >= maxScroll) {
      // Scroll to start if at end
      scrollContainer.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      scrollContainer.scrollTo({
        left: newPos,
        behavior: 'smooth'
      });
    }
    
    setTimeout(() => { isScrolling = false; }, 500);
  }

  // Initialize
  scrollContainer.scrollLeft = 0;

  // Add event listeners properly
  document.querySelector('.left-button').addEventListener('click', scrollLeft);
  document.querySelector('.right-button').addEventListener('click', scrollRight);
});