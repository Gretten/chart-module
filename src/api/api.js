const firstChartData = {
    label: 'lorem ipsum1',
    fill: false,
    backgroundColor: 'red',
    borderColor: 'red',
    pointRadius: 1,
    pointHitRadius: 50,
    data: [60, 62, 64, 74, 69, 55, 56, 45, 37, 20, 15],
};

const secondChartData = {
    label: 'lorem ipsum2',
    fill: false,
    backgroundColor: 'green',
    borderColor: 'green',
    pointRadius: 1,
    pointHitRadius: 50,
    data: [10, 11, 13, 15, 16, 14, 13, 15, 19, 20, 27],
};

const thirdChartData = {
    label: 'lorem ipsum3',
    fill: false,
    backgroundColor: 'black',
    borderColor: 'black',
    pointRadius: 1,
    pointHitRadius: 50,
    data: [20, 16, 10, 5, 4, 5, 7, 8, 9, 9, 9],
};

const data = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [firstChartData, secondChartData, thirdChartData]
};

export default data;