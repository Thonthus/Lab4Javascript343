// VICTOR ไม้แบดมินตัน รุ่น DX-510CL / DX-520CL
const numberDisplay730 = document.getElementById("numberDisplay730");
const decreaseButton730 = document.getElementById("decreaseButton730");
const increaseButton730 = document.getElementById("increaseButton730");

let currentNumber730 = 0;

decreaseButton730.addEventListener("click", () => {
  if (currentNumber730 > 0) {
    currentNumber730--;
    updateNumberDisplay730();
  }
});

increaseButton730.addEventListener("click", () => {
  currentNumber730++;
  updateNumberDisplay730();
});

function updateNumberDisplay730() {
  numberDisplay730.textContent = currentNumber730;
}



// VICTOR ไม้แบดมินตัน รุ่น TK-HMR
const numberDisplay21 = document.getElementById("numberDisplay21");
const decreaseButton21 = document.getElementById("decreaseButton21");
const increaseButton21 = document.getElementById("increaseButton21");

let currentNumber21 = 0;

decreaseButton21.addEventListener("click", () => {
  if (currentNumber21 > 0) {
    currentNumber21--;
    updateNumberDisplay21();
  }
});

increaseButton21.addEventListener("click", () => {
  currentNumber21++;
  updateNumberDisplay21();
});

function updateNumberDisplay21() {
  numberDisplay21.textContent = currentNumber21;
}


// VICTOR ไม้แบดมินตัน รุ่น DX-9X
const numberDisplay55 = document.getElementById("numberDisplay55");
const decreaseButton55 = document.getElementById("decreaseButton55");
const increaseButton55 = document.getElementById("increaseButton55");

let currentNumber55 = 0;

decreaseButton55.addEventListener("click", () => {
  if (currentNumber55 > 0) {
    currentNumber55--;
    updateNumberDisplay55();
  }
});

increaseButton55.addEventListener("click", () => {
  currentNumber55++;
  updateNumberDisplay55();
});

function updateNumberDisplay55() {
  numberDisplay55.textContent = currentNumber55;
}

// VICTOR ลูกแบดมินตัน GOLD (12ลูก)
const numberDisplay50 = document.getElementById("numberDisplay50");
const decreaseButton50 = document.getElementById("decreaseButton50");
const increaseButton50 = document.getElementById("increaseButton50");

let currentNumber50 = 0;

decreaseButton50.addEventListener("click", () => {
  if (currentNumber50 > 0) {
    currentNumber50--;
    updateNumberDisplay50();
  }
});

increaseButton50.addEventListener("click", () => {
  currentNumber50++;
  updateNumberDisplay50();
});

function updateNumberDisplay50() {
  numberDisplay50.textContent = currentNumber50;
}



// function calculator() {
//     let final_summ;
//     let summ = (currentNumber730*730) + (currentNumber21*2140) + (currentNumber55*5580) + (currentNumber50*500);
//     if(summ > 1000) {
//         let final_summ = summ*(90/100);
//     }else {
//         let final_summ = summ;
//     }
// }




const modal = document.getElementById("myModal");
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const orderDetailsElement = document.getElementById("orderDetails");
    const priceBefElement = document.getElementById("priceBef");
    const discountMessageElement = document.getElementById("discountMessage");
    const totalPriceElement = document.getElementById("totalPrice");

    openModalButton.addEventListener("click", () => {
      let orderDetails = "";
      let selectedProducts = [];

      if (currentNumber730 > 0) {
        selectedProducts.push(`VICTOR ไม้แบดมินตัน รุ่น DX-510CL / DX-520CL : ${currentNumber730} ชิ้น`);
      }
      if (currentNumber21 > 0) {
        selectedProducts.push(`VICTOR ไม้แบดมินตัน รุ่น TK-HMR : ${currentNumber21} ชิ้น`);
      }
      if (currentNumber55 > 0) {
        selectedProducts.push(`VICTOR ไม้แบดมินตัน รุ่น DX-9X : ${currentNumber55} ชิ้น`);
      }
      if (currentNumber50 > 0) {
        selectedProducts.push(`VICTOR ลูกแบดมินตัน GOLD (12ลูก) : ${currentNumber50} ชิ้น`);
      }

      if (selectedProducts.length > 0) {
        orderDetails = selectedProducts.join("<br>");
        orderDetailsElement.innerHTML = orderDetails;
      } else {
        orderDetailsElement.textContent = "ยังไม่ได้เลือกสินค้า";
      }

      const summ = (currentNumber730 * 730.00) + (currentNumber21 * 2140.00) + (currentNumber55 * 5580.00) + (currentNumber50 * 500.00);
      let final_summ = summ;
      let discountMessage = "";
      let priceBefMessage = "";

      if (summ > 1000) {
        final_summ = summ * (90 / 100);
        priceBefMessage = `รวม ${summ.toFixed(2)} บาท`;
        discountMessage = `ส่วนลด 10% : ${(summ-(summ*(90/100))).toFixed(2)} บาท`;
      } else {
        discountMessage = "ไม่มีส่วนลด";
      }
      priceBefElement.textContent = priceBefMessage;
      discountMessageElement.textContent = discountMessage;
      totalPriceElement.textContent = `ทั้งหมด ${final_summ.toFixed(2)} บาท`;

      modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });




    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
        interval : 3000, // Time in milliseconds between slide transitions
        wrap: true,     // Whether the carousel should loop
        // Add more options as needed
    });



