//Put the first field in the `focus` state
const nameInput = document.querySelector('#name');
nameInput.focus();

// Hide/Display 'Other' input field

 var otherJobInput = document.getElementById('other-title');
 var jobRoles = document.querySelector('select[id="title"]');
 var otherJobInput = document.querySelector('input[name=“job_role_other”]');
 otherJobInput.style.display = 'none';

    jobRoles.addEventListener('change',() => {
        var other = jobRoles[5];
        console.log(other);
        if (other.selected === true) {
            otherJobInput.style.display = 'block';
        } else {
            otherJobInput.style.display = 'none';

        }

    });

// }
// hideOther();


// Set basic text option to color field 

const colorSelect= document.querySelector('#color');
const pleaseSelectTshirt = document.createElement('option');

pleaseSelectTshirt.innerText = "Please Select a T-Shirt Theme";
pleaseSelectTshirt.setAttribute('value', 'select_a_TS_Theme');

colorSelect.prepend(pleaseSelectTshirt);
colorSelect[0].selected = true;

// Hide colors if no design selected
function hideColors() {

    if (colorSelect[0].selected = true) {
        for(let i = 1; i < colorSelect.length; i++) {
            colorSelect[i].style.display = 'none';
        }
    }
    

}
hideColors();

// Show Color depending of which design is selected 

const design = document.getElementById('design');
    
design.addEventListener('change', () => {
        var designPuns = design[1];
        var designHeart = design[2];

        if (designPuns.selected == true) {
            colorSelect[0].style.display = "none";
             for(let i = 1; i <= 3; i++) {
                colorSelect[i].style.display = "block";
         }
             for(let j = 4; j <= 6; j++) {
                colorSelect[j].style.display = "none";
        }
    }

        if (designHeart.selected == true) {
            colorSelect[0].style.display = "none";
            for(let i = 1; i <= 3; i++) {
                colorSelect[i].style.display = "none";
            }
            for(let j = 4; j <= 6; j++) {
                colorSelect[j].style.display = "block";
            }
        }
    });
    
// Register for Activities Section: Additioning Total $ & Disabling conflicting Activites

const activitySection = document.querySelector('fieldset[class="activities"]');
const activityInput = document.querySelectorAll('fieldset[class="activities"] input');
var input = document.querySelectorAll('input[type="checkbox"]');
let totalActivityCost = 0;

let costDisplay = document.createElement('span')
costDisplay.setAttribute('name', 'total');
activitySection.append(costDisplay);
console.log(input);

activitySection.addEventListener('change', (e) => {
    var clicked = e.target;
    var inputAttr = clicked.getAttribute('data-cost');
    totalActivityCost = parseInt(inputAttr, 10);   
    costDisplay.innerText = "Total: $ " + totalActivityCost;

    function totalSum() {
        for(let i = 0; i < 6 ; i++) {
          if (input[i].checked == true && totalActivityCost.value !== NaN) {
            totalActivityCost = parseInt(inputAttr, 10);
            totalActivityCost++
          } else {
              totalActivityCost--
          }
        } 
        }
     function EnableSameActivities() {
         var inputAttrDayTime = clicked.getAttribute('data-day-and-time');
        //  console.log(inputAttrDayTime);
         for (let i = 0; i < input.length ; i++) {
             var elementChecked = input[i].checked;
             console.log(elementChecked);
             if(elementChecked === inputAttrDayTime && elementChecked == true) {
                 input.style.disabled = true; 
             }
         }
         
     }
        
      totalSum();
      EnableSameActivities();

});





// Payment Info 

const paymentSelect = document.querySelector('select[id="payment"]');
const paypalPayment = document.getElementById('paypal');
const bitCoinPayment = document.getElementById('bitcoin');
const cardPayment = document.getElementById('credit-card');

paymentSelect[0].style.display = 'none';
paymentSelect[1].selected = true;
bitCoinPayment.style.display = 'none';
paypalPayment.style.display = 'none';

paymentSelect.addEventListener('change', () => {
    var cardSelect = paymentSelect[1];
    var paypalSelect = paymentSelect[2];
    var bitCoinSelect = paymentSelect[3];

    if(cardSelect.selected === true) {
        cardPayment.style.display = 'block';
        bitCoinPayment.style.display = 'none';
        paypalPayment.style.display = 'none';
    
    } else if (paypalSelect.selected === true) {
        cardPayment.style.display = 'none';
        paypalPayment.style.display = 'block';
        bitCoinPayment.style.display = 'none';
        
     } else if (bitCoinSelect.selected === true) {
        cardPayment.style.display = 'none';
        paypalPayment.style.display = 'none';
        bitCoinPayment.style.display = 'block';
     }


});

// Form Validation 

const form = document.querySelector("form");
const name = document.getElementById('name');
const email = document.getElementById('mail');
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');

const nameValidator = () => {
    let nameValue = name.value;
    if (nameValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

const emailValidator = () => {
    let emailValue = email.value;
    let atI = emailValue.indexOf('@');
    let pointI = emailValue.indexOf('@');
    if (atI > 0 && pointI > 0) {
        return true;
    } else {
        return false;
    }

}

const cardNumValidator = () => {
    let cardNumValue = cardNum.value;
    let cardNumRegex = /[0-9]{12}(?:[0-9]{3})?$/;
    cardNumRegex.test(cardNumValue);


    let zipCodeValue = zipCode.value;
    const zipCodeRegex = /^\d{5}$/;

    let cvvValue = cvv.value; 
    let cvvRegex = /^[0-9]{3}$/;
   
    if (cardNumRegex.test(cardNumValue) === true && zipCodeRegex.test(zipCodeValue) === true && cvvRegex.test(cvvValue) === true ) {
        return true;
    } else {
        return false; 
    }
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValidator();  
   
    if(!nameValidator()) {
        e.preventDefault();
        alert('Please type a name');
    }

    emailValidator();

    if(!emailValidator()) {
        e.preventDefault();
        alert('Please type your email address');

    }

    cardNumValidator();
    if(!cardNumValidator() && paymentSelect[1].selected == true ) {
        e.preventDefault();
        alert('Please check your Card infos');
    }


 console.log('Submit handler is functional!');

});