import TopNavbar from "./TopNavbar";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <TopNavbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
