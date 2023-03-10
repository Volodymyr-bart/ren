import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";

const SharedLayout = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Container>
        <Outlet />
      </Container>
    </Suspense>
  );
};

export default SharedLayout;
