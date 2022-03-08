const snakecaseKeys = require("snakecase-keys");

function sck(obj) {
  const sckObj = { ...obj };
  snakecaseKeys(sckObj);
  return sckObj;
}

function readyForDB(post) {
  return (post.paragraphs = JSON.stringify(post.paragraphs));
}

function readyForJS(posts) {
  posts.map((posts) => {
    return (posts.paragraphs = JSON.parse(posts.paragraphs));
  });
}

module.exports = {
  readyForDB,
  readyForJS,
  sck,
};
