import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  }, [navigate]);

  return (
    <>
      <div className="container my-10 flex-grow-1">
        <div className="text-center my-5">
          <h5 className="mb-3">Oops! 網址錯誤！</h5>
          <p className="mb-3">將自動導回首頁</p>
          <div className="spinner-border text-warning mt-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
