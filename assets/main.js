const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello World!',
      imgUrl: './assets/img/vue-img.jpeg'
    };
  }
}).mount('#app');
