import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      {loading === false &&
        (userInfo.token === "" ? (
          <Navigate to="/login" replace="true" />
        ) : (
          children
        ))}
    </>
  );
};

export default ProtectedRoute;
