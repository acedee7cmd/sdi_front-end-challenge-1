import { ref } from 'vue'

export function usegetDateNow() {
  let toDate = ref(null)

  const getDateNow = () => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    let today = new Date()
    let month = today.getMonth()
    let day = today.getDate().toString().padStart(2, '0') // Adds leading 0 if necessary
    let year = today.getFullYear()
    let date = months[month] + ' ' + day + ', ' + year
    
    toDate.value = date
  }

  return {
    getDateNow,
    toDate
  }
}