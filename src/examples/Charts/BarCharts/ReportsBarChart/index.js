import Chart1 from "assets/images/charts/cursos_ofertas_modalidade.png";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ReportsBarChart({ title, description }) {
  const imgStyle = {
    height: "50%",
    width: "100%",
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        <div className="container">
          <img style={imgStyle} src={Chart1} alt="" />
        </div>
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

ReportsBarChart.defaultProps = {
  description: "",
};

ReportsBarChart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default ReportsBarChart;
