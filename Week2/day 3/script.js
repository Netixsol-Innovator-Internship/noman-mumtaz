let quantity;
const ITEM_PRICE = 23.1; // All items cost £23.10
const data = [
  {
    title: "Royal Cheese Burger with extra Fries 1",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
    link: "GBP 23.10",
    img: "./image/1.png",
  },
  {
    title: "The classics for 1",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/2.png",
  },
  {
    title: "The classics for 2",
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
    title: "The classics for 4",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/5.png",
  },
  {
    title: "The classics for 5",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/6.png",
  },
];
const data1 = [
  {
    title: "Royal Cheese Burger with extra Fries 2",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
    link: "GBP 23.10",
    img: "./image/a1.png",
  },
  {
    title: "The classics Fries 1",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a2.png",
  },
  {
    title: "The classics Fries 2",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a3.png",
  },
  {
    title: "The classics Fries 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a4.png",
  },
  {
    title: "The classics Fries 4",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a5.png",
  },
  {
    title: "The classics Fries 5",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/a6.png",
  },
];
const data2 = [
  {
    title: "Royal Cheese Burger with extra Fries 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
    link: "GBP 23.10",
    img: "./image/b1.png",
  },
  {
    title: "The classics Drink 1",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b2.png",
  },
  {
    title: "The classics Drink 2",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b3.png",
  },
  {
    title: "The classics Drink 3",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b4.png",
  },
  {
    title: "The classics Drink 4",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b5.png",
  },
  {
    title: "The classics Drink 5",
    desc: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    link: "GBP 23.10",
    img: "./image/b6.png",
  },
];

// Initialize containers
const container = document.getElementById("boxContainer");
const container1 = document.getElementById("boxContainer1");
const container2 = document.getElementById("boxContainer2");

// Function to create item cards
function createItemCard(item) {
  const div = document.createElement("div");
  div.className = "box";
  div.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center justify-between rounded-xl p-3 md:p-4 gap-4 md:gap-6 shadow-[0_0_10px_2px_rgba(74,66,66,0.2)] md:shadow-[0_0_20px_4px_rgba(74,66,66,0.4)] max-w-md mx-auto">
      <!-- Text Content -->
      <div class="w-full sm:w-48 h-auto sm:h-32 flex flex-col justify-between">
        <h1 class="font-semibold text-base md:text-[1.2rem] leading-tight">${item.title}</h1>
        <p class="font-normal text-xs md:text-[.7rem] mt-1 md:mt-0">${item.desc}</p>
        <h1 class="font-semibold text-sm md:text-[1rem] mt-2 md:mt-3">${item.link}</h1>
      </div>

      <!-- Image Box -->
      <div class="relative w-full sm:w-[8rem] h-[7rem] mt-3 sm:mt-0">
        <img src="${item.img}" alt="${item.title}" class="rounded-xl w-full h-full object-cover" />
        
        <!-- Add Button Overlay -->
        <div onclick="additemburger('${item.title}','${item.img}')" class="absolute bottom-0 right-0 w-10 h-10 md:w-[3rem] md:h-[3rem] bg-white rounded-tl-xl md:rounded-tl-3xl flex items-center justify-center shadow-md cursor-pointer">
          <img src="./image/add.png" alt="Add" class="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>
    </div>
  `;
  return div;
}

// Render items for each container
data.forEach((item) => container.appendChild(createItemCard(item)));
data1.forEach((item) => container1.appendChild(createItemCard(item)));
data2.forEach((item) => container2.appendChild(createItemCard(item)));

// Scroll functionality for reviews
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollContainer");
  const boxes = document.querySelectorAll(".max-w-md");

  if (boxes.length > 0) {
    const boxStyle = window.getComputedStyle(boxes[0]);
    const boxWidth = boxes[0].offsetWidth + 
                    parseInt(boxStyle.marginLeft) + 
                    parseInt(boxStyle.marginRight);

    let isScrolling = false;

    function scrollLeft() {
      if (isScrolling) return;
      isScrolling = true;

      const newPos = scrollContainer.scrollLeft - boxWidth;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (newPos <= 0) {
        scrollContainer.scrollTo({
          left: maxScroll,
          behavior: "smooth"
        });
      } else {
        scrollContainer.scrollTo({
          left: newPos,
          behavior: "smooth"
        });
      }

      setTimeout(() => {
        isScrolling = false;
      }, 500);
    }

    function scrollRight() {
      if (isScrolling) return;
      isScrolling = true;

      const newPos = scrollContainer.scrollLeft + boxWidth;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (newPos >= maxScroll) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        scrollContainer.scrollTo({
          left: newPos,
          behavior: "smooth"
        });
      }

      setTimeout(() => {
        isScrolling = false;
      }, 500);
    }

    // Initialize
    scrollContainer.scrollLeft = 0;

    // Add event listeners
    document.querySelector(".left-button").addEventListener("click", scrollLeft);
    document.querySelector(".right-button").addEventListener("click", scrollRight);
  }
});

// Cart functionality
const pizzas = [];
const cart = {};

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  pizzas.forEach((pizza) => {
    const quantity = cart[pizza.title] || 0;
    
    if (quantity > 0) {
      totalItems += quantity;
      total += quantity * pizza.price;

      const item = document.createElement("div");
      item.className = "mb-2";

      item.innerHTML = `
        <div class="group flex justify-between items-center bg-[#D9D9D999] hover:bg-[#03081F] p-2 md:p-3 rounded-lg">
          <div class="flex items-center gap-2 md:gap-3">
            <img src="${pizza.img}" alt="${pizza.title}" class="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white object-cover">
            <span class="font-bold text-sm md:text-[1.1rem] group-hover:text-[#FC8A06] truncate max-w-[100px] md:max-w-none">${pizza.title}</span>
          </div>
          
          <div class="flex items-center gap-1 md:gap-2">
            <button onclick="changeQuantity('${pizza.title}', -1)" 
                    class="bg-[#03081F] group-hover:bg-[#D9D9D999] text-white text-center font-bold w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full text-xs leading-none">
              -
            </button>
            <span class="font-bold w-8 h-8 md:w-10 md:h-10 rounded-lg flex justify-center items-center bg-white text-center text-xs md:text-sm">${quantity}</span>
            <button onclick="changeQuantity('${pizza.title}', 1)" 
                    class="bg-[#03081F] group-hover:bg-[#D9D9D999] text-white text-center font-bold w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full text-xs leading-none">
              +
            </button>
          </div>
        </div>
      `;

      container.appendChild(item);
    }
  });

  document.getElementById("total-price").textContent = `£${total.toFixed(2)}`;
  updateCartIndicator(totalItems);
}

function updateCartIndicator(itemCount) {
  const cartButton = document.getElementById('a');
  const cartText = document.getElementById('b');
  const mobileCartText = document.getElementById('b-mobile');
  
  if (itemCount > 0) {
    cartButton?.classList?.remove('bg-black');
    cartButton?.classList?.add('bg-[#FC8A06]');
    
    cartText.textContent = itemCount;
    if (mobileCartText) mobileCartText.textContent = itemCount;
  } else {
    cartButton?.classList?.remove('bg-[#FC8A06]');
    cartButton?.classList?.add('bg-black');
    
    cartText.textContent = 'Cart';
    if (mobileCartText) mobileCartText.textContent = 'Cart';
  }
}

function changeQuantity(title, delta) {
  if (!(title in cart)) cart[title] = 0;
  cart[title] += delta;
  if (cart[title] < 0) cart[title] = 0;
  
  renderCart();
}

function additemburger(name, img) {
  const exists = pizzas.some(pizza => pizza.title === name);
  
  if (!exists) {
    pizzas.push({
      title: name,
      price: ITEM_PRICE,
      img: img
    });
    
    if (!cart[name]) {
      cart[name] = 0;
    }
  }
  
  changeQuantity(name, 1);
  
  // Visual feedback
  const cartBtn = document.querySelector('[onclick="openModal()"]');
  if (cartBtn) {
    cartBtn.classList.add('animate-bounce');
    setTimeout(() => cartBtn.classList.remove('animate-bounce'), 500);
  }
}

// Modal functions
function openModal() {
  document.getElementById("cart-modal").classList.remove("hidden");
  renderCart();
}

function closeModal() {
  document.getElementById("cart-modal").classList.add("hidden");
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  updateCartIndicator(0);
});