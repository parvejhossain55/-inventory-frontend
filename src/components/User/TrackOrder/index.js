import { useState } from "react";
import Stepper from "react-stepper-horizontal";
import { checkOrderStatus } from "../../../apiRequest";
import { toast } from "react-toastify";

const UserTrackOrder = () => {
  const [steperStatus, setSteperStatus] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [activeStep, setActiveStep] = useState("");

  const handleOrder = async (e) => {
    const isIdValid = validateInput(orderId);

    if (!isIdValid) {
      toast.error("Invalid Order Id");
    } else {
      const { status } = await checkOrderStatus(orderId);
      if (status === "Pending") setActiveStep(0);
      if (status === "Processing") setActiveStep(1);
      if (status === "Ordered") setActiveStep(2);
      if (status === "Shipped") setActiveStep(3);
      if (status === "Delivered") setActiveStep(4);
      setSteperStatus(true);
    }
  };

  function validateInput(input) {
    const regex = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{3}$/;
    return regex.test(input);
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8 mt-4">
          <div class="form-group row">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Order Id"
                id="firstname"
                name="firstName"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div class="col-sm-2">
              <button
                type="submit"
                onClick={handleOrder}
                className="btn btn-success"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {steperStatus && (
        <div className="mt-4">
          <Stepper
            steps={[
              { title: "Pending" },
              { title: "Processign" },
              { title: "Ordered" },
              { title: "Shipped" },
              { title: "Delivered" },
            ]}
            activeStep={activeStep}
          />
        </div>
      )}
    </>
  );
};

export default UserTrackOrder;
