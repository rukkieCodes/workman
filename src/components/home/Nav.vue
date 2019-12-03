<template>
  <div>
    <v-app-bar :fixed="true" color="indigo accent-4" dark>
      <v-toolbar-title>
        Workerman
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        tile
        class="hidden-sm-and-down mx-2 text-capitalize"
        color="indigo accent-4"
        depressed
        to="/"
        >Home</v-btn
      >
      <v-btn
        tile
        class="hidden-sm-and-down mx-2 text-capitalize"
        color="indigo accent-4"
        depressed
        to="/about"
        >About</v-btn
      >
      <v-btn
        tile
        class="hidden-sm-and-down mx-2 text-capitalize"
        color="indigo accent-4"
        depressed
        to="/service"
        >Services</v-btn
      >
      <v-btn
        tile
        class="hidden-sm-and-down mx-2 text-capitalize"
        color="indigo accent-4"
        depressed
        to="/contactus"
        >Contact</v-btn
      >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="gery"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo accent-4">
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon class="white--text font-weight-light">{{
              item.icon
            }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text font-weight-light">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        title: "Home",
        icon: "mdi-home",
        route: "/"
      },
      { title: "About", icon: "mdi-block-helper", route: "/about" },
      {
        title: "Service",
        icon: "mdi-dog-service",
        route: "/service"
      },
      {
        title: "Contact",
        icon: "mdi-phone",
        route: "/contactus"
      }
    ]
  })
};
</script>
