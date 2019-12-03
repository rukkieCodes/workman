<template>
  <v-container fluid>
    <Nav />

    <v-layout justify-center row wrap class="mt-11">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-layout justify-center>
          <v-img
            gradient="150deg, rgba(0,0,0, 0.2), rgba(0,0,0,0.8)"
            src="../../assets/img12.jpg"
            width="80vw"
            height="60vh"
          >
            <v-layout class="px-5 pt-12 mt-12" row wrap justify-center>
              <h1 class="text-center display-1 mt-12 white--text">
                Our Services!!!
              </h1>
            </v-layout>
            <v-layout class="px-5 mt-2" row wrap justify-center>
              <p class="text-center body-1 white--text">
                We render the best service to our customers
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
      <v-flex xs12 sm12 md12 lg12 xl12>
        <Content/>
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
import Nav from "../home/Nav";
import Content from "./Content";
import Footer from "../home/Footer";
export default {
  components: {
    Nav,
    Content,
    Footer
  }
};
</script>
