<template>
  <v-container class="cases mt-12">
    <v-row>
      <v-col cols="12" class="my-4">
        <v-card color="transparent" flat height="auto">
          <v-toolbar dense flat color="indigo accent-4" dark>
            <v-toolbar-title>Your Reports</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-text-field
              label="Search..."
              background-color="indigo accent-4"
              class="mt-7"
              v-model="search"
              solo
              flat
              dense
            ></v-text-field>
          </v-toolbar>

          <v-card-text>
            <v-layout justify-center row wrap>
              <v-expansion-panels>
                <v-expansion-panel v-for="file in filterServices" :key="file.id">
                  <v-expansion-panel-header class="ma-0 mt-n2 px-5 py-2 pa-0">
                    <v-layout row wrap>
                      <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                        <p class="ml-5 mt-5 body-1">{{ file.situation }}</p>
                      </v-flex>
                    </v-layout>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card class="mx-auto" max-width="100vw" flat tile>
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Report</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.report
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-layout row wrap justify-center>
      <v-flex> </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db } from "../../firebaseConfig";
export default {
  name: "booked",
  data: () => ({
    services: [],
    search: ""
  }),

  firestore() {
    return {
      services: db.collection("services").orderBy("filedAt")
    };
  },

  computed: {
    filterServices() {
      return this.services.filter(situation => {
        return situation.situation.match(this.search.toUpperCase());
      });
    }
  }
};
</script>
