<template>
  <div id="app">
    <b-navbar toggleable='md' type='dark' variant='primary'>
      <b-container>
        <b-navbar-toggle target='nav_collapse'></b-navbar-toggle>
        <b-navbar-brand>MIINEWS</b-navbar-brand>
        <b-collapse is-nav id='nav_collapse'>
          <b-navbar-nav>
            <b-nav-item :to='{path: "/"}' exact>HOME</b-nav-item>
            <b-nav-item :to='{ path: "/todo" }' exact>TODO</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt/>
  </div>
</template>