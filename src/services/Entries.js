import {getRealm} from './Realm';

export const saveEntry = async (value) => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;

  try {
    realm.write(() => {
      data = {
        id: 'ab',
        amount: amount,
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
