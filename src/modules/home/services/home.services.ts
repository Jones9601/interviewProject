import {ApiMethod, Service} from '@src/core-services';
import Config from 'react-native-config';

export const getUserData = (): Promise<any> => {
  return Service.send({
    baseurl: Config.END_POINT ?? '',
    method: ApiMethod.GET,
    url: 'unicorns',
  });
};

export const deleteUserData = (id: string): Promise<any> => {
  return Service.send({
    baseurl: Config.END_POINT ?? '',
    method: ApiMethod.DELETE,
    url: `unicorns/${id}`,
  });
};
