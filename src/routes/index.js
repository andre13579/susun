import Home from './Home.svelte'
import About from './About.svelte'
import NotFound from '~/components/NotFound.svelte'

export default {
  '/': Home,
  '/about': About,
  '*': NotFound
}