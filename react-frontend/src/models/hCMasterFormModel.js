import client from '../services/restClient';

export const hCMasterForm = {
    state: {
        selectedHCMasterForm: {}
    }, // initial state
    reducers: {
        update(state, newState) {
            return { ...state, ...newState };
        },
        selectHCMasterForm(state, hCMasterForm) {
            let toReturn = { ...state, selectedHCMasterForm: hCMasterForm };
            return toReturn;
        },
    },
    effects: (dispatch) => ({
        ///////////////////////////
        //// GET ONE HCMasterForm ////
        ///////////////////////////
        async getOneHCMasterForm(_id, reduxState) {
            return new Promise((resolve, reject) => {
                if (reduxState.hCMasterForm.selectedHCMasterForm?._id === _id) {
                    resolve(reduxState.hCMasterForm.selectedHCMasterForm);
                    return;
                }
                client
                    .service('hCMasterForm')
                    .get(_id)
                    .then((res) => {
                        this.selectHCMasterForm(res);
                        resolve(res);
                    })
                    .catch((error) => {
                        console.log('Failed to get hCMasterForm', error);
                        dispatch.toast.alert({ type: 'error', title: 'HCMasterForm', message: 'Failed to get hCMasterForm' });
                        reject(error);
                    });
            });
        },
        setOneHCMasterForm(_id, reduxState) {
            if (reduxState.hCMasterForm.selectedHCMasterForm?._id === _id) {
              return;
            }
            client
              .service("hCMasterForm")
              .get(_id)
              .then((res) => {
                this.selectHCMasterForm(res);
              })
              .catch((error) => {
                console.log("Failed to set HCMasterForm", error);
                dispatch.toast.alert({
                  type: "error",
                  title: "HCMasterForm",
                  message: "Failed to set hCMasterForm",
                });
              });
          },
    })
};