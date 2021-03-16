<template>
    <div class="small">
        <line-chart 
            :chart-data="dataCollection"
        ></line-chart>
        <button
            @click="fillData()"
        >
            Randomize
        </button>
    </div>
</template>

<script>
    import LineChart from './LineChart'
    export default {
        components: {
            LineChart,
        },
        data() {
            return {
                dataCollection: {}
            }
        },
        mounted: function () {
            this.fillData()
        },
        methods: {
            fillData() {
                this.dataCollection = {
                    labels: ['hello', 'world', 'no hello'],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: 'transparent',
                            data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt()],
                            borderColor: 'red',
                            borderWidth: 2,
                        },
                        {
                            label: 'Data Two',
                            backgroundColor: 'transparent',
                            data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt()],
                            borderColor: 'blue',
                            borderWidth: 2,
                        },
                                                {
                            label: 'Data Three',
                            backgroundColor: 'transparent',
                            data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt()],
                            borderColor: 'yellow',
                            borderWidth: 2,
                        },
                    ]
                }
            },

            getRandomInt() {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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