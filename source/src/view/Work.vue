<template>
  <div class="phone">
    <div class="phone__top"></div>
    <div class="phone__screen">
      <div class="overlay"></div>

      <div class="work">
        <div class="work__cntnt">
          <h1>works</h1>

          <div class="work__item">
            <div class="work__title">
              <h2>soft computers</h2>
              <span>2018, crochet and ebook</span>
            </div>
            <img src="../assets/images/work/softcomputers_appleiie.jpg" alt="crochet of the Apple IIe computer">
            <a href="//drive.google.com/file/d/1e0Jpiy0VY_nRIMv5lNxpRv3S8MKNNMP4/view?usp=sharing" target="_blank" class="inline-link"><span>link to ebook -></span></a>
            <img src="../assets/images/work/softcomputers_booklet1.jpg" alt="Booklet pages 1 and 2">
            <img src="../assets/images/work/softcomputers_booklet2.jpg" alt="Booklet pages 1 and 2">
          </div>

          <div class="work__item">
            <div class="work__title">
              <h2>🌼🔔 (daisy bell)</h2>
              <span>2017, crochet and video</span>
            </div>
            <img src="../assets/images/work/daisybellbfa.jpg" alt="Daisy Bell install">
            <img src="../assets/images/work/daisybell1.png" alt="Daisy Bell closeup">
            <div class="video">
              <iframe src="https://player.vimeo.com/video/199761731?h=162649f3a2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="DAISY BELL"></iframe>
            </div>
          </div>

          <div class="work__item">
            <div class="work__title">
              <h2>paintbucket (for susan kare)</h2>
              <span>2015, handwoven</span>
            </div>
            <img src="../assets/images/work/paintbucket.jpg" alt="a weaving with susna kare's paintbucket icon on it">
          </div>

          <div class="work__item">
            <div class="work__title">
              <h2>MIRACLE</h2>
              <span>2014</span>
            </div>
            <div class="video video--miracle">
              <iframe src="https://player.vimeo.com/video/119028529?h=25aceb312b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="958" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="MIRACLE"></iframe>
            </div>
          </div>

          <div class="work__item">
            <div class="work__title">
              <h2>misc visuals</h2>
              <span>various years, realtime video using html/css/javascript in browser and recorded/edited with premiere pro</span>
            </div>
            <div class="video">
              <iframe src="https://player.vimeo.com/video/504464029?h=802d295110&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="12/05/2020 BITXBIT Online x CONTINUE"></iframe>
            </div>
            <img src="../assets/images/work/visuals1.jpg" alt="visuals" class="half half--left">
            <img src="../assets/images/work/visuals2.jpg" alt="visuals" class="half half--right">
          </div>

        </div>
      </div>

      <Menu v-bind:work="true" />
    </div>

    <router-link to="/" class="phone__home-button home-button"></router-link>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'Work',
  components: {
    Menu
  }
};
</script>
