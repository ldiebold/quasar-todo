import { ref } from 'vue'

const user = ref({})

const setUser = data => {
  user.value = data
}

export {
  user,
  setUser
}
