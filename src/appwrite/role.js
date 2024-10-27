const sdk = require("node-appwrite");
const { default: conf } = require("../conf/conf");

module.exports = async function (req, res) {
  const client = new sdk.Client();
  const users = new sdk.Users(client);

  client
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
    .setProject(conf.appwriteProjectId) // Your project ID
    .setKey("appwriteUrl"); // Your secret API key

  const { userId, roles } = req.body;

  try {
    const response = await users.updateLabels(userId, roles);
    res.json(response);
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};
