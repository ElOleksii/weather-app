import Container from "../Common/Container";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="text-grey-text">
      <Header />
      <main className="dark:bg-dark-bg py-[30px] bg-light-bg h-screen">
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
