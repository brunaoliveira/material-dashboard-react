import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import PieChart from "examples/Charts/PieChart";
// import DefaultChart from "layouts/dashboard/defaultChart";

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
              <Grid item xs={12} md={6} lg={14}>
                <OrdersOverview />
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={4.5}>
            <Grid item xs={12} md={6} lg={14}>
              <PieChart
                title="Ofertas x Curso"
                description="Percentual de ofertas do ano de 2020 para cada curso"
              />
            </Grid>
          </Grid>
        </MDBox>
        {/* <MDBox mt={4.5}>
          <Grid container spacing={4.5}>
            <Grid item xs={12} md={6} lg={14}>
              <DefaultChart />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
