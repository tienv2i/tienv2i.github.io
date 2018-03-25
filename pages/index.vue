<template>
  <b-container class="mt-3">
    <b-row>
      <b-col>
        <b-jumbotron header="MiiNews Project" lead="MiiNews project created by NuxtJS and BootstrapVue" >
          <p>For more information visit website</p>
          <b-btn variant="primary" href="#" v-b-modal.moreInfo>More Info</b-btn>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-modal id="moreInfo" title="Information!" ok-only>
      <p>
        This site is in development
      </p>
      <p>
        Contact: tienv2i&lt;tienv2i@gmailcom&gt;
      </p>
    </b-modal>
  </b-container>
</template>