import { toast } from 'react-toastify'

export const ReusableToast = (toastMessage: string) => {
  toast(`${toastMessage}`, {
    autoClose: 2000,
    hideProgressBar: true,
  })
}
