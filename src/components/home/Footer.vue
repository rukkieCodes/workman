<template>
  <div class="footer">
    <v-card flat>
      <v-footer raised padless>
        <v-card flat tile width="100%" class="indigo accent-4 text-center">
          <v-card-text>
            <v-icon small class="white--text"
              >mdi-copyright</v-icon
            >

            <span class="mx-1 white--text">{{
              new Date().getFullYear()
            }}</span>
            <strong class="subtitle-1 white--text"
              >Workerman</strong
            >
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </div>
</template>
