/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Timeline
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>
            {" deeeee"}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="payment"
          title="2020 - seis novos cursos ofertados"
          dateTime="Agrocomputação, Ciência de dados, Computação e TIC* em biociências e saúde, Criação digital, Inteligência artificial, Internet das coisas"
        />
        <TimelineItem
          color="success"
          icon="payment"
          title="2018 - novo curso ofertado"
          dateTime="Defesa cibernética"
        />
        <TimelineItem
          color="success"
          icon="payment"
          title="2013 - novo curso ofertado"
          dateTime="Sistemas embarcados"
        />
        <TimelineItem
          color="success"
          icon="payment"
          title="2009 - primeiro ano de coleta dos dados, totalizando 11 cursos"
          dateTime="Banco de dados, Ciência da computação, Engenharia de computação (DCN Computação), Engenharia de software, Gestão da tecnologia da informação, Jogos digitais, Programas interdisciplinares abrangendo computação e TIC*, Redes de computadores, Segurança da informação, Sistemas de informação, "
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
