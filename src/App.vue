<script setup>
import { ref, onMounted, watch } from 'vue'
import CardFront from "./components/Card-front.vue";
import CardBack from "./components/Card-back.vue";
import CompleteState from './components/Complete-state.vue';
let name = ref("")
let number = ref("")
let expDateM = ref("")
let expDateY = ref("")
let cvc = ref("")
let index = ref(0)
let state = ref(0)
let oneCicle = ref(false)
let errors = ref({
  input: "",
  error: ""
})
const validateNumber = (newNumber, input) => {
  if (newNumber.length === 5 || newNumber.length === 10 || newNumber.length === 15) {
    return newNumber
  }
  if (newNumber.charAt(newNumber.length - 1).search(/[0-9]/g)) {
    newNumber = newNumber.substring(0, newNumber.length - 1);
    errors.value.error = "Wrong format, numbers only"
    errors.value.input = input
  }
  return newNumber

}

const actionConfirm = () => {
  if (state.value === 0) {
    document.getElementById("form").style.display = "none"
    document.getElementById("complete-state").style.display = "grid"
    state.value = 1
  } else {

    document.getElementById("form").style.display = "grid"
    document.getElementById("complete-state").style.display = "none"
    state.value = 0

    name.value = ""
    number.value = ""
    expDateM.value = ""
    expDateY.value = ""
    cvc.value = ""
  }
}

onMounted(() => {
})

const validateChar = (char) => {
  if (char.charAt(char.length - 1).search(/[0-9]/g)) {
    char = char.substring(0, char.length - 1);
  }
  return char
}
watch(name, (newName) => {
  if (newName.charAt(newName.length - 1).search(/[A-Za-z ]/g)) {
    name.value = newName.substring(0, newName.length - 1);
  }
})
watch(expDateY, (newExpDateY) => {
  expDateY.value = validateChar(newExpDateY)
})
watch(expDateM, (newExpDateM) => {
  if (parseInt(newExpDateM) > 12) {
    newExpDateM = "12"
  }
  expDateM.value = validateChar(newExpDateM)
})
watch(cvc, (newCvc) => {
  cvc.value = validateChar(newCvc)
})

watch(number, (newNumber) => {
  newNumber = validateNumber(newNumber, "number")
  switch (newNumber.length) {
    case 4:
      if (index.value < 5) {
        newNumber += " "
      }
      break;
    case 9:
      if (index.value < 10) {
        newNumber += " "
      }
      break;
    case 14:
      if (index.value < 15) {
        newNumber += " "
      }
      break;
  }
  index.value = newNumber.length
  number.value = newNumber
})
</script>

<template>
  <div class="container">
    <div class="left-side">
      <div class="bg-mask"><img class="bg-desktop" src="../images/bg-main-desktop.png" /></div>
    </div>
    <div class="right-side">
      <div class="form-container" id="form">
        <div class="input-lg-container">
          <label>CARDHOLDER NAME</label>
          <input type="text" v-model="name" placeholder="e.g. Jane Appleseed" required>
        </div>
        <div class="input-lg-container">
          <label>CARD NUMBER</label>
          <input :class="[errors.input === 'number' ? 'error' : '']" type="text" v-model="number" placeholder="e.g. 1234 5678 9123 0000" maxlength="19" @focusout="errors.error = ''">
          <span class="error-messagge" v-if="errors.error !== ''">{{errors.error}}</span>
        </div>
        <div class="input-sm-container">
          <label class="input-md">EXP.DATE (MM/YY)</label>
          <label class="input-md-2">CVC</label>
          <input class="input-sm" type="text" v-model="expDateM" placeholder="MM" id="round" maxlength="2" required>
          <input class="input-sm-2" type="text" v-model="expDateY" placeholder="YY" maxlength="2" required>
          <input class="input-md-2" type="text" v-model="cvc" placeholder="e.g. 123" maxlength="3" required>
        </div>
        <div class="grid-column">
          <button class="btn-confirm" @click="actionConfirm">Confirm</button>
        </div>
      </div>
      <complete-state id="complete-state" class="complete-state" @actionConfirm="actionConfirm"></complete-state>
    </div>
    <div class="card-container">
      <div class="card-mask">
        <card-front class="card-front" :name="name" :number="number" :expDateM="expDateM" :expDateY="expDateY">
        </card-front>
        <card-back class="card-back" :cvc="cvc"></card-back>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  height: 100%;

  .card-container {
    position: fixed;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .card-mask {
      width: 40rem;

      .card-front {
        width: 100%;
      }

      .card-back {
        width: 100%;
        margin: 3rem 0rem 0rem 5rem;
      }
    }
  }

  .right-side {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .form-container {
      width: 35%;
      display: grid;
      gap: 2.2rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin-left: 5rem;

      .grid-column {
        grid-column: 1/5;
        display: flex;
        flex-direction: column;
      }

      .error-messagge {
        font-size: 1.2rem;
        color: var(--input-errors);
      }

      input {
        padding: 1.2rem 0rem 1.2rem 1.4rem;
        border: 1px solid var(--light-grayish-violet);
        border-radius: 10px;
        outline: none;
        color: var(--very-dark-violet);
        letter-spacing: 1px;
        font-size: 1.6rem;
        transition: border 0.5s;

        &:focus {
          border: 1px solid var(--very-dark-violet);
        }
      }

      label {
        font-size: 1.2rem;
        font-weight: bolder;
        letter-spacing: 0.2rem;
      }

      .input-lg-container {
        display: flex;
        flex-direction: column;
        grid-column: 1/5;
        gap: 0.5rem;
        .error {
            &:focus {
              border: 1px solid var(--input-errors);
            }
          }
      }


      .input-sm-container {
        grid-column: 1/5;
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
        gap: 0.5rem 0.3rem;

        .input-sm {
          grid-column: 1/3;
          margin-right: 0.5rem;
        }

        .input-sm-2 {
          grid-column: 3/5;
          margin-right: 0.5rem;
        }

        .input-md {
          grid-column: 1/5;
        }

        .input-md-2 {
          grid-column: 5/9;
          margin-left: 0.5rem;
        }
      }



      .btn-confirm {
        background-color: var(--very-dark-violet);
        border-radius: 10px;
        color: var(--light-grayish-violet);
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.08rem;
        margin-top: 2rem;
        cursor: pointer;

        &:hover {
          background-color: var(--hover-btn-violet);
        }
      }

    }

    .complete-state {

      display: none;
    }
  }


  .left-side {
    width: 45%;
    height: 100%;
    max-width: 45%;

    .bg-mask {
      height: 100%;
      overflow: hidden;

      .bg-desktop {
        width: 100%;
        height: 100%;
      }
    }

  }
}
</style>
