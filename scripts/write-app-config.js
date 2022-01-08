const fs = require('fs');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const api = axios.create({
  baseURL : process.env.API_URL,
  headers : {'x-api-key' : `${process.env.API_TOKEN}`}
});
async function writeAppConfig() {

  const {data} = await api({method : 'get', url : '/configs/1'});

  const androidBasePath = path.join(__dirname, '../android');
  async function firebase() {
    const firebasePath = path.join(androidBasePath, 'app/google-services.json');
    console.log(`Writing firebase config to ${firebasePath}`);

    return fs.writeFileSync(firebasePath,
                            JSON.stringify(data.firebaseConfig, null, 2));
  }
  async function appCenter() {
    const appCenterPath =
        path.join(androidBasePath, 'app/src/main/assets/appcenter-config.json');
    console.log(`Writing app center config to ${appCenterPath}`);
    return fs.writeFileSync(appCenterPath,
                            JSON.stringify(data.appCenter, null, 2));
  }
  async function exec() {
    await firebase().then(() => { console.log('Firebase config written'); });
    await appCenter().then(() => { console.log('AppCenter config written'); });
  }
  return await exec();
}
writeAppConfig().then((reason) => reason).catch((err) => err);
