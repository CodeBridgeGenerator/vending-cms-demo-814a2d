import React from "react";
import HCMasterFormLayout from "../Layouts/HCMasterFormLayout";
import { connect } from "react-redux";
import HcStage1Page from "./HcStage1Page";

const HcStage1ProjectLayoutPage = (props) => {
  return (
    <HCMasterFormLayout>
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
              Hot Cold Stage 1  {" > " + props.selectedHCMasterForm?.RefNo} 
              </p>
            </div>
          </div>
          <HcStage1Page />
        </div>
      </div>
    </HCMasterFormLayout>
  );
};

const mapState = (state) => {
  const { selectedHCMasterForm } = state.hCMasterForm;
  return { selectedHCMasterForm };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(HcStage1ProjectLayoutPage);