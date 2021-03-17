<template>
    <div class="small">
        {{
            dataCollection 
        }}
        <button
            @click="fillData()"
        >
            Randomize
        </button>
        <LineChart :chart-data="dataCollection" />
        <Spinner />
    </div>
</template>

<script>
    import LineChart from './LineChart'
    import Spinner from './Spinner/Spinner'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        components: {
            LineChart,
            Spinner
        },
          computed: {
            ...mapGetters([
                 'getData',
            ])
        },
        data() {
            return {
                dataCollection: {}
            }
        },
        mounted: function () {
            this.$store.dispatch('fetchDataChart')
        },
        methods: {
            ...mapActions([
                'fetchDataChart'
            ]),
            fillData() {

            }
        }
    }
</script>

<style  scoped>

  .small {
    max-width: 600px;
    margin:  150px auto;
  }

</style>