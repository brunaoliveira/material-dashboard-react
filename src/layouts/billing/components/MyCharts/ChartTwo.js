import Chart2009 from "assets/images/charts/ofertas_uf_2009.svg";
import Chart2020 from "assets/images/charts/ofertas_uf_2020.svg";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ChartOne({ title, description }) {
  const imgStyle = {
    height: "25%",
    width: "50%",
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        <div className="container">
          <img style={imgStyle} src={Chart2009} alt="" />
          <img style={imgStyle} src={Chart2020} alt="" />
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

ChartOne.defaultProps = {
  description: "",
};

ChartOne.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default ChartOne;
