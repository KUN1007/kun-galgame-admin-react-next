interface CurrentUserInfo {
  uid: number
  name: string
  avatar: string
  moemoepoint: number
  roles: number
  token: string
}

const userInfoString = localStorage.getItem('KUNGalgameUser')

export const currentUserInfo: CurrentUserInfo = userInfoString
  ? JSON.parse(userInfoString)
  : {}
