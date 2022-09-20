/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {
  const Curso = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={1} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "curso", accessor: "curso", width: "45%", align: "left" },
      // { Header: "function", accessor: "function", align: "left" },
      { Header: "modalidade", accessor: "modalidade", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        curso: <Curso name="Agrocomputação" />,
        // function: <Job title="Manager" description="Organization" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Banco de Dados" />,
        // function: <Job title="Programator" description="Developer" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Ciência da Computação" />,
        // function: <Job title="Executive" description="Projects" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Ciência de dados" />,
        // function: <Job title="Programator" description="Developer" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Computação e TIC* em biociências e saúde" />,
        // function: <Job title="Manager" description="Executive" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Criação digital" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        curso: <Curso name="Defesa cibernética" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Engenharia de computação (DCN Computação)" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Engenharia de software" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Gestão da tecnologia da informação" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Inteligência artificial" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Internet das coisas" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Jogos digitais" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Programas interdisciplinares abrangendo computação e TIC*" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Redes de computadores" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Segurança da informação" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="licenciatura" color="warning" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Sistemas embarcados" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
      {
        curso: <Curso name="Sistemas para internet" />,
        modalidade: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="bacharelado" color="primary" variant="gradient" size="md" />
            <MDBadge badgeContent="tecnológico" color="success" variant="gradient" size="md" />
          </MDBox>
        ),
      },
    ],
  };
}
