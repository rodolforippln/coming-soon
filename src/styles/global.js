import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");

body {
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  background-image: url(https://images.unsplash.com/photo-1508389377389-b8221c0bcc9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  background-position: top top;
  background-size: cover;
  margin: 0;
}

.App {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: rgb(49, 49, 177);
  background: linear-gradient(
    0deg,
    rgba(49, 49, 177, 1) 0%,
    rgba(49, 49, 177, 1) 50%,
    rgba(49, 49, 177, 0.6) 100%
  );
}

.container {
  width: 100%;
  margin: 15% auto;
}
.col-4 {
  width: 25%;
  float: left;
}

h1 {
  font-size: 38px;
  text-transform: uppercase;
  line-height: 1;
}

@media (min-width: 768px) {
  .container {
    width: 1100px;
  }
  h1 {
    font-size: 58px;
  }
}



`

export default GlobalStyle