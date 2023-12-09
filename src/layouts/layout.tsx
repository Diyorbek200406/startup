import { Box, Container } from "@chakra-ui/react";
import { LayoutProps } from "./layout.props";
import Header from "./header/header";
import { FunctionComponent, useState } from "react";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => setToggle((prev) => !prev);

  return (
    <Box>
      <Header onToggle={onToggle} />
      <Sidebar toggle={toggle} />
      <Box mt={"11vh"} pl={{ base: 0, lg: "320px" }} minH={"90vh"} transition={"all .5s ease"}>
        <Container maxW={"container.lg"}>{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;

export const WithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
