import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  return (
    <DashboardLayout>
      <MDBox py={4.5}>
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
                  label: "Números de cursos oferecidos na área da Computação",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="xxx"
                count="2,300"
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
              {/* linha abaixo:  aumenta distancia vertical com o próximo elemento */}
              <MDBox mb={4.5}>
                <ReportsBarChart
                  color="info"
                  title="total de cursos x presencial"
                  description="Oferta total dos cursos e sua proporção na modalidade presencial"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox>
            <Grid container spacing={4.5}>
              {/* <Grid item xs={12} md={6} lg={8}>
                <Projects />
              </Grid> */}
              <Grid item xs={12} md={6} lg={14}>
                <OrdersOverview />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
