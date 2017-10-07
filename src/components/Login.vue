<template>
    <div class="uk-position-center uk-card uk-card-default uk-card-body uk-width-1-2">
      <form @submit.prevent="submit">
        <h3 class="uk-card-title">login</h3>
        <input class="uk-input" type="email" required name="email" placeholder="email"/>
        <input class="uk-input" type="password" required name="password" placeholder="password"/>
        <input class="uk-button uk-margin" type="submit" value="login"/>
      </form>
    </div>
</template>

<script>
  export default {
    methods: {
      submit (e) {
        this.$firebase
        .auth()
        .signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
        .then(res => {
          var user = this.$firebase.auth().currentUser
          console.log(user)
        })
        .catch(res => {
          var user = this.$firebase.auth().currentUser
          console.log(user)
        })
      }
    }
  }
</script>
