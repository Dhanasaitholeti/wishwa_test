const path = require('path');
const fs = require('fs/promises');

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
  try {
    const newForm = await formModel.create({
      name: formData.name,
      mobilenumber: formData.mobileNumber,
      occasiondate: new Date(),
      email: formData.email,
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
