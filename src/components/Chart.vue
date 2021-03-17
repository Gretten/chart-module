<template>
    <div class="small">
        <LineChart :chart-data="dataCollection" v-if="dataCollection"/>
        <Spinner v-else/>
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
                dataCollection: null,
            }
        },
        mounted: function () {
            this.$store.dispatch('fetchDataChart')
                .then(res => {
                    console.log(res)
                })
        },
        methods: {
            ...mapActions([
                'fetchDataChart'
            ]),
            fillData() {

            }
        },
        watch: {
            '$store.state.dummyData'(value) {
                if(value) {
                    this.dataCollection = value;
                }
            },
        }
    }
</script>

<style  scoped>

  .small {
    max-width: 600px;
    margin:  150px auto;
  }

</style>