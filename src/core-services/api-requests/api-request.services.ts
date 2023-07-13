import axios, {AxiosResponse, CancelTokenSource} from 'axios';
import instance from './axios-instance';
import {stores} from '@src/core-stores';
import {ApiMethod} from '..';
import {Logger} from '@src/utils';

const apiLogger = (key: string, value: any) => {
  Logger.api(key, JSON.stringify(value, null, 1));
};

const logInfo = (key: string, value: any) => {
  Logger.info(key, JSON.stringify(value, null, 1));
};

const apiRequestTimeout = Number.parseInt('30', 10) * 1000;

const get = async (url: string, sourceValue?: CancelTokenSource) => {
  const source = sourceValue ?? axios.CancelToken.source();
  const timer = setTimeout(() => {
    if (source) source.cancel();
  }, apiRequestTimeout);
  const response = await instance.get(url, {
    cancelToken: source.token,
  });
  clearTimeout(timer);
  return response;
};

const post = async (
  url: string,
  params: any,
  sourceValue?: CancelTokenSource,
  config?: any,
) => {
  const source = sourceValue ?? axios.CancelToken.source();
  const timer = setTimeout(() => {
    if (source) source.cancel();
  }, apiRequestTimeout);
  const response = await instance.post(url, params.obj, {
    cancelToken: source.token,
    ...config,
  });
  clearTimeout(timer);
  return response;
};

const patch = async (
  url: string,
  params: {[Key in string]: string},
  sourceValue?: CancelTokenSource,
) => {
  const source = sourceValue ?? axios.CancelToken.source();
  const timer = setTimeout(() => {
    if (source) source.cancel();
  }, apiRequestTimeout);
  const response = await instance.patch(url, params, {
    cancelToken: source.token,
    //   ...setAuthConfig(url),
  });
  clearTimeout(timer);
  return response;
};

const put = async (
  url: string,
  params: {[Key in string]: string},
  sourceValue?: CancelTokenSource,
) => {
  const source = sourceValue ?? axios.CancelToken.source();
  const timer = setTimeout(() => {
    if (source) source.cancel();
  }, apiRequestTimeout);
  const response = await instance.put(url, params, {
    cancelToken: source.token,
    //   ...setAuthConfig(url),
  });
  clearTimeout(timer);
  return response;
};

const Delete = async (url: string, sourceValue?: CancelTokenSource) => {
  const source = sourceValue ?? axios.CancelToken.source();
  const timer = setTimeout(() => {
    if (sourceValue) source.cancel();
  }, apiRequestTimeout);
  const response = await instance.delete(url, {
    cancelToken: source.token,
    //   ...setAuthConfig(url),
  });
  clearTimeout(timer);
  return response;
};

instance.interceptors.request.use(request => {
  apiLogger('> Request:', {
    url: request?.url,
    headers: request?.headers,
    data: request?.data,
  });
  return request;
});

instance.interceptors.response.use(
  response => {
    logInfo('> Response:', {
      statusCode: response?.status,
      data: response?.data,
    });
    if (response.data.error) {
      return Promise.reject(response);
    }
    return response;
  },
  error => {
    logInfo('> Error:', error);
    const {response} = error;

    if (axios.isCancel(error)) {
      // request timeout
      return Promise.reject({
        status: 408,
      });
    } else if (!response) {
      // network error
      return Promise.reject({
        status: 500,
      });
    }
    return Promise.reject(response);
  },
);

export const send = (params: {
  baseurl: string;
  method: ApiMethod;
  url: string;
  obj?: any;
  showErrorModal?: boolean;
  loader?: boolean;
  loaderTitle?: string;
  shouldEncrypt?: boolean | undefined;
  isForm?: boolean | undefined;
  isURLEncoded?: boolean | undefined;
  sourceValue?: CancelTokenSource;
}) => {
  if (params.loader ?? true) {
    stores.setLoading(true);
  }

  const handleSuccess = (
    result: AxiosResponse,
    handleCancel: () => void,
    resolve: (value: PromiseLike<unknown> | unknown) => void,
  ) => {
    if (params.loader ?? true) {
      stores.setLoading(false);
    }
    if (!result) {
      handleCancel();
    }
    resolve(result);
  };

  const handleError = (error_: any, reject: (reason?: any) => void) => {
    if (error_.data?.error) {
      reject(error_.data);
    }
    if (params.loader ?? true) {
      stores.setLoading(false);
    }
    reject(error_);
  };

  return new Promise((resolve, reject) => {
    const Url: string = params.baseurl + params.url;
    let Params: {[x: string]: string};

    if (!params || typeof params !== 'object') {
      throw new Error('params is undefined or not an object');
    }

    const handleCancel = () => {
      reject();
    };

    switch (params.method) {
      case ApiMethod.GET: {
        get(Url, params.sourceValue)
          .then((result: AxiosResponse) => {
            handleSuccess(result, handleCancel, resolve);
          })
          .catch(error_ => handleError(error_, reject));
        break;
      }

      case ApiMethod.POST: {
        Params = params.obj;
        if (params.isForm) {
          params.obj.isForm = params.isForm;
        }
        post(Url, params, params.sourceValue)
          .then((result: AxiosResponse) => {
            handleSuccess(result, handleCancel, resolve);
          })
          .catch(error_ => handleError(error_, reject));
        break;
      }

      case ApiMethod.PATCH: {
        Params = params.obj;
        patch(Url, Params, params.sourceValue)
          .then((result: AxiosResponse) => {
            handleSuccess(result, handleCancel, resolve);
          })
          .catch(error_ => {
            handleError(error_, reject);
          });
        break;
      }

      case ApiMethod.PUT: {
        Params = params.obj;
        put(Url, Params, params.sourceValue)
          .then((result: AxiosResponse) => {
            handleSuccess(result, handleCancel, resolve);
          })
          .catch(error_ => {
            handleError(error_, reject);
          });
        break;
      }

      case ApiMethod.DELETE: {
        Delete(Url, params.sourceValue)
          .then((result: AxiosResponse) => {
            handleSuccess(result, handleCancel, resolve);
          })
          .catch(error_ => {
            handleError(error_, reject);
          });
        break;
      }

      default: {
        break;
      }
    }
  });
};
