<template>
  <div class="login-form-container">
    <div class="title-container">
      <h1>Sign in into Haeger Time</h1>
    </div>
    <form accept-charset="utf-8" @submit.prevent="handleLogin()">
      <label>Email:</label>
      <input type="text" v-model="email" required>

      <label>Password:</label>
      <input type="password" v-model="password" required>
      <div v-if="passwordError || emailError" class="error">Email and password are incorrect</div>

      <div class="submit">
        <button>Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email : '',
      password : '',
      emailError: '',
      passwordError: ''
    }
  },
  methods: {
    handleLogin() {
      // validate email
      this.emailError = this.email.includes('@') ? '' : 'Email is invalid'
      // validate password
      this.passwordError = this.password.length > 0 ? '' : 'Password is required!'
    }
  }
}
</script>

<style scoped>
  form {
    max-width: 420px;
    background: white;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    color: #2c3e50;
    display: inline-block;
    margin: 15px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  button {
    background : #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: red;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: 300;
  }
  .login-form-container {
    max-width: 450px;
    margin: 10px auto;
    background-color: white;
    border-radius: 10px;
  }
  .title-container h1{
    text-align: center;
    font-family: 'Helvetica','Arial', sans-serif;
    font-size: 28px;
    padding: 20px;
  }
</style>