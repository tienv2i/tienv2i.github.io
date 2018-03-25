<template>
  <b-container class="mt-3">
    <b-row align-h="center">
      <b-col md="8" lg="6">
        <b-card
          header="Error"
          header-bg-variant="danger"
          header-text-variant="white"
          border-variant="danger"
        >
          <p class="card-text" v-if="error.statusCode === 404">
            Page not found!
          </p>
          <p class="card-text" v-if="error.statusCode !== 404">
            Error code: {{ error.statusCode }}
          </p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: ['error']
}
</script>
