<template>
 <div class="navbar">
   <router-link to="/">Home</router-link>
   <div class="dropdown">
     <button class="dropbtn">TimeTable
       <i class="fa fa-caret-down"></i>
     </button>
     <div class="dropdown-content">
       <a href="#">Management</a>
     </div>
   </div>
   <div class="dropdown">
     <button class="dropbtn">Project
       <i class="fa fa-caret-down"></i>
     </button>
     <div class="dropdown-content">
       <a href="#">My Project</a>
     </div>
   </div>
   <div class="dropdown">
     <button class="dropbtn">Customer
       <i class="fa fa-caret-down"></i>
     </button>
     <div class="dropdown-content">
       <a href="#">All Customer</a>
       <a href="#">Create New Customer</a>
     </div>
   </div>
   <router-link to="/login" class="navbar-end">Login</router-link>
   <router-link to="/profile" class="navbar-end">Profile</router-link>
   <router-link to="/logout" class="navbar-end">Logout</router-link>
 </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .navbar {
    overflow: hidden;
    background-color: deepskyblue;
    font-family: 'Helvetica', 'Arial', sans-serif;
  }

  .navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  .dropdown {
    float: left;
    overflow: hidden;
  }
  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  .navbar a:hover, .dropdown:hover .dropbtn {
    background-color: orange;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  .dropdown-content a:hover {
    background-color: orchid;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .navbar .navbar-end {
    float: right;
  }
</style>