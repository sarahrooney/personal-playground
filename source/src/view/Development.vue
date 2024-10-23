<template>
  <div class="phone">
    <div class="phone__top"></div>
    <div class="phone__screen phone__screen--start">
      <div class="overlay"></div>

      <div class="dev">
        <div class="dev__cntnt">
            <h1 class="dev__hdr">frontend dev</h1>

            <div class="dev__item">
              <div class="dev__title">
                <h2>the apollo theater</h2> <span>@ clique studios</span>
              </div>
              <button class="view" id="apollo" @click="clickHandler">
                <img src="../assets/images/dev/apollo_1.jpg" alt="screenshot of Apollo's homepage">
              </button>
              <a class="inline-link" href="//www.apollotheater.org/" target="_blank"><span>apollotheater.org</span></a><br>
              <!-- <span class="dev__tag">wordpress</span> -->
            </div>

            <div class="dev__item">
              <div class="dev__title">
                <h2>done in an r1</h2> <span>@ someoddpilot</span>
              </div>
              <button class="view" id="r1" @click="clickHandler">
                <img src="../assets/images/dev/r1_poster.jpg" alt="screenshot of Patagonia's Done in an R1 site">
              </button>
              <!-- <span class="dev__tag">vue | single page application promoting patagonia's r1 jacket</span> -->
            </div>

        </div>
      </div>
      <Menu :dev="true"/>
    </div>

    <router-link to="/" class="phone__home-button home-button"></router-link>
  </div>

  <dialog id="apollo-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item work__item--dev">
      <div class="video" style="display:none;">
        <div class="video" style="display:none;">
          <iframe src="https://player.vimeo.com/video/1022519821" width="1180" height="620" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Apollo Homepage"></iframe>
      </div>
    </div>
  </dialog>

  <dialog id="r1-modal" class="work__item-wrapper hide">
    <div class="work__item-overlay" @click="hide"></div>
    <div class="work__item-nav">
      <button class="close" @click="hide">
        <span class="close__line"></span>
        <span class="close__line"></span>
      </button>
    </div>
    <div class="work__item work__item--dev">
      <div class="video" style="display:none;">
        <iframe src="https://player.vimeo.com/video/1021102022" width="1180" height="620" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Done in an R1 Scrollthrough"></iframe>
      </div>
    </div>
  </dialog>

</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'Development',
  components: {
    Menu
  },
  methods: {
    videoLoad(e) {
      e.preventDefault();

      const videoLoading = document.querySelectorAll('.video')

      if (videoLoading) {
        videoLoading.forEach(i => {
          i.style.display = "block";
        })
        // for (var i = videoLoading.length - 1; i >= 0; i--) {
          // let mediaUrl = videoLoading[i].getAttribute('data-media-url');
          // videoLoading[i].setAttribute('src', mediaUrl);
        // }
      }
    },
    toggle(e) {
      e.preventDefault();

      const targetId = e.target.closest('.view').id;
      const targetModal = document.querySelector(`#${targetId}-modal`);
      targetModal.classList.remove('hide');
      targetModal.classList.add('show');
    },
    clickHandler(e) {
      this.videoLoad(e);
      this.toggle(e);
    },
    hide(e) {
      e.preventDefault();

      const target = e.target;
      const targetParent = target.closest('.work__item-wrapper.show');

      targetParent.classList.remove('show');
      targetParent.classList.add('hide');
    },
  },
};
</script>
