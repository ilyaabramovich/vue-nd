<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
              <v-alert type="error" v-model="show">Incorrect login or password</v-alert>
                <v-form lazy-validation ref="form" v-model="valid">
                  <v-text-field
                    v-model="login"
                    label="Login"
                    name="login"
                    type="text"
                    required
                    :rules="loginRules"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-checkbox v-model="teacher" label="Log in as teacher"></v-checkbox>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" :disabled="!valid" @click="onLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    onLogin() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        if (this.isTeacher) {
          if (this.login === 'teacher' && this.password === 'tdemo') {
            this.$router.push('/teacher');
          } else {
            this.$refs.form.reset();
            this.show = true;
          }
        } else if (this.login === 'student' && this.password === 'sdemo') {
          this.$router.push('/student');
        } else {
          this.$refs.form.reset();
          this.show = true;
        }
      }
    },
  },
  computed: {
    isTeacher() {
      return this.teacher;
    },
  },
  data: () => ({
    show: false,
    teacher: false,
    valid: true,
    login: '',
    password: '',
    loginRules: [
      v => !!v || 'Login is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ],
  }),
};
</script>
