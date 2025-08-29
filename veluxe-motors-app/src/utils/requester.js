const host = import.meta.env.VITE_APP_host;
const appId = import.meta.env.VITE_APP_appId
const apiKey = import.meta.env.VITE_APP_apiKey

export async function requester(method, url, body, token) {
  const options = {
    method,
    headers: {
      'X-Parse-Application-Id': appId,
      'X-Parse-REST-API-Key': apiKey,
      'X-Parse-Revocable-Session': 1
    },
  };

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  if (token) {
    options.headers['X-Parse-Session-Token'] = token;
  }

  try {
    const res = await fetch(`${host}${url}`, options);
    let data;

    if (res.status !== 204) {
      data = await res.json();
    }

    // if (res.status !== 200 && res.status !== 204) {
    //   const error = data;
    //   throw error;
    // }
    
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const request = {
  get: requester.bind(null, "GET"),
  post: requester.bind(null, "POST"),
  put: requester.bind(null, "PUT"),
  del: requester.bind(null, "DELETE"),
};
