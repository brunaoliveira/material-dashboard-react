import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import reportsLineChartData2 from "layouts/rtl/data/reportsLineChartData2";
import ReportsBarChartModalidade from "examples/Charts/BarCharts/ReportsBarChartModalidade";
import authorsTableData from "layouts/tables/data/authorsTableData";
// import Chart2 from "assets/images/charts/ano_ofertas_modalidade.png";
// import projectsTableData from "layouts/tables/data/projectsTableData";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Tables() {
  const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <MDBox pt={4} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={7.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="fact_check"
                title="Ano"
                count={2009}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Cursos presenciais são 50.66% das ofertas",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={7.5}>
              <ComplexStatisticsCard
                color="success"
                icon="trending_up"
                title="Ano"
                count={2014}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "As ofertas de cursos EAD passam a ser maioria",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={7.5}>
              <ComplexStatisticsCard
                color="success"
                icon="trending_up"
                title="2020"
                count={90.14}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Cursos a distância são absoluta maioria em nível superior ",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        <MDBox mt={1.5} mb={5.5}>
          <Grid container spacing={133}>
            <Grid item xs={6} md={10} lg={26}>
              {/* linha abaixo:  aumenta distancia vertical com o próximo elemento */}
              <MDBox mb={4.5}>
                <ReportsBarChartModalidade
                  color="info"
                  title="total de cursos x presencial"
                  description="Oferta total dos cursos e sua proporção na modalidade presencial"
                  date="campaign sent 2 days ago"
                  chart={reportsLineChartData2}
                />
              </MDBox>
            </Grid>
          </Grid>
          {/* <MDBox>
            <Grid container spacing={4.5}>
              <Grid item xs={12} md={6} lg={14}>
                <OrdersOverview />
              </Grid>
            </Grid>
          </MDBox> */}
        </MDBox>
        <MDBox mt={2.5}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Cursos vistos do ponto de vista de modalidade
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
            {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
