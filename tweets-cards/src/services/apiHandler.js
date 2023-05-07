const GEN_URL = 'https://6456655a5f9a4f236142e706.mockapi.io/users'

const apiHandler = (endpoint) => {
    return fetch(GEN_URL)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(new Error('Something went wrong'))
            }
    })
}

export default apiHandler;
