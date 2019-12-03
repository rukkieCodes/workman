<template>
  <v-container fluid class="home">
    <Nav />

    <v-layout justify-center row wrap class="mt-11">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-layout justify-center>
          <v-img
            gradient="150deg, rgba(0,0,0, 0.2), rgba(0,0,0,0.8)"
            src="../../assets/img4.jpg"
            width="80vw"
            height="60vh"
          >
            <v-layout class="px-5 pt-12 mt-12" row wrap justify-center>
              <h1 class="text-center display-1 mt-12 white--text">
                Welcome to our Care!!!
              </h1>
            </v-layout>
            <v-layout class="px-5 mt-2" row wrap justify-center>
              <p class="text-center body-1 white--text">
                We are made for Service Delivery, Reliability and Satifactory
              </p>
            </v-layout>

            <v-layout justify-center row wrap>
              <Form />
            </v-layout>
          </v-img>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout class="mt-12" row wrap>
      <v-flex>
        <Advert />
      </v-flex>
    </v-layout>

    <v-layout class="mt-12" row wrap>
      <v-flex>
        <v-img src="../../assets/img2.jpg" height="60vh"> </v-img>
      </v-flex>
    </v-layout>

    <v-layout class="px-10 mt-12" row wrap>
      <v-flex class="px-12" xs12 sm12 md6 lg6 xl6>
        <h1 class="display-1 grey--text text--darken-4">Our ways</h1>
        <p class="grey--text text--darken-4">
          We are independent in our ways of work...we try as much as possible
          for our clients to see that we offer best service to them
        </p>
        <p class="grey--text text--darken-4">
          Everyday Better....Everyday great
        </p>
      </v-flex>

      <v-flex class="px-12" xs12 sm12 md6 lg6 xl6>
        <v-card flat>
          <v-tabs centered color="indigo accent-4">
            <v-tab style="width: 50%;">
              <p class="grey--text text--darken-4">Plumbing</p>
            </v-tab>
            <v-tab style="width: 50%;">
              <p class="grey--text text--darken-4">Welding</p>
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-layout row wrap>
                    <h1 class="headline grey--text text--darken-4">Plumbing</h1>
                  </v-layout>
                  <v-layout row wrap>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam, dignissimos ratione expedita facere dolore,
                      dolorem soluta voluptas qui voluptates numquam harum nam
                      vel maxime aliquid, necessitatibus error modi nulla? Unde.
                    </p>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-layout row wrap>
                    <h1 class="headline grey--text text--darken-4">Welding</h1>
                  </v-layout>
                  <v-layout row wrap>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquam, dignissimos ratione expedita facere dolore,
                      dolorem soluta voluptas qui voluptates numquam harum nam
                      vel maxime aliquid, necessitatibus error modi nulla? Unde.
                    </p>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout class="mt-12" row wrap>
      <v-flex>
        <v-img src="../../assets/img3.jpg" height="60vh"> </v-img>
      </v-flex>
    </v-layout>

    <v-layout class="mt-12 px-10" row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h1 class="display-1 grey--text text--darken-4">CREATIVE MIND</h1>
        <p>
          We are independent in our ways of work...we try as much as possible
          for our clients to see that we offer best service to them Everyday
          Better....Everyday great
        </p>
      </v-flex>
    </v-layout>

    <v-layout class="mt-12 mb-n3" row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <Footer/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Nav from "./Nav";
import Form from "./Form";
import Advert from "./Advert";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Nav,
    Form,
    Advert,
    Footer
  }
};
</script>

<style lang="stylus" scoped>
.home
  .img1
    height 40vh
    width 100vw !important
    background-image url('~@/assets/img4.jpg')
    background-position center center
    background-attachment fixed
    background-repeat no-repeat
</style>
