<template>
  <v-container class="ma-0 pa-0 my-12">
    <v-snackbar
      :color="color"
      v-model="snackbar"
      :top="true"
      :right="true"
      :timeout="5000"
      :multi-line="true"
    >
      <span :class="snackText">{{ text }}</span>
      <v-btn right :color="snackBtn" icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
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
      <v-flex class="mt-5" xs12 sm12 md-6 lg4 xl3>
        <v-card class="mx-auto" max-width="400">
          <v-img height="100%" src="../../assets/av1.jpg"> </v-img>
          <v-card-title class="grey--text text--darken-3"
            >Jonathan Alexander</v-card-title
          >

          <v-card-actions>
            <v-btn @click="openDialog" color="indigo" text>
              <v-icon left>mdi-phone</v-icon>
              <span right>Contact</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex class="mt-5" xs12 sm12 md-6 lg4 xl3>
        <v-card class="mx-auto" max-width="400">
          <v-img height="100%" src="../../assets/av2.jpg"> </v-img>
          <v-card-title class="grey--text text--darken-3"
            >Mason Ethan</v-card-title
          >
          <v-card-actions>
            <v-btn @click="openDialog" color="indigo" text>
              <v-icon left>mdi-phone</v-icon>
              <span right>Contact</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex class="mt-5" xs12 sm12 md-6 lg4 xl3>
        <v-card class="mx-auto" max-width="400">
          <v-img height="100%" src="../../assets/av3.jpg"> </v-img>
          <v-card-title class="grey--text text--darken-3"
            >Alexander Jayden</v-card-title
          >
          <v-card-actions>
            <v-btn @click="openDialog" color="indigo" text>
              <v-icon left>mdi-phone</v-icon>
              <span right>Contact</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      
      <v-flex class="mt-5" xs12 sm12 md-6 lg4 xl3>
        <v-card class="mx-auto" max-width="400">
          <v-img height="100%" src="../../assets/av4.jpg"> </v-img>
          <v-card-title class="grey--text text--darken-3"
            >Maverick Justin</v-card-title
          >
          <v-card-actions>
            <v-btn @click="openDialog" color="indigo" text>
              <v-icon left>mdi-phone</v-icon>
              <span right>Contact</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      
      <v-flex class="mt-5" xs12 sm12 md-6 lg4 xl3>
        <v-card class="mx-auto" max-width="400">
          <v-img height="100%" src="../../assets/av5.jpg"> </v-img>
          <v-card-title class="grey--text text--darken-3"
            >Nolan Justin</v-card-title
          >
          <v-card-actions>
            <v-btn @click="openDialog" color="indigo" text>
              <v-icon left>mdi-phone</v-icon>
              <span right>Contact</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex class="mt-5" xs12 sm12 md-6 lg4 xl3>
        <v-card class="mx-auto" max-width="400">
          <v-img height="100%" src="../../assets/av6.jpg"> </v-img>
          <v-card-title class="grey--text text--darken-3"
            >Wyatt Rudah</v-card-title
          >
          <v-card-actions>
            <v-btn @click="openDialog" color="indigo" text>
              <v-icon left>mdi-phone</v-icon>
              <span right>Contact</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex class="mt-5" xs12 sm12 md-6 lg4 xl3>
        <v-card class="mx-auto" max-width="400">
          <v-img height="100%" src="../../assets/av7.jpg"> </v-img>
          <v-card-title class="grey--text text--darken-3"
            >Jesse Alan</v-card-title
          >
          <v-card-actions>
            <v-btn @click="openDialog" color="indigo" text>
              <v-icon left>mdi-phone</v-icon>
              <span right>Contact</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog
      width="40vw"
      :fullscreen="$vuetify.breakpoint.xsOnly"
      v-model="dialog"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="headline grey--text text--darken-4">Book an Agent</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name"
                  v-model="booking.name"
                  color="grey darken-4"
                  class="grey--text text--darken-4"
                >
                  <v-icon class="grey--text text--darken-4" slot="prepend-inner"
                    >mdi-account</v-icon
                  >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  v-model="booking.email"
                  color="grey darken-4"
                  class="grey--text text--darken-4"
                >
                  <v-icon class="grey--text text--darken-4" slot="prepend-inner"
                    >mdi-email</v-icon
                  >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="House Address"
                  v-model="booking.address"
                  color="grey darken-4"
                  class="grey--text text--darken-4"
                >
                  <v-icon class="grey--text text--darken-4" slot="prepend-inner"
                    >mdi-globe-model</v-icon
                  >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Situation"
                  v-model="booking.situation"
                  color="grey darken-4"
                  class="grey--text text--darken-4"
                >
                  <v-icon class="grey--text text--darken-4" slot="prepend-inner"
                    >mdi-help</v-icon
                  >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  class="grey--text text--darken-4"
                  v-model="booking.report"
                  name="input-7-1"
                  placeholder="What would you like to book us for"
                >
                  <v-icon class="grey--text text--darken-4" slot="prepend-inner"
                    >mdi-message</v-icon
                  >
                </v-textarea>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                  dark
                  color="grey darken-4"
                  depressed
                  small
                  fab
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>

                <v-btn
                  @click="send"
                  :loading="loading"
                  dark
                  color="grey darken-4"
                  depressed
                  small
                  fab
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { db, fb } from "../../firebaseConfig";
export default {
  data: () => ({
    tab: null,
    dialog: null,
    booking: {
      name: null,
      email: null,
      address: null,
      situation: null,
      report: null,
      userId: fb.auth().currentUser.uid,
      filedAt: new Date()
    },
    loading: null,
    snackbar: false,
    text: "",
    color: null,
    snackText: null,
    snackBtn: null
  }),
  firestore() {
    return {
      service: db.collection("services")
    };
  },
  methods: {
    send() {
      this.loading = true;
      this.$firestore.service
        .add(this.booking)
        .then(docRef => {
          console.log(docRef);
          this.snackbar = true;
          this.text = "We have taken note of your service";
          this.color = "white";
          this.snackText = "indigo--text";
          this.snackBtn = "indigo";
          this.loading = false;
          this.dialog = false;
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(error);
          this.snackbar = true;
          this.text = errorMessage;
          this.color = "red darken-4";
          this.snackText = "white--text";
          this.snackBtn = "white";
          this.loading = false;
        });
    },

    openDialog() {
      this.dialog = true;
    }
  }
};
</script>
