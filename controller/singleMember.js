import member from "../member/member.js";

const singleMemberController = (req, res) => {
  const found = member.some(
    (member) => member.id === parseInt(req.params.id)
  );
  console.log(found)
  if (found) {
    let singleMember;
    singleMember = member.filter(
      (member) => member.id === parseInt(req.params.id)
    );
    res.json(singleMember);
  }
  else {
    res.json('Member not found')
  }
};

export default singleMemberController;
