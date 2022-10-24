<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import CardFront from "./components/Card-front.vue";
import CardBack from "./components/Card-back.vue";
import CompleteState from './components/Complete-state.vue';

let name = ref("")
let number = ref("")
let expDateM = ref("")
let expDateY = ref("")
let cvc = ref("")
let index = ref(0)
let state = ref(true)
let oneCicle = ref(false)
let errors = ref([])

const validateBlank = () => {
  if (name.value === "") {
    errors.value.push({ input: 'name', error: "Can't be blank" })
  }
  if (number.value === "") {
    errors.value.push({ input: 'number', error: "Can't be blank" })
  }
  if (expDateM.value === "") {
    errors.value.push({ input: 'expDateM', error: "Can't be blank" })
  }
  if (expDateY.value === "") {
    errors.value.push({ input: 'expDateY', error: "Can't be blank" })
  }
  if (cvc.value === "") {
    errors.value.push({ input: 'cvc', error: "Can't be blank" })
  }
}
const validateLarge = (newValue, input) => {
  let large = newValue.length
}
const validateLetter = (newValue, input) => {

  let large = newValue.length
  if (large !== 0) {
    if (newValue.charAt(large - 1).search(/[A-Za-z ]/g)) {
      newValue = newValue.substring(0, large - 1);
      errors.value.push({ input: input, error: "Wrong format, letters only" })
    } else {
      errors.value = errors.value.filter(error => error.input !== input)
    }

  }
  return newValue
}
const validateInputNumber = (newValue, input) => {
  let large = newValue.length
  if (large !== 0) {
    switch (large) {
      case 4:
        if (index.value < 5) {
          newValue += " "
        }
        break;
      case 9:
        if (index.value < 10) {
          newValue += " "
        }
        break;
      case 14:
        if (index.value < 15) {
          newValue += " "
        }
        break;
    }
    if (large !== 5 && large !== 10 && large !== 15) {
      if (newValue.charAt(large - 1).search(/[0-9]/g)) {
        newValue = newValue.substring(0, large - 1);
        errors.value.push({ input: input, error: "Wrong format, numbers only" })
      } else {
        errors.value = errors.value.filter(error => error.input !== input)
      }
    }


  }
  index.value = newValue.length
  return newValue
}
const validateOnlyNumber = (newValue, input) => {
  let large = newValue.length
  if (large !== 0) {
    if (newValue.charAt(large - 1).search(/[0-9]/g)) {
      newValue = newValue.substring(0, large - 1);
      errors.value.push({ input: input, error: "Wrong format, numbers only" })
    } else {
      errors.value = errors.value.filter(error => error.input !== input)
    }
  }
  return newValue
}


const actionConfirm = () => {
  if (!state) {
    name.value = ""
    number.value = ""
    expDateM.value = ""
    expDateY.value = ""
    cvc.value = ""
  }
  if (errors.value.length === 0) {
    state.value = !state.value
  }
}

onMounted(() => {
})
</script>

<template>
  <div class="container">
    <div class="left-side">
      <div class="bg-mask"><img class="bg-desktop" src="../images/bg-main-desktop.png" /></div>
    </div>
    <div class="right-side">
      <div :class="[state ? 'form-container' : 'none']">
        <div class="input-lg-container">
          <label>CARDHOLDER NAME</label>
          <input :class="[errors.find((x) => x.input === 'name') ? 'error' : '']" type="text" v-model="name"
            @input="name = validateLetter(name, 'name')" placeholder="e.g. Jane Appleseed" required>
          <span class="error-messagge" v-if="errors.find((x) => x.input === 'name')">{{ errors.find((x) => x.input ===
              'name').error
          }}</span>
        </div>
        <div class="input-lg-container">
          <label>CARD NUMBER</label>
          <input :class="[errors.find((x) => x.input === 'number') ? 'error' : '']" type="text"
            placeholder="e.g. 1234 5678 9123 0000" maxlength="19" v-model="number"
            @input="number = validateInputNumber(number, 'number')">
          <span class="error-messagge" v-if="errors.find((x) => x.input === 'number')">{{ errors.find((x) => x.input ===
              'number').error
          }}</span>
        </div>
        <div class="input-sm-container">
          <label class="input-md">EXP.DATE (MM/YY)</label>
          <label class="input-md-2">CVC</label>

          <input :class="['input-sm', errors.find((x) => x.input === 'expDateM') ? 'error' : '']" type="text"
            v-model="expDateM" @input="expDateM = validateOnlyNumber(expDateM, 'expDateM')" placeholder="MM"
            maxlength="2" required>

          <input :class="['input-sm-2', errors.find((x) => x.input === 'expDateY') ? 'error' : '']" type="text"
            v-model="expDateY" @input="expDateY = validateOnlyNumber(expDateY, 'expDateY')" placeholder="YY"
            maxlength="2" required>

          <input :class="['input-md-2', errors.find((x) => x.input === 'cvc') ? 'error' : '']" type="text" v-model="cvc"
            @input="cvc = validateOnlyNumber(cvc, 'cvc')" placeholder="e.g. 123" maxlength="3" required>


          <span class="error-messagge text-center"
            v-if="errors.find((x) => x.input === 'expDateM' || x.input === 'cvc' || x.input === 'expDateY')">
            {{ errors.find((x) => x.input === 'expDateM' || x.input === 'cvc' || x.input === 'expDateY').error }}</span>
        </div>
        <div class="grid-column">
          <button class="btn-confirm" @click="validateBlank(); actionConfirm()">Confirm</button>
        </div>
      </div>
      <complete-state :class="[!state ? '' : 'none']" @actionConfirm="actionConfirm">
      </complete-state>
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
        grid-column: 1/9;
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

.error {
  border: 1px solid var(--input-errors) !important;
}

.text-center {
  text-align: center;
}

.none {
  display: none;
}
</style>
