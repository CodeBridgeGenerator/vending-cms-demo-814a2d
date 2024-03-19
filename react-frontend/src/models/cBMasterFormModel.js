import client from '../services/restClient';

export const cBMasterForm = {
    state: {
        selectedCBMasterForm: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectCBMasterForm(state, cBMasterForm) {
            let toReturn = { ...state, selectedCBMasterForm: cBMasterForm };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE CBMasterForm ////
        ///////////////////////////
        async getOneCBMasterForm(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.cBMasterForm.selectedCBMasterForm?._id === _id) {
                    resolve(reduxState.cBMasterForm.selectedCBMasterForm);
                    return;
                }
                client
                    .service('cBMasterForm')
                    .get(_id)
                    .then((res) => {
                        this.selectCBMasterForm(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get cBMasterForm', error);
                        dispatch.toast.alert({ type: 'error', title: 'CBMasterForm', message: 'Failed to get cBMasterForm' });
                        reject(error);
                    });
            });
        },
        setOneCBMasterForm(_id, reduxState) {
            if (reduxState.cBMasterForm.selectedCBMasterForm?._id === _id) {
              return;
            }
            client
              .service("cBMasterForm")
              .get(_id)
              .then((res) => {
                this.selectCBMasterForm(res);
              })
              .catch((error) => {
                console.log("Failed to set CBMasterForm", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "CBMasterForm",
                  message: "Failed to set cBMasterForm",
                });
              });
          },
    })
};