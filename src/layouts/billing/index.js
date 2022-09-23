import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// import ChartOne from "./chartOne";
import ReportsBarChartModalidade from "examples/Charts/BarCharts/ReportsBarChartModalidade";

function Billing() {
  return (
    <DashboardLayout>
      <MDBox mt={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Cursos"
                count={19}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Números de diferentes cursos oferecidos na área da Computação",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Cursos"
                count="0"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Cursos oferecidos no grau Licenciatura atualmente",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="xxx"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "abc",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="xxx"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "abc",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={133}>
            <Grid item xs={26} md={20} lg={26}>
              {/* <MDBox mb={4.5}>
                <ChartOne title="some title" description="some description" />
              </MDBox> */}
              <MDBox mb={4.5}>
                <ReportsBarChartModalidade title="some title" description="some description" />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox>
            <Grid container spacing={4.5}>
              <Grid item xs={12} md={6} lg={14}>
                {/* some other */}
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
