import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// import ChartOne from "./components/MyCharts/ChartOne";
import ChartTwo from "./components/MyCharts/ChartTwo";
import ChartThree from "./components/MyCharts/ChartThree";

function Billing() {
  return (
    <DashboardLayout>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="gps_fixed"
                title="UF"
                count="23%"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Porcentagem de ofertas do Brasil que se encontram no estado de São Paulo",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="explore"
                title="Região Norte"
                count="73%"
                percentage={{
                  color: "warning",
                  label: "Porcentagem das ofertas da região Norte que se encontram nas capitais",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="explore"
                title="Região Sul"
                count="23%"
                percentage={{
                  color: "warning",
                  label: "Porcentagem das ofertas da região Sul que se encontram nas capitais",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="public"
                title="Exterior"
                count="22"
                percentage={{
                  color: "success",
                  label: "22 ofertas de cursos com o valor Exterior aparecem pela primeira vez em 2020",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <MDBox>
            <Grid container spacing={4.5}>
              <Grid item xs={12} md={6} lg={14}>
                <MDBox mb={4.5}>
                  <ChartTwo
                    title="Oferta por estado"
                    description="Concentração de ofertas para cada unidade da federação nos anos de 2009 e 2020"
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox>
            <Grid container spacing={4.5}>
              <Grid item xs={12} md={6} lg={14}>
                <MDBox mb={4.5}>
                  <ChartThree
                    title="Oferta região: Capitais vs. Interior"
                    description="Concentração de ofertas para cada uma das regiões no ano de 2020, divididas entre capitais e interior"
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
