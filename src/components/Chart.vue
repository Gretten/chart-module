<template>
    <div class="small">
        <LineChart :chart-data="data" v-if="data.datasets"/>
        <Spinner v-else/>
    </div>
</template>

<script>
    import LineChart from './LineChart'
    import Spinner from './Spinner/Spinner'
    import { mapActions, mapState } from 'vuex'

    export default {
        components: {
            LineChart,
            Spinner
        },
        computed: mapState({
            data: 'dummyData'
        }),
        mounted: function () {
            this.$store.dispatch('fetchDataChart')
        },
        methods: {
            ...mapActions([
                'fetchDataChart'
            ]),
        },
    }
</script>

<style  scoped>

  .small {
    max-width: 600px;
    margin:  150px auto;
  }

</style>