const { where } = require("sequelize");
const { model, Sequelize, User } = require("../models/index");
const { authHash, createToken, compareHash } = require("./auth/auth");




const getAllUsers = async () => {
  try {
    // Truy vấn để lấy tất cả người dùng từ cơ sở dữ liệu
    const users = await User.findAll(); // Sử dụng User thay vì user
    return users;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách người dùng:', error);
    throw new Error('Không thể lấy danh sách người dùng');
  }
};



const fatchUser = async (value) => {
  try {
    const user = await model.user.findOne({
      where: {
        email: value.email,
      },
    });
    console.log("Value:", user);

    if (!user) {
      return "NOT FOUND!";
    } else {
      const Pass = {
        userPass: value.password,
        dbPass: user.password,
      };
      const res = compareHash(Pass);
      if (res) {
        const RetriveUpdate = {
          email: user.email,
          password: user.password,
        };
        const token = await createToken(RetriveUpdate);
        return token;
      } else {
        return "Password wrong!";
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const createUser = async (data) => {
  try {
    console.log("Value");
    const EncyPass = await authHash(data);
    const userData = { ...data, password: EncyPass };
    console.log(`UserData:`, userData);
    const FinalData = await model.user.create(userData);
    console.log(`response form databae:`, FinalData);
    return FinalData;
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async () => {};
const deleteUser = async () => {};

module.exports = { fatchUser, createUser, updateUser, deleteUser, getAllUsers };





