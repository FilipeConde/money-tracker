import {getRealm} from './Realm';

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: 'ab',
        amount: 12.4,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data, true);
    });

    console.log(data);
  } catch (error) {
    console.error(
      'saveEntry :: error on save object: ',
      JSON.stringify(this.data),
    );
    alert('Erro ao salvar os dados.');
  }

  return data;
};
