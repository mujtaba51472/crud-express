import member from "../member/member.js";

const deleteMember = (req, res) => {
  const dltIndx = member.findIndex(
    (member) => member.id === parseInt(req.params.id)
  );
  console.log(dltIndx);
  res.json(member.splice(dltIndx, 1));
};

export default deleteMember;
