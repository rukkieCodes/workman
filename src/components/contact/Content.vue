<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h1 class="display-1 grey--text text--darken-4">Company Info</h1>
        <p class="body-1 grey--text text--darken-3">
          Companies often find it extremely difficult to hire the right
          candidate for the right job as most candidates lack necessary
          technical competencies that are required in this ever changing
          technology As the demand for Cloud Computing, Automation & Application
          development increases there is a growing landscape. skill gap and
          complexity.
        </p>
      </v-flex>
    </v-layout>

    <v-layout class="mt-10" row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <h1 class="text-center headline grey--text text--darken-4">
          <span class="indigo--text">SEND US</span> A MESSAGE AND WE’LL FIND
          <span class="indigo--text">SOLUTION</span> FOR YOU
        </h1>
      </v-flex>
    </v-layout>

    <v-layout class="px-12" row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field label="Email" required>
          <v-icon class="grey--text text--darken-4" slot="prepend-inner"
            >mdi-email</v-icon
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field label="Phone" required>
          <v-icon class="grey--text text--darken-4" slot="prepend-inner"
            >mdi-phone</v-icon
          >
        </v-text-field>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-textarea
          class="grey--text text--darken-4"
          name="input-7-1"
          label="Message"
          no-resize
          hint="How would u like people to think about you work"
        >
          <v-icon class="grey--text text--darken-4" slot="prepend-inner"
            >mdi-message</v-icon
          ></v-textarea
        >
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Choose a date you need me for"
              readonly
              v-on="on"
            >
              <v-icon class="grey--text text--darken-4" slot="prepend-inner"
                >mdi-calendar</v-icon
              ></v-text-field
            >
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-layout justify-center>
          <v-btn class="white--text" color="indigo accent-4" depressed
            >Make Request</v-btn
          >
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    date: new Date().toISOString().substr(0, 7)
  })
};
</script>
