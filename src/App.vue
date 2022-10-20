<script setup>

</script>

<template>
  <div class="container">
    <section class="left-side">
      <div class="bg-mask"><img class="bg-desktop" src="../images/bg-main-desktop.png" /></div>
    </section>
    <section class="right-side">
      <div class="form-container">
        <div class="row-form">
          <label>CARDHOLDER NAME</label>
          <input type="text" v-model="name" placeholder="e.g. Jane Appleseed">
        </div>
        <div class="row-form">
          <label>CARD NUMBER</label>
          <input type="text" v-model="number" placeholder="e.g. 1234 5678 9123 0000">
        </div>
        <div class="row-form-sm">
          <div class="row-form">
            <div class="row-form-sm"><label>EXP.DATE (MM/YY)</label><label>CVC</label></div>
            <div class="row-form-sm">
              <input class="input-sm" type="text" v-model="expDateM" placeholder="MM">
              <input class="input-sm" type="text" v-model="expDateY" placeholder="YY">
              <input class="input-md" type="text" v-model="cvc" placeholder="e.g. 123">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;

  .right-side {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .form-container {
      width: 40%;

      input {
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        border: 0.1px solid var(--dark-grayish-violet);
        border-radius: 5px;
      }

      label {
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-right: 5.5rem;
      }

      .row-form {
        display: flex;
        flex-direction: column;
        justify-content: end;
        gap: 0.5rem;
        margin-top: 1rem;

        .input-sm {
          width: 40%;
        }

        .input-md {
          width: 80%;
          margin-left: 1rem;
        }
      }

      .row-form-sm {
        display: flex;
        gap: 0.5rem;
      }
    }
  }

}

.left-side {
  width: 45%;
  height: 100vh;

  .bg-mask {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bg-desktop {
    width: 100%;
    height: 100%;
  }
}
</style>
