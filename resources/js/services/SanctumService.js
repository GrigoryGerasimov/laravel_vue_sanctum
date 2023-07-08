const SANCTUM_XSRF_TOKEN = 's_token'

const SanctumService = {
    storeToken: payload => {
        localStorage.setItem(SANCTUM_XSRF_TOKEN, JSON.stringify(payload))
    },

    getToken: () => localStorage.getItem(SANCTUM_XSRF_TOKEN) && JSON.parse(localStorage.getItem(SANCTUM_XSRF_TOKEN)),

    removeToken: () => {
        localStorage.removeItem(SANCTUM_XSRF_TOKEN)
    }
}

export {
    SanctumService
}
