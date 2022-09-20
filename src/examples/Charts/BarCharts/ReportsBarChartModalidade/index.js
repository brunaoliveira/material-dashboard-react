import Chart2 from "assets/images/charts/ano_ofertas_modalidade.png";

// import { useMemo } from "react";
import PropTypes from "prop-types";
// import { Bar } from "react-chartjs-2";
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
// import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import configs from "examples/Charts/BarCharts/ReportsBarChartModalidade/configs";

function ReportsBarChartModalidade({ title, description }) {
  // const { data, options } = configs(chart.labels || [], chart.datasets || {});
  const imgStyle = {
    height: "50%",
    width: "100%",
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        <div className="container">
          <img style={imgStyle} src={Chart2} alt="" />
        </div>
        {/* {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Bar data={data} options={options} />
            </MDBox>
          ),
          [chart, color]
        )} */}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChartModalidade.defaultProps = {
  // color: "dark",
  description: "",
};

// Typechecking props for the ReportsBarChart
ReportsBarChartModalidade.propTypes = {
  // color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // date: PropTypes.string.isRequired,
  // chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsBarChartModalidade;
