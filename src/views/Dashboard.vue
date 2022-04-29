<template>
  <main id="Home-page">
    <div id="dashboard">
      <div class="container">
        <h3 class="jumbotron pt-4">Dashboard</h3>
        <div class="row">
          <div
            class="col mt-4"
            sm="12"
            md="6"
            v-for="item in CategoriesList"
            :key="item.id"
          >
            <stats-card
              :title="item.title"
              :description="item.description"
              :colors="item.color"
            />
          </div>
        </div>
        <div id="chart">
          <apexchart
            type="area"
            height="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StatsCard from "../components/cards/StatsCard.vue";
import ApexCharts from "apexcharts";

export default {
  components: {
    StatsCard,
    ApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          stacked: true,
          events: {
            selection: function (chart, e) {
              console.log(new Date(e.xaxis.min));
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
      CategoriesList: [
        {
          id: 1,
          title: "All Candidate",
          description: "120",
          color: "white",
        },

        {
          id: 2,
          title: "New Candidate",
          description: "40",
          color: "white",
        },
        {
          id: 3,
          title: "On Progress",
          description: "25",
          color: "white",
        },
        {
          id: 4,
          title: "Pending",
          description: "47",
          color: "white",
        },
        {
          id: 5,
          title: "Not Met",
          description: "15",
          color: "white",
        },
        {
          id: 6,
          title: "Completed",
          description: "92",
          color: "white",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#dashboard {
  background: #f6f6f6;
  min-height: 100%;

  .container {
    .jumbotron {
      font-weight: $font-bold;
    }
  }
}
</style>