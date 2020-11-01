/**
 *
 * @url {String} 請求網址
 * @data {Object} 請求參數
 * @method {String} 請求方法
 *
 */
export default function request({ url, data, method = 'POST' }) {
  const isGet = method.toLocaleLowerCase() === 'get'
  console.log('method: ', isGet)

  return fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(!isGet && { body: JSON.stringify(data) }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.warn('Error:', err)

      return Promise.reject(err)
    })
}
