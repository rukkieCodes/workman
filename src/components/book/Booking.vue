<template>
  <v-container class="ma-0 pa-0 my-12">
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
      <v-card flat>
        <v-tabs centered color="indigo accent-4">
          <v-tab style="width: 50%;">
            <p class="text-capitalize text-center grey--text text--darken-4">
              Welding
            </p>
          </v-tab>
          <v-tab style="width: 50%;">
            <p class="text-capitalize text-center grey--text text--darken-4">
              Plumbing
            </p>
          </v-tab>
          <v-tab-item>
            <v-card width="90vw" flat>
              <v-card-text class="px-10">
                <v-layout class="mt-5" row wrap>
                  <h1 class="headline grey--text text--darken-4">
                    Our Welding Agents
                  </h1>
                </v-layout>
                <v-layout class="mt-5" row wrap>
                  <v-card width="100vw" class="mx-auto">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="../../assets/av1.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Jason Oner</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-icon @click="openDialog" color="indigo"
                            >mdi-contacts</v-icon
                          >
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-layout>
                <v-layout class="mt-5" row wrap>
                  <v-card width="100vw" class="mx-auto">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="../../assets/av1.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Jason Oner</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-icon @click="openDialog" color="indigo"
                            >mdi-contacts</v-icon
                          >
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-layout>
                <v-layout class="mt-5" row wrap>
                  <v-card width="100vw" class="mx-auto">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="../../assets/av1.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Jason Oner</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-icon @click="openDialog" color="indigo"
                            >mdi-contacts</v-icon
                          >
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-layout>
                <v-layout class="mt-5" row wrap>
                  <v-card width="100vw" class="mx-auto">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="../../assets/av1.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Jason Oner</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-icon @click="openDialog" color="indigo"
                            >mdi-contacts</v-icon
                          >
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-layout>
                <v-layout class="mt-5" row wrap>
                  <v-card width="100vw" class="mx-auto">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="../../assets/av1.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Jason Oner</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-icon @click="openDialog" color="indigo"
                            >mdi-contacts</v-icon
                          >
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-layout>
                <v-layout class="mt-5" row wrap>
                  <v-card width="100vw" class="mx-auto">
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="../../assets/av1.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Jason Oner</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <v-icon @click="openDialog" color="indigo"
                            >mdi-contacts</v-icon
                          >
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text class="px-10">
                <v-layout row wrap>
                  <h1 class="headline grey--text text--darken-4">
                    Plumbing
                  </h1>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md6 lg6 xl6>
                    <p>
                      As experts in the IT staffing world, we employ the top
                      pros in staff augmentation and IT services. Our internal
                      teams work hard every day to find the best, most qualified
                      candidates. Then, we match the right candidates with the
                      right organizations based on candidate’s individual
                      skills, experiences, and interests and the organization’s
                      specific needs.
                    </p>
                    <Form />
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 xl6>
                    <v-img
                      src="../../assets/img5.jpg"
                      width="90%"
                      position="center"
                      class="mx-auto"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
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

                <v-btn @click="send" dark color="grey darken-4" depressed small fab>
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
    booking:{
      name: null,
      email: null,
      address: null,
      situation: null,
      report: null,
      user: fb.auth().currentUser.uid
    }
  }),
  firestore() {
    return {
      service: db.collection("services")
    };
  },
  methods: {
    send(){
      this.$firestore.service.add(this.booking)
      .then(docRef => {
          console.log(docRef);
        })
        .catch(error => {
          console.log(error);
        });
    },

    openDialog() {
      this.dialog = true;
    }
  }
};
</script>
