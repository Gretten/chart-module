
<script>
    import { Line, mixins } from 'vue-chartjs'
    const { reactiveProp } = mixins

    export default {
        extends: Line,
        mixins: [reactiveProp],
        prop: ['options'],
        mounted() {
            this.renderChart(this.chartData,  {responsive: true})
        }
    }
</script>

<style scoped>

</style>