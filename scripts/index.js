console.log('connected');

let seatCount = 0;
let totalPrice = 0;


const allSeats = document.getElementsByClassName('seat');
for (const seat of allSeats) {
    seat.addEventListener('click', function () {
        if(seat.classList.contains('bg-[#1DD100]')){
            return;
        }
        
        
        document.getElementById('next').removeAttribute('disabled')

        if (seatCount < 4) {
            seatCount++;
        }
        else {
            alert('No More');
            return;
        }
        seat.classList.add('bg-[#1DD100]');


        
        const seatCountIncreased = document.getElementById('seat-count');
        seatCountIncreased.innerText = seatCount;

        const totalSeat = parseInt(document.getElementById('total-seat').innerText);
        const availableSeat = totalSeat - 1;
        document.getElementById('total-seat').innerText = availableSeat;



        const seatListContainer = document.getElementById('seat-list-container');
        const seatTittle = seat.innerText;

        const div = document.createElement('div');
        div.classList.add('div');

        const p = document.createElement('p');
        p.innerText = seatTittle;
        div.appendChild(p);

        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        div.appendChild(p2);

        const p3 = document.createElement('p');
        p3.innerText = '550';
        div.appendChild(p3);

        seatListContainer.appendChild(div);

        // total price
        const convertedTotalPrice = parseInt(document.getElementById('total-price').innerText);
        const price = 550;
        totalPrice = convertedTotalPrice + price;
        document.getElementById('total-price').innerText = totalPrice;

        // Grand total price
        document.getElementById('grand-total-price').innerText = totalPrice;



        if (seatCount === 4) {
            document.getElementById('apply').removeAttribute('disabled')
        }

    })

}

const couponButton = document.getElementById('apply');

couponButton.addEventListener('click', function () {
    const couponInputFieldValue = document.getElementById('coupon-input-field').value;
    const couponCode = couponInputFieldValue.split(' ').join('').toUpperCase();
    if (couponCode === 'NEW15') {
        const discount = totalPrice * 0.15;
        document.getElementById('grand-total-price').innerText = totalPrice - discount;
        document.getElementById('input-and-button').classList.add('hidden');
        
        document.getElementById('discount-price').innerText = discount;
        document.getElementById('total-price-div').classList.remove('hidden');
        
        
    }
    else if(couponCode === 'COUPLE20'){
        const discount = totalPrice * 0.2;
        document.getElementById('grand-total-price').innerText = totalPrice - discount;
        document.getElementById('input-and-button').classList.add('hidden');

        document.getElementById('discount-price').innerText = discount;
        document.getElementById('total-price-div').classList.remove('hidden');
    }
    else {
        alert('Invalid Coupon');
    }


})

function modal() {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');

}

function success(){
    document.getElementById('success').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
}

console.log(document.getElementById('number-input-field'))
