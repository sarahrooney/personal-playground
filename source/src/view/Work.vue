<template>
  <div class="phone">
    <div class="phone__top"></div>
    <div class="phone__screen phone__screen--start">
      <div class="overlay"></div>

      <div class="work">
        <div class="work__cntnt">
          <h1 class="work__hdr">works</h1>

          <div class="work__app-wrapper">
            <button id="soft-computers" class="work__app" @click="toggle">
              <img 
                src="../assets/images/work/softcomputers_appleiie.jpg"
                alt="soft computers" 
                class="work__app__img">
            </button>

            <button id="daisy-bell" class="work__app" @click="toggle">
              <img 
                src="../assets/images/work/daisybell1.png"
                alt="daisy bell" 
                class="work__app__img">
            </button>

            <button id="paintbucket" class="work__app" @click="toggle">
              <img 
                src="../assets/images/work/paintbucket-icon.jpg"
                alt="paintbucket" 
                class="work__app__img">
            </button>

            <button id="miracle" class="work__app" @click="toggle">
              <img 
                src="../assets/images/work/miracle-screenshot.png"
                alt="MIRACLE" 
                class="work__app__img">
            </button>

            <button id="sandingirl" class="work__app" @click="toggle">
              <img
                src="../assets/images/work/animegirl-screenshot.jpg"
                alt="ANIMEGIRL001"
                class="work__app__img">
            </button>

            <button id="mainframe" class="work__app" @click="toggle">
              <img 
                src="../assets/images/work/mainframe.gif"
                alt="misc visuals" 
                class="work__app__img">
            </button>

            <button id="visuals" class="work__app" @click="toggle">
              <img 
                src="../assets/images/work/visuals1.jpg"
                alt="misc visuals" 
                class="work__app__img">
            </button>

            <button id="voices" class="work__app" @click="toggle">
              <img 
                src="../assets/images/work/voices.jpg"
                alt="voices" 
                class="work__app__img">
            </button>
          </div>

        </div>
      </div>


      <Menu v-bind:work="true" />
    </div>

    <router-link to="/" class="phone__home-button home-button"></router-link>
  </div>

  <dialog id="soft-computers-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>soft computers</h2>
        <span>2018, crochet and ebook</span><br><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="//drive.google.com/file/d/1e0Jpiy0VY_nRIMv5lNxpRv3S8MKNNMP4/view?usp=sharing" target="_blank" class="inline-link inline-link--light"><span>˗ˋ⊹link to ebook⊹ˊ˗</span></a>
      </div>
      <img src="../assets/images/work/softcomputers_appleiie.jpg" alt="crochet of the Apple IIe computer">
      <img src="../assets/images/work/softcomputers_booklet1.jpg" alt="Booklet pages 1 and 2">
      <img src="../assets/images/work/softcomputers_booklet2.jpg" alt="Booklet pages 1 and 2">
    </div>
  </dialog>

  <dialog id="daisy-bell-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>🌼🔔 (daisy bell)</h2>
        <span>2017, crochet and video</span>
      </div>
      <img src="../assets/images/work/daisybellbfa.jpg" alt="Daisy Bell install">
      <img src="../assets/images/work/daisybell1.png" alt="Daisy Bell closeup">
      <div class="video">
        <iframe src="https://player.vimeo.com/video/199761731?h=162649f3a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="DAISY BELL"></iframe>
      </div>
    </div>
  </dialog>

  <dialog id="paintbucket-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>paintbucket (for susan kare)</h2>
        <span>2015, handwoven</span>
      </div>
      <img src="../assets/images/work/paintbucket.jpg" alt="vertical dark pink fabric with susan kare's paintbucket icon woven into it">
    </div>
  </dialog>

  <dialog id="miracle-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>MIRACLE</h2>
        <span>2014</span>
      </div>
      <div class="video video--miracle">
        <iframe src="https://player.vimeo.com/video/119028529?h=25aceb312b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="958" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="MIRACLE"></iframe>
      </div>
    </div>
  </dialog>

  <dialog id="sandingirl-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>ANIMEGIRL001</h2>
        <span>2014</span>
      </div>
      <div class="video">
        <iframe src="https://player.vimeo.com/video/106987342?h=25aceb312b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="958" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="ANIMEGIRL001"></iframe>
      </div>
    </div>
  </dialog>

  <dialog id="mainframe-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>mainframe</h2>
        <span>2014, handwoven cotton fabric, <a href="https://www.deviantart.com/peppermint0123/art/Anime-Base-3-Girl-Using-the-Computer-440563214" target="_blank" class="inline-link inline-link--light"><span>anime base PepperMint0123@deviantart</span></a></span>
      </div>
      <img src="../assets/images/work/mainframe.gif" alt="visuals">
    </div>
  </dialog>

  <dialog id="visuals-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>misc visuals</h2>
        <span>various years, 2018-2021. realtime video using html/css/javascript in browser</span>
      </div>
      <div class="video">
        <iframe src="https://player.vimeo.com/video/504464029?h=802d295110&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="12/05/2020 BITXBIT Online x CONTINUE"></iframe>
      </div>
      <img src="../assets/images/work/visuals1.jpg" alt="visuals" class="half half--left">
      <img src="../assets/images/work/visuals2.jpg" alt="visuals" class="half half--right">
    </div>
  </dialog>

  <dialog id="voices-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item">
      <div class="work__item__title">
        <h2>voices</h2>
        <span>2013, woven ethernet cables</span>
      </div>
      <img src="../assets/images/work/voices.jpg" alt="visuals">
    </div>
  </dialog>

</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'Work',
  components: {
    Menu
  },
  methods: {
    // deferLoad(e) {
    //   e.preventDefault();

    //   const deferLoading = document.querySelectorAll('[data-media-url]')

    //   for (var i = deferLoading.length - 1; i >= 0; i--) {
    //     let mediaUrl = deferLoading[i].getAttribute('data-media-url');
    //     deferLoading[i].setAttribute('src', mediaUrl);
    //   }
    // },
    toggle(e) {
      e.preventDefault();

      const targetId = e.target.id;
      const targetModal = document.querySelector(`#${targetId}-modal`);
      targetModal.classList.remove('hide');
      targetModal.classList.add('show');
    },
    clickHandler(e) {
      // this.deferLoad(e);
      this.toggle(e);
    },
    hide(e) {
      e.preventDefault();

      const target = e.target;
      const targetParent = target.closest('.work__item-wrapper.show');

      console.log(targetParent)

      targetParent.classList.remove('show');
      targetParent.classList.add('hide');
    }
  }
};
</script>
