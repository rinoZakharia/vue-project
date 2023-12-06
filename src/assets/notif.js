import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

export const toastOK = () => {
  toast.success('Sukses', {
    autoClose: 1000
  });
};

// module.exports = {toastOK};