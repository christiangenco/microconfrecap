const functions = require("firebase-functions");
const axios = require("axios");

const ACCESS_TOKEN = "7c3f78fe7ad71a91102616a0e8fc175db8123105";

const subscribe = ({ email, first, last, listId }) => {
  const url = `https://mail.gen.co/api/subscribe/${listId}?access_token=${ACCESS_TOKEN}`;
  // curl -XPOST https://mail.gen.co/api/subscribe/B16uVTdW?access_token=7c3f78fe7ad71a91102616a0e8fc175db8123105 \
  // --data 'EMAIL=test@example.com&FIRST_NAME=&LAST_NAME='

  return axios.post(url, {
    EMAIL: email,
    FIRST_NAME: first,
    LAST_NAME: last,
  });
};

// subscribe({
//   listId: "BkpoOc5hG",
//   email: "christian.genco+test@gmail.com",
//   first: "Christian",
// });

exports.mailtrainPush = functions.firestore
  .document("emails/{emailId}")
  .onWrite((change, context) => {
    const doc = change.after.exists ? change.after.data() : null;
    // const oldDocument = change.before.data();

    if (!doc) return null;
    if (doc.mailtrainId) return null;
    if (doc.mailtrainError) return null;

    return subscribe(doc)
      .then(({ data: { data: { id } } }) => {
        // set with merge:true will create the record if it doesn't exist, which is unnecessary
        // return change.after.ref.set({ mailtrainId: id }, { merge: true });

        return change.after.ref.update({ mailtrainId: id });
      })
      .catch(err => {
        const mailtrainError =
          (err && err.response && err.response.data) ||
          "something went wrong :/";

        return change.after.ref.update({ mailtrainError });
      });
  });
