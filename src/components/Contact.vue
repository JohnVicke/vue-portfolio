<template>
  <v-container style="padding-top: 10%;" id="landing">
    <div id="contact" class="d-flex flex-column align-center">
      <div id="head">
        <h1>
          OK, Let's create
          <br />something great!
        </h1>
        <p>
          If you like my work and have some cool project to work on,
          <br />send me a direct message or contact me through my
          social sites.
        </p>

        <v-btn x-large class="mt-8" outlined data-aos="fade-right" @click.stop="dialog = true">
          <v-icon class="mr-2">mdi-send-circle</v-icon>Get in touch
        </v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card :loading="loading">
            <v-card-title class="headline">Email information</v-card-title>

            <div class="px-4">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="name" required :rules="nameRules" label="Name"></v-text-field>
                <v-text-field v-model="email" required :rules="emailRules" label="Email"></v-text-field>
                <v-textarea
                  required
                  v-model="message"
                  :rules="messageRules"
                  outlined
                  name="input-7-1"
                  label="Message"
                  auto-grow
                ></v-textarea>
              </v-form>
              <v-card-actions>
                <v-btn text @click="dialog = false">Close</v-btn>
                <v-spacer></v-spacer>

                <v-btn type="submit" @click="sendEmail" outlined>
                  <v-icon>mdi-send</v-icon>Send
                </v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <v-snackbar v-model="snackbar" top style="padding-top: 20%;">
      {{`Thanks ${name} for your interest! I will get back to you soon / Viktor Malmedal`}}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import Vue from "vue";
import emailjs from "emailjs-com";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
Vue.component("kinesis-container", KinesisContainer);
Vue.component("kinesis-element", KinesisElement);

export default {
  Components: {
    KinesisContainer,
    KinesisElement
  },

  data: () => ({
    valid: true,
    dialog: false,
    loading: false,
    snackbar: false,
    name: "",
    email: "",
    message: "",
    nameRules: [v => !!v || "Name is required"],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    messageRules: [v => !!v || "Name is required"]
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    sendEmail() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const service_id = process.env.VUE_APP_SERVICE_ID;
        const template_id = process.env.VUE_APP_TEMPLATE_ID;
        const user_id = process.env.VUE_APP_USER_ID;
                

        const template_paramas = {
          user_name: this.name,
          user_email: this.email,
          message: this.message
        };

        emailjs.send(service_id, template_id, template_paramas, user_id).then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            this.dialog = false;
            this.snackbar = true;
          },
          error => {
            console.log("FAILED...", error);
          }
        );
      }
    }
  }
};
</script>

<style>
#head h1 {
  font-size: 3rem;
}

#contact p {
  font-size: 1.2rem;
}
</style>
