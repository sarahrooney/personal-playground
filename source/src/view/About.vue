<template>
  <div class="phone">
    <h1 class="sr-only">Sarah Rooney | About</h1>
    <div class="phone__top"></div>
    <div class="phone__screen phone__screen--start">
      <div class="overlay"></div>

      <div class="about">
        <div class="about__cntnt">
          <h2>29/shethey/chicago</h2>
          <div class="about__cv">
            <a class="inline-link cv" href="https://docs.google.com/document/d/1xBTE-XqEK6XkJDirgz8oyHLrDkxgKjRqUS8ZSMpZAf8/edit?usp=sharing" target="_blank"><span>˗ˋ⊹CV⊹ˊ˗</span></a>
          </div>
          <p>my work explores correlations between personal identity and personalized technology.</p>
          <p>i'm a fontend web developer in love with css currently working at <a href="//patagonia.com/" target="_blank"><span>Patagonia</span></a>.</p>
          <p>& i collaborate with the folks at <a href="//netizen.org/" target="_blank"><span>netizen.org</span></a> designing & styling <a href="//netnet.studio/" target="_blank"><span>netnet.studio</span></a>, an open source hypermedia tool for learning and playing with code in the browser.</p>
        </div>

        <div class="about__contact">
          <div class="about__contact__item">
            💌 
            <button class="about__contact__email inline-link" @click="copyEmail">
              <span class="email">sarahrrooney@gmail.com</span>
            </button>
            <span class="copied">copied! <img src="../assets/images/bubble-pop.gif"></span>
          </div>
          <div class="about__contact__item">
            📸 
            <a class="inline-link" href="//www.instagram.com/watercaress_/" target="_blank">
              <span>@watercaress_</span>
            </a>
          </div>
        </div>
      </div>

      <Menu :about="true" />
    </div>

    <router-link to="/" class="phone__home-button home-button"></router-link>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

  export default {
    name: 'About',
    components: {
      Menu
    },
    methods: {
      copyEmail(event) {
        const el = document.createElement('textarea');  
        el.value = 'sarahrrooney@gmail.com';
        el.setAttribute('readonly', '');                
        el.style.position = 'absolute';              
        el.style.left = '-9999px';                      
        document.body.appendChild(el);                  
        const selected =  document.getSelection().rangeCount > 0  ? document.getSelection().getRangeAt(0) : false;                                    
        el.select();                                    
        document.execCommand('copy');                   
        document.body.removeChild(el);                  
        if (selected) {                                 
          document.getSelection().removeAllRanges();    
          document.getSelection().addRange(selected);   
        }

        const copiedEl = document.querySelector('.copied');
        copiedEl.classList.add('show');

        setTimeout(() => copiedEl.classList.remove('show'), 3000);
      }
    },
    data() {
      return{
        className: "about",
      }
    },
  }
</script>
