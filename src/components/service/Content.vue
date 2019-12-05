<template>
  <div>
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
          <v-card flat>
            <v-card-text class="px-10">
              <v-layout row wrap>
                <h1 class="headline grey--text text--darken-4">Welding</h1>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12 md6 lg6 xl6>
                  <v-img
                    src="../../assets/img4.jpg"
                    width="90%"
                    position="center"
                    class="mx-auto my-10"
                  ></v-img>
                </v-flex>
                <v-flex xs12 sm12 md6 lg6 xl6>
                  <p>
                    Workerman is a one-stop shop for Maintenance Professional
                    Services, We specialize in Professional welding service, and
                    Plumbing Services
                  </p>
                  <p>
                    Founded in 2019 in Nigeria, Rivers, Workerman is a privately
                    owned company with many consultants throughout the
                    continental US along with a strong offshore presence. We
                    support both national and international clients.
                  </p>
                  <p>
                    At Workerman, we focus on serving both clients and
                    candidates from a wide range of industries.
                  </p>
                  <Form/>
                </v-flex>
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
                    As experts in the IT staffing world, we employ the top pros
                    in staff augmentation and IT services. Our internal teams
                    work hard every day to find the best, most qualified
                    candidates. Then, we match the right candidates with the
                    right organizations based on candidate’s individual skills,
                    experiences, and interests and the organization’s specific
                    needs.
                  </p>
                  <Form/>
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
  </div>
</template>

<script>
import Form from "../home/Form";
export default {
  components: {
    Form
  }
}
</script>