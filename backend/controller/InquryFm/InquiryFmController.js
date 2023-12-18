//
const { InquiryModal } = require("../../modals/Inquiry/InquiryFmModal");

const GetData = async (req, res) => {
  try {
    const data = await InquiryModal.find();
    return res.status(200).send({ message: "Data sent!", data: data, status: true });
  } catch (err) {
    return res.status(500).send({ message: err.message, status: false });
  }
};

const PostData = async (req, res) => {
  const payload = { ...req.body, createdAt: new Date() };

  try {
    // return res.status(200).send({ message: "Data Saved.", status: false });
    const data = await InquiryModal(payload);
    await data.save();

    if (data) {
      return res.status(200).send({ message: "Data Saved.", data: data, status: false });
    } else {
      return res.status(500).send({ message: "Something went Wrong!!", status: false });
    }
  } catch (err) {
    return res.status(500).send({ message: err.message, status: false });
  }
};

module.exports = { GetData, PostData };
