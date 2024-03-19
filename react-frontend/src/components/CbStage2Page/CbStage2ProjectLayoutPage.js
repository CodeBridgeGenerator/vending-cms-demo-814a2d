import React from "react";
import CBMasterFormLayout from "../Layouts/CBMasterFormLayout";
import { connect } from "react-redux";
import CbStage2Page from "./CbStage2Page";

const CbStage2ProjectLayoutPage = (props) => {
  return (
    <CBMasterFormLayout>
      <div className="pt-2">
        <div className="card p-0 overflow-hidden ">
          <div
            className="flex justify-content-between p-1 mb-2 shadow-2"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #d30078, #d1008f, #c600ab, #af00ca, #8312eb)",
            }}
          >
            <div className="flex align-items-center text-white">
              <p className="text-2xl text-white">
              Can Bottle Stage 2  {" > " + props.selectedCBMasterForm?.RefNo} 
              </p>
            </div>
          </div>
          <CbStage2Page />
        </div>
      </div>
    </CBMasterFormLayout>
  );
};

const mapState = (state) => {
  const { selectedCBMasterForm } = state.cBMasterForm;
  return { selectedCBMasterForm };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(CbStage2ProjectLayoutPage);