const ctx = document.getElementById("myChart").getContext("2d");

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Hours",
      data: [3, 5, 6, 4, 7, 5, 6],
      backgroundColor: "rgba(255, 105, 180, 0.5)",
      borderColor: "rgba(255, 105, 180, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
        scaleLabel: {
          display: true,
          labelString: "Hours",
          fontSize: 10,
          fontColor: "#555",
          fontFamily: "Poppins",
          fontStyle: "500",
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Days",
          fontSize: 10,
          fontColor: "#555",
          fontFamily: "Poppins",
          fontStyle: "500",
        },
      },
    ],
  },
};

const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});
