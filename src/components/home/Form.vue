<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-layout justify-center>
          <v-btn
            class="white--text mx-2 text-capitalize"
            color="indigo accent-4"
            depressed
            @click="dialog1 = true"
            >Sign In | Sign Up</v-btn
          >
        </v-layout>

        <v-snackbar
          :color="color"
          v-model="snackbar"
          top
          right
          class="my-1"
          :timeout="5000"
          :multi-line="true"
        >
          <span :class="snackText">{{ text }}</span>
          <v-btn right :color="snackBtn" icon @click="snackbar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-snackbar>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-dialog
        width="40vw"
        :fullscreen="$vuetify.breakpoint.xsOnly"
        v-model="dialog1"
        persistent
      >
        <v-card>
          <v-card-title>
            <span class="headline grey--text text--darken-4">Sign In</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    color="grey darken-4"
                    class="grey--text text--darken-4"
                  >
                    <v-icon
                      class="grey--text text--darken-4"
                      slot="prepend-inner"
                      >mdi-email</v-icon
                    >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="grey darken-4"
                    class="grey--text text--darken-4"
                    label="Password*"
                    type="password"
                  >
                    <v-icon
                      class="grey--text text--darken-4"
                      slot="prepend-inner"
                      >mdi-lock</v-icon
                    >
                  </v-text-field>
                  <div>
                    <p
                      @click="openDialog2"
                      class="grey--text text--darken-4"
                      style="cursor: pointer;"
                    >
                      <b>Click to Sign Up</b>
                    </p>
                  </div>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn
                    dark
                    color="grey darken-4"
                    small
                    depressed
                    fab
                    @click="dialog1 = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-btn
                    dark
                    color="grey darken-4"
                    small
                    depressed
                    fab
                    :loading="loading2"
                  >
                    <v-icon>mdi-location-enter</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog
        class="dialog2"
        width="40vw"
        :fullscreen="$vuetify.breakpoint.xsOnly"
        v-model="dialog2"
        persistent
      >
        <v-card>
          <v-card-title>
            <span class="headline grey--text text--darken-4">Sign Up</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    color="grey darken-4"
                    class="grey--text text--darken-4"
                    required
                  >
                    <v-icon
                      class="grey--text text--darken-4"
                      slot="prepend-inner"
                      >mdi-email</v-icon
                    >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    color="grey darken-4"
                    class="grey--text text--darken-4"
                    required
                  >
                    <v-icon
                      class="grey--text text--darken-4"
                      slot="prepend-inner"
                      >mdi-lock</v-icon
                    >
                  </v-text-field>
                  <br />
                  <div>
                    <p
                      @click="openDialog1"
                      class="grey--text text--darken-4"
                      style="cursor: pointer;"
                    >
                      <b>Click to Sign In!</b>
                    </p>
                  </div>
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
                    @click="closeDialog2"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-btn
                    dark
                    color="grey darken-4"
                    depressed
                    small
                    fab
                    :loading="loading1"
                  >
                    <v-icon>mdi-location-enter</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog1: false,
    dialog2: false,
    isMobile: false,
    loading1: false,
    loading2: false,
    snackbar: false,
    text: "",
    color: null,
    snackText: null,
    snackBtn: null
  }),

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, {
        passive: true
      });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, {
      passive: true
    });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
    closeDialog1() {
      this.dialog1 = false;
    },
    closeDialog2() {
      this.dialog2 = false;
    },
    openDialog2() {
      this.dialog1 = false;
      this.dialog2 = true;
    },
    openDialog1() {
      this.dialog2 = false;
      this.dialog1 = true;
    }
  }
};
</script>
