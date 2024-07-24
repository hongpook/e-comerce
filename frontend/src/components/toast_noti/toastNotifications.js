import { toast } from 'react-toastify';

export const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const notifyInfo = (message) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const notifyWarning = (message) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
