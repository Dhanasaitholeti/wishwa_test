const path = require('path');
const fs = require('fs/promises');
// import validator from 'validator';
const validator = require('validator');

const formModel = require('../models/form');
const { generateResponse } = require('../utils/generateResponse');

const getLogos = async (req, res, next) => {
  const logosDirectory = path.resolve(__dirname, '../static/logo');

  try {
    const files = await fs.readdir(logosDirectory);

    const svgFiles = files.filter((file) => path.extname(file) === '.svg');

    const logoData = await Promise.all(
      svgFiles.map(async (file) => {
        const title = path.parse(file).name;
        const filePath = path.join(logosDirectory, file);
        const data = await fs.readFile(filePath, 'utf8');
        return { title, data };
      }),
    );
    res
      .status(200)
      .json(
        generateResponse(true, 'SVG files retrieved successfully', logoData),
      );
  } catch (error) {
    next(error);
  }
};

const handleForm = async (req, res, next) => {
  const formData = req.body;
  console.log(formData);
  try {
    if (!validator.isEmail(formData.email))
      throw new Error('Check your Email Format.');
    if (!validator.isMobilePhone(formData.mobile))
      throw new Error('Enter you mobile number correctly');
    const newForm = await formModel.create({
      name: formData.name,
      mobilenumber: formData.mobile,
      occasiondate: new Date(),
      email: formData.email,
      donatingForFamilyFriends: formData.donatingForFamilyFriends,
      recipientName: formData.recipientName,
      recipientMobile: formData.recipientMobile,
      recipientEmail: formData.recipientEmail,
    });
    console.log(newForm.data);
    res.status(200).json(generateResponse(true, 'Form SUbmitted', newForm));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLogos,
  handleForm,
};
