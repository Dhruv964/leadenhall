import {account} from '../../lib/appwrite'

// userAccount.js

export function getUserEmail() {
    return new Promise((resolve, reject) => {
      account.get()
        .then(function (response) {
          const userEmail = response.email;
          resolve(userEmail);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
  