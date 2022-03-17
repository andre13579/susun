<script>
  import Router from 'svelte-spa-router';
  import routes from '~/routes';
  import Header from '~/components/Header.svelte';
  import Footer from '~/components/Footer.svelte';
</script>

<div class="wrap_andre">
  <Header />
  <Router {routes} />
  <Footer />
</div>