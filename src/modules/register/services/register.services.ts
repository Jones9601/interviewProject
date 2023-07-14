import {ApiMethod, Service} from '@src/core-services';
import {UserData} from '@src/core-services/service.model';
import Config from 'react-native-config';

export const updateUserData = (id: string, params: UserData): Promise<any> => {
  return Service.send({
    baseurl: Config.END_POINT ?? '',
    method: id === '' ? ApiMethod.POST : ApiMethod.PUT,
    url: `unicorns${id === '' ? '' : '/'}${id}`,
    obj: params,
  });
};
