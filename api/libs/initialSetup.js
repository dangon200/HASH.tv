const { Roles } = require("../models/Roles");

const createRoles = async () => {
  try {
    const count = await Roles.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Roles({ name: "User" }).save(),
      new Roles({ name: "Guest" }).save(),
      new Roles({ name: "Admin" }).save(),
      new Roles({ name: "Moderator" }).save(),
    ]);
    console.log(
      "🚀 ~ file: initialSetup.js ~ line 15 ~ createRoles ~ values",
      values
    );
  } catch (error) {
    console.error(error);
  }
};

createRoles();
